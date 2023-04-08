
    //using DOM 
    //fetching data from OpenWeatherMap API
    //creating function to fetch data from OpenWeatherMap API
window.onload = function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&units=metric&type=accurate&&appid=798553883f5af06723ef16b4eb7107b5')//use of API key to acess openweathermap data
  .then((response) => response.json())//converting the server data into json format
  .then(response =>{
    //use getElementById to select given id in HTML for DOM
    /*.innerHTML for DOM manipulation
      shows to  fetched value in webpage
    */
      document.getElementById("cityName").innerText = response.name + "," + response.sys.country;
      document.getElementById("weatherCondition").innerText = "Feels like " + Math.round(parseFloat(response.main.feels_like)) + "°C. " + response.weather[0].description + ".";
      document.getElementById("temperature").innerText = Math.round(parseFloat((response.main.temp))) + "°C";
      document.getElementById("pressure").innerText = "Pressure: " + response.main.pressure + "hPa";
      document.getElementById("humidity").innerText = "Humidity: " + response.main.humidity + "%";
      document.getElementById("windSpeed").innerText = "Wind: " + response.wind.speed + "m/s ";
      document.getElementById("windDirection").innerText = "Direction: " + response.wind.deg + "°";
    
}   )
.catch(err => {
	
  // Display errors in console
  console.log(err);
});
}
weatherFetch()


.then(data => { //Fetching datas from the given api into console
  console.log(data.weather[0].main);
  console.log(data.main.temp);
  console.log(data.main.pressure);
  console.log(data.main.humidity);
  console.log(data.wind.speed);
  console.log(data.wind.deg);


  const celcius = Math.round(data.main.temp - 273); //Conversion of the temp from kelvin to celcius 

  var info = //Changing the fetched values using a place holder
    
<ul class="mid-input">
            <li id="city-name">${data.name},${data.sys.country}</li>
            <li id="weather-condition">${data.weather[0].main}</li>
            <li id="temp">Temp: ${celcius}°C</li>
            <li id="pressure">Pressure: ${data.main.pressure}hpa  </li>
            <li id="humid">Humidity: ${data.main.humidity}%</li>
            <li id="wspeed">Wind Speed: ${data.wind.speed} km/hr</li>
            <li id="wspdD">Direction of wind: ${data.wind.deg}°</li>
        </ul>
  
  document.getElementById("data").innerHTML = info;