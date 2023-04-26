<?php
    header("Access-Control-Allow-Origin: *");
    // ==================== CONNECTING THE DATABASE ==================== 
    // Connecting to db_2065697 database
    $mysqli = new mysqli("localhost","root","","db_2065697");
    if ($mysqli -> connect_errno) {
        // Showing connection error if couldn't connect
        echo "Connection Error" . $mysqli -> connect_error;
        exit();
    }
    // Including the weather data from weather_data.php
    include('./weather_data.php');
    // Executing the SQL query
    $sql = "SELECT * FROM weather ORDER BY timeUpdate DESC limit 1";
    $result = $mysqli -> query($sql);

    // Getting data
    // Converting the data to JSON
    $row = $result -> fetch_assoc();
    echo json_encode($row);
    
    // Free result set and close connection
    $result -> free_result();
    $mysqli -> close();
?>