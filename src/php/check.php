<?php 
	//验证用户名是否存在的PHP
	header("Access-Control-Allow-Origin:*");
	$username=$_GET["userP"];
	//连接服务器
	mysql_connect("localhost:3306","root","");
	//选择数据库
	mysql_select_db("test");
	//编写SQL语句
	$sql="SELECT COUNT(*) FROM users WHERE username='$username'";
	//执行查询
	$result=mysql_query($sql);
	//返回查询结果集（虚拟表）
	if($row=mysql_fetch_array($result)){
		if($row[0]==1)
			echo '{"status":0,"message":"exist"}';
		else
			echo '{"status":1,"message":"not exist"}';
	}else{
		echo '{"status":-1,"message":"error"}';
	}
	//关闭数据库连接
	mysql_close();
 ?>