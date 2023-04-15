<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sakila";

//Create connection
$conn = new mysqli($servername, $username, $password, $database);

//Check connection status
if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error); // . is concatination operator, join garcha duita li //$conn->connect_error: exitting the connection
}
echo "Connection established <br>";

$query = "SHOW TABLES;";
$result = $conn->query($query);

if ($result -> fetch_assoc()) {
    //output data of each row
    while ($row = $result->fetch_assoc()) {
        echo $row ["Tables_in_sakila"]."<br>";
    }
} 
else {
    echo "0 results";
}

$sql = "SELECT * from actor_info";
$result = $conn->query($sql);

if ($result->num_rows > 0){
    //output data of each row
    while ($row = $result->fetch_assoc()){
        echo $row["first_name"]. "  ". $row["last_name"]. "  ". $row["actor_id"]. "  "."<br>";
    }
} else {
    echo "0 results";
}
?>