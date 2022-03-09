// https://api.openweathermap.org/data/2.5/weather?q=<<Rexburg>>&units=metric&apikey=<<aad7ffd645e4a31b6964d0d1b89b7412>>

// // 47f7abc9fb8d42da42f18ca738b0a7a7

// var temp = 50;

// var wind_speed = 20;


function calculate_wind_chill(temp, wind_speed) {
// These numbers are either in Fahrenheit or MPH.
if (temp <= 50 && wind_speed >= 3) {
    var wind_chill = 35.74 + (0.6215 * temp) - (35.75 * (wind_speed**0.16)) + (0.4275 * temp * wind_speed**0.16)
    //Round Variable
    wind_chill = `${wind_chill.toFixed(1)} F`
    return wind_chill
} else {
    var wind_chill = "N/A"
    return wind_chill
}}


//-----------------------------WEATHER API------------------------------------
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=02d473c5cf694ebadd4f2571d38f204c";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log('Test');

    
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const description = jsObject.weather[0].description;
    console.log(description)
    document.querySelector('#weather_icon').setAttribute('src', iconsrc);
    document.querySelector('#weather_icon').setAttribute('alt', description);
    document.querySelector('figcaption').textContent = description;


let temp = document.querySelector('#current_temp').textContent = ((jsObject.main.temp - 273.15)* 1.8000 + 32.00).toFixed(1);

let wind_speed = document.querySelector('#current_wind').textContent = (jsObject.wind.speed * 1.6).toFixed(1);

    wind_chill = calculate_wind_chill(temp, wind_speed);
    console.log(wind_chill)

    document.querySelector('#wind_chill').textContent = wind_chill;

  });