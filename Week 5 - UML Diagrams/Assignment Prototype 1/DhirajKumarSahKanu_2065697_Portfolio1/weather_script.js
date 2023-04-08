//use of DOM 
    //fetching data from openweathermap data base 
window.onload = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&units=metric&appid=798553883f5af06723ef16b4eb7107b5')

    // Convert response string to json object
    .then(response => response.json()) 
    .then(response => {
        console.log(response);
        //using getElementById to select given id in HTML for DOM
       // using .innerText to rendered text content of a node and its descendants
       // using .response to access data and interact with external software components
        document.getElementById('city').innerText = response.name + ', ' + response.sys.country; 
        document.getElementById('city_temp').innerText = Math.round(parseFloat((response.main.temp))) + '°C';
        document.getElementById('city_status').innerText = 'The weather condition seems like '  + response.weather[0].description + '.';
        document.getElementById('humidity').innerText = 'Humidity: ' + response.main.humidity + " %";
        document.getElementById('pressure').innerText = 'Pressure: ' + response.main.pressure + " hPa";
        document.getElementById('wind_speed').innerText = 'Wind speed: ' + response.wind.speed + " m/s ";
        document.getElementById('wind_direction').innerText = 'Wind Direction: ' + response.wind.deg + "°";
    })
    .catch(err => {
         // Display errors in console
        console.log(err);
    });
}