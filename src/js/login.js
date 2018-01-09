require(["config"], function(){
	require(["jquery","cookie","load"], function($,cookie){
		$.cookie.json = true;
			$("#formLogin").submit(function(e){
			e.preventDefault();
			
			var  user = $("#userP").val(),
				 pass = $("#password").val();
			// console.log(user);
			// console.log(pass);
			var urls = `http://10.7.187.99/login.php`;
				$.ajax({
					url:urls,
					type:"POST",
					data : `username=${user}&password=${pass}`,
					dataType:"json",
					success:function(data){
						console.log(data);
						if(data.status==1){
							$.cookie("key",user,{expires:7,path:"/"});
							var loginuser=$.cookie('key');
							if(loginuser){
								$(".ss").html(loginuser);

							}

							location="/index.html";

							
						}else{

							$(".pw").text("密码错误");
						}									
					}

			});

	    });
    });
});