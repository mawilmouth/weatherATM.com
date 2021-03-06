/*
    -these functions will be called to ONLY post data
        -ALL of the data will be passed in as variables
    
    -Created by: Michael Wilmouth
*/
const postWeatherData = (jsonData) => {
    var localData = jsonData;
    locationBox.textContent = localData.name;

    var getMilTime = convertTime(localData.timezone);
    var getStandardTime = militaryToStandard(getMilTime);
    timeBox.textContent = getStandardTime;

    var localDate = calcDate(getMilTime);
    dateBox.textContent = localDate;

    var kelvinTemp = localData.main.temp;
    var farTemp = convertF(kelvinTemp);
    var celTemp = convertC(kelvinTemp);
    farBox.textContent = farTemp;
    celBox.textContent = celTemp;

    findIcon(localData, true, 0);

    var kelvinMax = localData.main.temp_max;
    var kelvinMin = localData.main.temp_min;
    var max = convertF(kelvinMax);
    var min = convertF(kelvinMin);
    weatherMax.innerHTML = max + "&#8457;";
    weatherMin.innerHTML = min + "&#8457;";

    var description = localData.weather[0].description;
    weatherDescribe.textContent = description.charAt(0).toUpperCase() + description.slice(1);

    var humidity = localData.main.humidity;
    weatherHumidity.textContent = humidity + "%";

    var mps = localData.wind.speed;
    var mph = convertWindSpeed(mps);
    weatherWind.textContent = mph + " mph";

    var unixSunrise = localData.sys.sunrise;
    var unixSunset = localData.sys.sunset;
    var unixTimeZone = localData.timezone;
    var sunrise = getTime(unixSunrise, unixTimeZone);
    var sunset = getTime(unixSunset, unixTimeZone);
    weatherSunrise.textContent = sunrise;
    weatherSunset.textContent = sunset;

    var longitude = localData.coord.lon;
    var latitude = localData.coord.lat;
    weatherCords.textContent = longitude + "/" + latitude; 
}
const postForecastDay = (num, jsonData, listNum) => {
    var elemNum = num;
    var data = jsonData;
    var timeNum = listNum;
    var date = document.getElementById("dayName" + elemNum);
    var temp = document.getElementById("dayTemp" + elemNum);
    var day = forecastDate(data.list[timeNum].dt_txt);
    console.log(day);
    date.textContent = day;
    findIcon(data, false, elemNum);
    var kelvinTemp = data.list[timeNum].main.temp;
    var farTemp = convertF(kelvinTemp);
    temp.textContent = farTemp;
}
const postForecastData = (jsonData) => {
    var localData = jsonData;
    //log each day that will be used BEGIN
    console.log("Post forecast data:");
    var length = localData.list.length;
    var fiveDayCount = 1;
    for(var i = 0; i < length; i++){
        var time = localData.list[i].dt_txt;
        var hour = time.slice(10,13);
        //select and post each day based on the 12:00pm time
        if(hour == 12){
            console.log(localData.list[i]);
            postForecastDay(fiveDayCount, localData, i);
            fiveDayCount++;
        }
    }
}