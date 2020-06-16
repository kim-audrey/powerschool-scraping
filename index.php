<?php 
session_start();
if(!isset($_SESSION['username'])){
    $_SESSION['msg']="Login First";
    header("location: login.php");
}
if(isset($_GET['logout'])){
    session_destroy();
    unset($_SESSION['username']);
    header("location: login.php");
}
?>


<!DOCTYPE html>
<html lang = "en">
    <head>
    </head>


    <body>
        <h1>Test</h1>
        <?php 
        if(isset($_SESSION['success'])):
        
        ?>

        <div>
            <h3>
                <?php
                echo $_SESSION['success'];
                unset($_SESSION['success']);
                
                ?>

            </h3>
        </div>
        <?php endif ?>


        <?php if(isset($_SESSION['username'])) : ?>
            <h3>Welcome <?php echo $_SESSION['username'] ?> </h3>
            <p><a href="index.php?logout='1'">Logout</a></p>

        <?php endif ?>
    </body>



</html>