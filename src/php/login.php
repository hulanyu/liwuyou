<?php 
	header("Access-Control-Allow-Origin:*");
	$uname = $_POST["username"];
	$upwd = $_POST["password"];
	/*连接数据库查询*/
	//连接服务器
	mysql_connect("localhost:3306","root","");
	//选择数据库
	mysql_select_db("test");
	//编写SQL语句
	$sql="SELECT id,username FROM users WHERE username='$uname' AND password='$upwd'";

	//执行查询
	$result=mysql_query($sql);

	if ($row=mysql_fetch_array($result,MYSQL_ASSOC)) {
		echo '{"status":1, "data":'.json_encode($row).'}';
	} else {
		echo '{"status":0,"data":{}}';
	}
	
	//关闭数据库连接
	mysql_close();
 ?>