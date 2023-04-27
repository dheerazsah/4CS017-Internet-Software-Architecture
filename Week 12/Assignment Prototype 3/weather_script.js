// Use of DOM 
    // ==================== FETCHING DATA ====================
    // Loading and showing the inserted components 
    window.onload = function() {
        
        if(localStorage.timeUpdate != null && parseInt(localStorage.timeUpdate) + 300000 > Date.now()) { // Checking if the timestamp is not null
            let freshness = Math.round((Date.now() - localStorage.timeUpdate)/1000) + " second(s)"; 
            document.getElementById('city').innerText = localStorage.city; // Storing the elements of city to local storage
            document.getElementById('city_temp').innerText = localStorage.city_temp; // Storing the elements of city temperature to local storage
            document.getElementById('city_status').innerText = localStorage.city_status; // Storing the elements of city status to local storage
            document.getElementById('humidity').innerText = localStorage.humidity; // Storing the elements of humidity to local storage
            document.getElementById('pressure').innerText = localStorage.pressure; // Storing the elements of pressure to local storage
            document.getElementById('wind_speed').innerText = localStorage.wind_speed; // Storing the elements of wind speed to local storage
            document.getElementById('wind_direction').innerText = localStorage.wind_direction; // Storing the elements of wind direction to local storage
            console.log(freshness); 
            // No local cache, access network
        } 
        else {
        // Fetching data from localhost from the database created 
        fetch('http://localhost:8080/weather_connect.php')
    
        // Converting response string to json object
        .then(response => response.json()) 
        .then(response => {
            console.log(response);
            // Using getElementById to select given id in HTML for DOM
            // Using .innerText to rendered text content of a node and its descendants
            // Using .response to access data and interact with external software components
            document.getElementById('city').innerText = response.city; // 
            document.getElementById('city_temp').innerText = Math.round(parseFloat((response.temperature))) + '°C';
            document.getElementById('city_status').innerText = 'The weather condition seems like '  + response.weatherCondition + '.';
            document.getElementById('humidity').innerText = 'Humidity: ' + response.humidity + " %";
            document.getElementById('pressure').innerText = 'Pressure: ' + response.pressure + " hPa";
            document.getElementById('wind_speed').innerText = 'Wind speed: ' + response.windSpeed + " m/s ";
            document.getElementById('wind_direction').innerText = 'Wind Direction: ' + response.windDirection + "°";
            // Adding time update for every time data is updated
            console.log(response.timeUpdate)

            // New data is stored to browser with new timestamp
            localStorage.city = response.city; // Storing city name in local storage 
            localStorage.city_temp = Math.round(parseFloat((response.temperature))) + '°C'; // Storing temperature data in local storage 
            localStorage.city_status = 'The weather condition seems like '  + response.weatherCondition + '.'; // Storing weather condition data in local storage 
            localStorage.humidity = 'Humidity: ' + response.humidity + " %"; // Storing humidity data in local storage 
            localStorage.pressure = 'Pressure: ' + response.pressure + " hPa"; // Storing pressure data in local storage 
            localStorage.wind_speed = 'Wind speed: ' + response.windSpeed + " m/s "; // Storing wind speed data in local storage 
            localStorage.wind_direction = 'Wind Direction: ' + response.windDirection + "°"; // Storing wind direction data in local storage 
            localStorage.timeUpdate = Date.now(); // Storing time update data in local storage
        })
        .catch(err => { // Catching the error
            console.log(err);  // Displaying errors in console
        });
    }
}