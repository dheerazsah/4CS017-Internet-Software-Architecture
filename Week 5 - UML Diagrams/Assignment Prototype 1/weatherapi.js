window.onload = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&units=metric&type=accurate&&appid=798553883f5af06723ef16b4eb7107b5')
	
    .then(response => response.json())
    .then(response => {
        document.getElementById("weatherCity").innerText = response.name + "," + response.sys.country;
        document.getElementById("weatherTemp").innerText = Math.round(parseFloat((response.main.temp))) + "°C";
        document.getElementById("weatherContd").innerText = "Feels like " + Math.round(parseFloat(response.main.feels_like)) + "°C. " + response.weather[0].description + ".";
        document.getElementById("windSpeed").innerText = "Wind: " + response.wind.speed + "m/s ";
        document.getElementById("windDirection").innerText = "Direction: " + response.wind.deg + "°";
        document.getElementById("pressure").innerText = "Pressure: " + response.main.pressure + "hPa";
        document.getElementById("humidity").innerText = "Humidity: " + response.main.humidity + "%";
    })
    .catch(err => {
        console.log(err);
    });	
}