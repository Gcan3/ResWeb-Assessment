<?php
//Storing important keys into a variable
$username = 'root';
$password = '';
$dbname = "rheupharm";

//sql connection using the keys and storing it inside the variable
$con = mysqli_connect("localhost:3307", $username, $password, "$dbname");
//$con=mysqli_connect("localhost3307","root","","library");


if (!$con) {
    //if not connected then display error
    die("Could not connect MySql Server:".mysqli_error());
}
else {
    //else display connection
    echo"<h1> CONNECTED! <h1>";
}

?>