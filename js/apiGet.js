/*
    -These functions will be called to make a request to the API and post the found data
    -Four functions -> post weather by city, post weather by zip code, post forecast by city, post forecast by zip code

    -Created by: Michael Wilmouth
*/
const postWeatherCity = (city) => {
    var searchData = city;
    var response = "";
    var apiWeather = apiCityWeather + searchData + apiKey;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiWeather, true);
    xhr.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log("CONNECTION MADE TO SERVER...WEATHER");
            response = JSON.parse(this.responseText);
            //post response data to current weather details
            postWeatherData(response);
        }else{
            console.log("ERROR CONNECTING TO SERVER...");
            alert("Please enter a valid city name.");
            giveErrorIcon();
        }
    }
    xhr.send();
}
const postWeatherZip = (zip) => {
    var searchData = zip;
    var response = "";
    var apiWeather = apiZipWeather + searchData + apiKey;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiWeather, true);
    xhr.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log("CONNECTION MADE TO SERVER...WEATHER");
            response = JSON.parse(this.responseText);
            //post response data to current weather details
            postWeatherData(response);
        }else{
            console.log("ERROR CONNECTING TO SERVER...");
            alert("Please enter a valid zip code.");
            giveErrorIcon();
        }
    }
    xhr.send();
}
const postForecastCity = (city) => {
    var searchData = city;
    var response = "";
    var apiForecast = apiCityForecast + searchData + apiKey;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiForecast, true);
    xhr.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log("CONNECTION MADE TO SERVER...FORECAST");
            response  = JSON.parse(this.responseText);
            //post response data to forecast section
            postForecastData(response);
        }else{
            console.log("ERROR CONNECTING TO SERVER...FORECAST");
        }
    }
    xhr.send();
}
const postForeCastZip = (zip) => {
    const searchData = zip;
    var response = "";
    var apiForecast = apiZipForecast + searchData + apiKey;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiForecast, true);
    xhr.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log("CONNECTION MADE TO SERVER.FORECAST");
            response = JSON.parse(this.responseText);
            //post response data to forecast section
            postForecastData(response);
        }else{
            console.log("ERORR CONNECTING TO SERVER...FORECAST");
        }
    }
    xhr.send();
}