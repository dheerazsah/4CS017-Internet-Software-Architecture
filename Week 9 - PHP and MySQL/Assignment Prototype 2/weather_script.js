// Use of DOM 
    // ==================== FETCHING DATA ====================
    // Fetching data from localhost from the database created 
    window.onload = function() {
        fetch('http://localhost:8080/weather_connect.php')
    
        // Converting response string to json object
        .then(response => response.json()) 
        .then(response => {
            console.log(response);
            // Using getElementById to select given id in HTML for DOM
            // Using .innerText to rendered text content of a node and its descendants
            // Using .response to access data and interact with external software components
            document.getElementById('city').innerText = response.city; 
            document.getElementById('city_temp').innerText = Math.round(parseFloat((response.temperature))) + '°C';
            document.getElementById('city_status').innerText = 'The weather condition seems like '  + response.weatherCondition + '.';
            document.getElementById('humidity').innerText = 'Humidity: ' + response.humidity + " %";
            document.getElementById('pressure').innerText = 'Pressure: ' + response.pressure + " hPa";
            document.getElementById('wind_speed').innerText = 'Wind speed: ' + response.windSpeed + " m/s ";
            document.getElementById('wind_direction').innerText = 'Wind Direction: ' + response.windDirection + "°";
            // Adding time update for every time data is updated
            console.log(response.timeUpdate)
        })
        .catch(err => {
             // Displaying errors in console
            console.log(err);
        });
    }