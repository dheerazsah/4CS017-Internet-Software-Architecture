<?php 
    header("Access-Control-Allow-Origin: *");
    // ==================== CONNECTING THE DATABASE ==================== 
    // Connecting to db_2065697 database
    $mysqli = new mysqli("localhost","root","","db_2065697");
    if ($mysqli -> connect_errno) {
         // Showing connection error if couldn't connect
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }

    // Selecting the weather data in database
    $sql = "SELECT * FROM weather WHERE timeUpdate >= DATE_SUB(NOW(), INTERVAL 3600 SECOND) ORDER BY timeUpdate DESC limit 1";
    $result = $mysqli -> query($sql);

    // If 0 record found
    if ($result->num_rows == 0) {
        // Fetching weather data of San Antonio from OpenWeatherMap
        // Using custom API key
        $url = 'https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=798553883f5af06723ef16b4eb7107b5&type=accurate&units=metric';
        // Getting data from openweathermap and storing in JSON object
        $data = file_get_contents($url);
        $json = json_decode($data, true);
        // Fetch required fields
        // var_dump($json);
        $city_status = $json['weather'][0]['description'];
        $city_temp = $json['main']['temp'];
        $wind_speed = $json['wind']['speed'];
        $wind_direction = $json['wind']['deg'];
        $pressure = $json['main']['pressure'];
        $humidity = $json['main']['humidity'];
        $city = $json['name'];

        // Building INSERT SQL statement
        // Adding the values using INSERT SQL statement
        $sql = "INSERT INTO weather (weatherCondition, temperature, windSpeed, windDirection, pressure, humidity, city) VALUES ('{$city_status}', {$city_temp}, {$wind_speed}, '{$wind_direction}', '{$pressure}', '{$humidity}','{$city}')";
        // Running SQL statement 
        // Reporting errors
        if (!$mysqli -> query($sql)) {
            echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
        }
    }
?>