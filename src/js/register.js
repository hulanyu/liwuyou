require(["config"], function(){
	require(["load"], function(){
		$.cookie.json = true;
		$("#sub").click(function(){
			var  user = $("#userP").val(),
				 pass = $("#password").val();
			var urls = `http://10.7.187.99/username.php?userP=${user}&password=${pass}`;
			
				$.ajax({
					url:urls,
					type:"GET",
					datatype:"json",
					success:function(data){
					
					}
				});
				location="/index.html";
		});
	});
});