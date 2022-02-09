// https://api.openweathermap.org/data/2.5/weather?q=<<Rexburg>>&units=metric&apikey=<<aad7ffd645e4a31b6964d0d1b89b7412>>

// // 47f7abc9fb8d42da42f18ca738b0a7a7

var temp = 50;

var wind_speed = 20;


function calculate_wind_chill(temp, wind_speed) {
// These numbers are either in Fahrenheit or MPH.
if (temp <= 50 && wind_speed >= 3) {
    var wind_chill = 35.74 + (0.6215 * temp) - (35.75 * (wind_speed**0.16)) + (0.4275 * temp * wind_speed**0.16)
    //Round Variable
    wind_chill = wind_chill.toFixed(1)
    return wind_chill
} else {
    var wind_chill = "N/A"
    return wind_chill
}}

wind_chill = calculate_wind_chill(temp, wind_speed);
console.log(wind_chill)

// Display Weather to Screen

document.getElementById('tempature').innerHTML = `${temp} Degrees`
document.getElementById('wind_speed').innerHTML = `Wind Speed: ${wind_speed} MPH`
document.getElementById('wind_chill').innerHTML = `Temperature with Wind Chill: ${wind_chill} Degrees`
