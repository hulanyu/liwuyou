<?php 
	header("Access-Control-Allow-Origin:*");
	$username=$_GET["userP"];
	$password=$_GET["password"];
	mysql_connect("localhost:3306","root","");
	mysql_select_db("test");
	$sql="INSERT INTO `test`.`users`(`username`,`password`)VALUES('$username','$password')";
	$re = mysql_query($sql);
	if($re){
		echo '{"status":1, "message":"success"}';
	}else{
			echo '{"status":0, "message":"failed"}';
	}
	mysql_close();
?>