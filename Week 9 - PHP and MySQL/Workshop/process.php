<?php
// First check if you can accest POST variables
// var_dump($_POST);
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];





// Check if Database Exists, if it does not fire the Create Database Query 
$servername = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password);

if($conn->connect_error){
    exit("Connection Failed: ".$conn->connect_error);
}

$query = "SELECT SCHEMA_NAME
FROM INFORMATION_SCHEMA.SCHEMATA
WHERE SCHEMA_NAME = 'contact'";

$result = $conn->query($query);
if($result->num_rows == 0){
    // Create Database
    $database = "contact";
    $db_query = "CREATE DATABASE ".$database.";";
    $conn->query($db_query);
    // Select Database
    $conn->select_db($database);
    // Create Table
    $table_query = "
        create table message(
            id int auto_increment primary key,
            name varchar(80),
            email varchar(80),
            message varchar(500)
        );
    ";
    $conn->query($table_query);
}
else{
    // Select Database
    $database = "contact";
    $conn->select_db($database);
}







?>