/*Wind Chill Function*/
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


    function weather_warning(wind_speed, temp, wind_chill) {
        let content = '';
        if ( wind_speed > 40){
            return content = `Wind is about ${wind_speed} MPH. Be careful!`
        }
        else if (temp > 90){
            return content = `It is ${temp} degrees outside! Do not stay in the sun too long and drink plenty of water!`
        }
        else if( temp < 32){
            return content = `It is ${wind_speed} degrees outside and feels like ${wind_chill} with wind chill!. Dress warm!`
        }
        else{
            return false
        }
    }

    function add_announce(warning){
        if (warning != false){
            document.querySelector('.announce').innerHTML = warning;
            document.querySelector('.announce').classList.add('announce_style');
            
        }
    }

/*----------------Weather API----------------*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=02d473c5cf694ebadd4f2571d38f204c";

fetch(apiURL)
/*Convert data into json*/
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const description = jsObject.weather[0].description;
        console.log(description)

        document.querySelector('#weather_icon').setAttribute('src', iconsrc);
        document.querySelector('#weather_icon').setAttribute('alt', description);
        document.querySelector('#weather_description').textContent = description;

        let temp = document.querySelector('#current_temp').textContent = ((jsObject.main.temp - 273.15)* 1.8000 + 32.00).toFixed(2);
        let wind_speed = (jsObject.wind.speed * 1.6).toFixed(2);
        document.querySelector('#humidity').textContent=jsObject.main.humidity;


        wind_chill = calculate_wind_chill(temp, wind_speed);


        // document.querySelector('#wind_chill').textContent = wind_chill;

    let warning = weather_warning(wind_speed, temp, wind_chill)
    add_announce(warning)
    });
