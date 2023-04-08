fetch('https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=798553883f5af06723ef16b4eb7107b5')
  .then(response => response.json())

  .then(data => {
    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    console.log(data.main.pressure);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    console.log(data.wind.deg);

    const celcius = Math.round(data.main.temp - 273);

    var info =
      
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
  })

  .catch(err => alert("Error"));