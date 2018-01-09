// 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		$(document).ready(function(){
			var loginuser=$.cookie('key');
			if(loginuser){
					$(".ss").html(loginuser);
					$(".tui").show();
			}
		
		});
	}).done(function(){
		// 绑定查找的键盘按键事件
		$(".search .word").keyup(function(){
			var url = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=?";
			$.getJSON(url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					html += "<div>"+ curr[0] +"</div>"
				});

				$(".search .info").html(html);
			});
		});
	}).done(function(){
		//当鼠标滑过显示导航内容
		$("#category").mouseover(function(){
			$("#category_pop").show();
		});

	}).done(function(){
		//当鼠标移出隐藏导航内容
		$("#category").mouseout(function(){
			$("#category_pop").hide();
		});
	}).done(function(){
		//当鼠标滑过显示登录注册
		$("#user").mouseover(function(){
			$(".username").show();

		});
		$(".username").mouseover(function(){
			$(".username").show();

		});
	}).done(function(){
		//当鼠标移出隐藏登录注册
		$("#user").mouseout(function(){
			$(".username").hide();
		});
		$(".username").mouseout(function(){
			$(".username").hide();
		});
	}).done(function(){
		//当鼠标滑过显示登录注册
		$("#car").mouseover(function(){
			$(".car-box").show();

		});
	}).done(function(){
		//当鼠标移出隐藏登录注册
		$("#car").mouseout(function(){
			$(".car-box").hide();
		});
	
	}).done(function(){
		$(".tui").click(function(){
			
			var _user=$.cookie("key",user,{expires:-1,path:"/"});
			
			if(_user===false){
				$(".ss").html("<a href='/html/login.html'>"+"登录"+"</a>"+"/"+"<a href='/html/register.html'>"+"注册"+"</a>");
			}
		})
	});

	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
});