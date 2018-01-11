<?php 
	header("Access-Control-Allow-Origin:*");
	//获取请求中用户传递的用户名与密码
	$username=$_POST["userP"];
	$password=$_POST["password"];
	/*将用户名与密码保存到数据库中*/
	//连接数据库服务器
	mysql_connect("localhost:3306","root","");
	//选择数据库
	mysql_select_db("test")
	//编写插入数据的SQL语句
	$sql="INSERT INTO 'test'.'users'('username','password') VALUES ('$username','$password')";
	//执行SQL语句
	$result=mysql_query($sql);
	//返回值为true表示执行成功，否则表示执行失败
	if($result){
		echo "<script>location='/indedx.html';</script>";
	}else{
		echo "<script>location='/html/register.html';</script>";
	}
	//关闭数据库连接
	mysql_close();
 ?>