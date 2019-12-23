/*
    -This is the master JS file that will call functions created in other files. 
    -This function ONLY calls other functions and holds all CONST variables
        -The functions called from this file is responsible for manipulating and posting data accordingly
    -Created by: Michael Wilmouth
*/
const apiZipWeather = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiZipForecast = "http://api.openweathermap.org/data/2.5/forecast?zip=";
const apiCityWeather = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiCityForecast = "http://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&appid=cd699991ab3a5434041fb6dac06cfa3a";
//sections begin
const mainApp = document.getElementById("mainSection");
const loadingContain = document.getElementById("loadingScreen");
//sections end
//search buttons begin
const searchBar = document.getElementById("searchContent");
const zipBtn = document.getElementById("zipButton");
const cityBtn = document.getElementById("cityButton");
//search buttons end
//weather items begin
const dateBox = document.getElementById("dateBox");
const locationBox = document.getElementById("resultLocation");
const timeBox = document.getElementById("resultTime");
const farBox = document.getElementById("locationFar");
const celBox = document.getElementById("locationCel");
const weatherIconParent = document.getElementById("weatherIconBox");
const weatherMax = document.getElementById("outputMax");
const weatherMin = document.getElementById("outputMin");
const weatherDescribe = document.getElementById("outputDescription");
const weatherHumidity = document.getElementById("outputHumidity");
const weatherWind = document.getElementById("outputWind");
const weatherSunset = document.getElementById("outputSunset");
const weatherSunrise = document.getElementById("outputSunrise");
const weatherCords = document.getElementById("outputCords");
//weather items end
const main = () => {
    var startUpSearch = "knoxville,us";
    async function startPage(){
        loadingData();
        await postWeatherCity(startUpSearch);
        await postForecastCity(startUpSearch);
    }
    startPage();
}
main();