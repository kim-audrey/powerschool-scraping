<?php

session_start();
$username="";
$password="";
$errors = array();
$db= mysqli_connect("localhost", "root", "", "ps01") or die("Could not connect");

if(isset($_POST['reg_user'])){

$username=mysqli_real_escape_string($db,$_POST['username']);
$password=mysqli_real_escape_string($db,$_POST['password']);

if(empty($username || $password)){
    array_push($errors,"Usernameand password required");
}
/*
if(empty($username)){array_push($errors,"Username required");}
if(empty($password)){array_push($errors,"Password required");}
*/

$user_check_query= "SELECT * FROM user WHERE username = '$username' LIMIT 1 ";

$results=mysqli_query($db,$user_check_query);
$user=mysqli_fetch_assoc($results);

if($user)
    if($user['username']=== $username){array_push($errors,"Already exists");}

if(count($errors)==0){
    //md5() encrypts
    $query="INSERT INTO user (username, password) VALUES('$username','$password')";
    mysqli_query($db,$query);
    $_SESSION['username']=$username;
    $_SESSION['success']= "You are logged in";

    header("location: index.php");
}
}




?>
