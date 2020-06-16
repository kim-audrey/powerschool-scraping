<?php include('server.php')?>
<!DOCTYPE html>
<html lang = "en">
    <head>
    </head>




    <body>

        <div class="container">
            <div class="header">
                <h2>Login</h2>
            </div>

            <form action="login.php" method="post">
            <input name = "username" type = "text" placeholder = "username" required>
            <input name = "password" type = "password" placeholder = "password" required>
            <button type="submit" name="login_user">Login</button>
            <p>New Here?<a href="register.php"><b>Register</b></a></p>
        </form>

        </div>


    </body>



</html>