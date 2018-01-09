require(["config"], function(){
	require(["jquery","load"], function($){
		$.cookie.json = true;
		$("#formUser").submit(function(e){
			//阻止表单默认提交
			e=e ||event;
			e.preventDefault?e.preventDefault():e.returnValue=false;
			var  user = $("#userP").val(),
				 pass = $("#password").val();
			
			var urls = `http://10.7.187.99/username.php?userP=${user}&password=${pass}`;
			
				$.ajax({
					url:urls,
					type:"GET",
					dataType:"json",
					success:function(data){
						/*data=JSON.parse(data);*/
					if(data.status===1){
							location="/index.html";
						}else{
							location="/html/register.html";
						}
					}
					
				});
				
		});
		$("#userP").blur(function(){
			var  user = $("#userP").val(),
				 reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
			if(!reg.test(user)){
				$("#username_info").text("用户信息有误,请输入正确的用户名");
			}else{
				$("#username_info").text("用户信息正确");
			}
			var urls = `http://10.7.187.99/check.php?userP=${user}`;
			$.ajax({
				url:urls,
				type:"GET",
				dataType:"json",
				success:function(data){
				/*	console.log(data);*/
					

					if(data.status!==0){
							
							$("#username_info1").text("可以使用");
						}
					else{
							$("#username_info1").text("该用户名已被注册");
						
					}
				}
				// error:function(){
				// 	$("#username_info1").text("该账户已经被注册");
				// }
			});

		});

		function generate(){
				var url="http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7";
				var result=$.getJSON(url,function(data){
					//设置图片的src属性，显示出验证码
					$(".vali").attr("src",data.showapi_res_body.image);
					//缓存sid用于验证码校验
					$(".vali").data("sid",data.showapi_res_body.sid);
				});
			}
			generate();
			$(".vali").click(generate);
			$(".inputT").blur(function(){
				//获取输入的字符串n mn
				var _input=$(".inputT").val();
				//sid
				var _sid=$(".vali").data("sid");
				//url
				var url=`http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode=${_input}&sid=${_sid}`;
				//getJSON
				$.getJSON(url,function(data){
					if(data.showapi_res_body.valid)
						$(".info1").text("验证成功");
					else
						$(".info1").text("输入验证码有误");
				});
			});
	});
});