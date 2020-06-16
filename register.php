<?php include('server.php')?>
<!DOCTYPE html>
<html lang = "en">
    <head>
    </head>




    <body>

        <div class="container">
            <div class="header">
                <h2>Register</h2>
            </div>

            <form action="register.php" method="post">
            <?php include('errors.php'); ?>

            <input name = "username" type = "text" placeholder = "username" required>
            <input name = "password" type = "password" placeholder = "password" required>
            <button type="submit" name="reg_user">Register</button>
            <p>Registered?<a href="login.php"><b>Login</b></a></p>
        </form>

        </div>


    </body>



</html>