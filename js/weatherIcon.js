/*
    -This function will be used to determine the correct weather icon to display
    -The API provides a list of possible conditions
    -The conditions will be in an array named after the weather icon to be used
    -Loop throught the array and compair result with the different icons to find the correct icon 

    Created by: Michael Wilmouth
*/

/*
    weather icons:
        <img src="https://img.icons8.com/plasticine/100/000000/sun.png">                -clear day
        <img src="https://img.icons8.com/dusk/100/000000/new-moon.png">                 -clear night
        <img src="https://img.icons8.com/nolan/100/000000/rain.png">                    -rain day/night
        <img src="https://img.icons8.com/color/100/000000/snow.png">                    -snow day/night
        <img src="https://img.icons8.com/officel/100/000000/cloud-lighting.png">        -storm day/night
        <img src="https://img.icons8.com/plasticine/100/000000/partly-cloudy-day.png">  -cloudy-day
        <img src="https://img.icons8.com/plasticine/100/000000/fog-night.png">          -cloudy-night
        <img src="https://img.icons8.com/pastel-glyph/100/000000/wind--v1.png">         -wind
*/
const storm = [200,201,202,210,211,212,221,230,231,232];
const rain = [300,301,302,310,311,312,313,314,321,500,501,502,503,504,511,520,521,522,531];
const snow = [600,601,602,611,612,613,615,616,620,621,622];
const atmosphere = [701,711,721,731,741,751,761,762,771,781];
const clear = [800];
const clouds = [801,802,803,804];

//weatherIconParent -> place the icon as a child to this element

//loop through all condition arrays and return the condition value
const findCondition = (idNum) => {
    var id = idNum;
    for(var i = 0; i <= storm.length; i++){
        if(id == storm[i]){
            return 0;
        }
    }
    for(var i = 0; i <= rain.length; i++){
        if(id == rain[i]){
            return 1;
        }
    }
    for(var i = 0; i <= snow.length; i++){
        if(id == snow[i]){
            return 2;
        }
    }
    for(var i = 0; i <= atmosphere.length; i++){
        if(id == atmosphere[i]){
            return 3;
        }
    }
    for(var i = 0; i <= clear.length; i++){
        if(id == clear[i]){
            return 4;
        }
    }
    for(var i = 0; i <= clouds.length; i++){
        if(id == clouds[i]){
            return 5;
        }
    }
}
//return day or night based on time -> get time from HTML id="resultTime"
//api gives 00m or 00d -> n==night and d==day
const isDay = (data, weatherPost, forecastDay) => {
    var weatherElem = weatherPost;
    var api = data;
    var day = true;
    if(weatherElem){
        var icon = api.weather[0].icon;
    }
    if(!weatherElem){
        var icon = api.list[forecastDay].weather[0].icon;
    }
    if(icon[2] == "n"){
        day = false;
    }
    return day;
}
//pair and post icon to DOM
const findIcon = (jsonData, weatherPost, forecastDay) => {
    var weatherElem = weatherPost;
    var weatherSize = "150";
    var forecastSize = "100";
    var data = jsonData;
    var newElem = document.createElement("IMG");
    newElem.setAttribute("id", "icon");
    if(weatherElem){
        var conditionVal = findCondition(data.weather[0].id);
        var day = isDay(data, true, 0);
        if(day == true){
            console.log("Day");
            //storm
            if(conditionVal == 0){
                newElem.setAttribute("src", "https://img.icons8.com/officel/" + weatherSize + "/000000/cloud-lighting.png");
                console.log("Storm");
            }
            //rain
            if(conditionVal == 1){
                newElem.setAttribute("src", "https://img.icons8.com/nolan/" + weatherSize + "/000000/rain.png");
                console.log("Rain");
            }
            //snow
            if(conditionVal == 2){
                newElem.setAttribute("src", "https://img.icons8.com/color/" + weatherSize + "/000000/snow.png");
                console.log("Snow");
            }
            //atmosphere
            if(conditionVal == 3){
                newElem.setAttribute("src", "https://img.icons8.com/pastel-glyph/" + weatherSize + "/000000/wind--v1.png");
                console.log("Extreme Condition/Wind");
            }
            //clear
            if(conditionVal == 4){
                newElem.setAttribute("src", "https://img.icons8.com/plasticine/"  + weatherSize + "/000000/sun.png");
                console.log("Clear");
            }
            //clouds
            if(conditionVal == 5){
                newElem.setAttribute("src", "https://img.icons8.com/plasticine/" + weatherSize + "/000000/partly-cloudy-day.png");
                console.log("Cloudy");
            }
        }
        if(day == false){
            //storm
            if(conditionVal == 0){
                newElem.setAttribute("src", "https://img.icons8.com/officel/" + weatherSize + "/000000/cloud-lighting.png");
                console.log("Storm");
            }
            //rain
            if(conditionVal == 1){
                newElem.setAttribute("src", "https://img.icons8.com/nolan/"  + weatherSize + "/000000/rain.png");
                console.log("Rain");
            }
            //snow
            if(conditionVal == 2){
                newElem.setAttribute("src", "https://img.icons8.com/color/" + weatherSize + "/000000/snow.png");
                console.log("Snow");
            }
            //atmosphere
            if(conditionVal == 3){
                newElem.setAttribute("src", "https://img.icons8.com/pastel-glyph/" + weatherSize + "/000000/wind--v1.png");
                console.log("Extreme Condition/Wind");
            }
            //clear
            if(conditionVal == 4){
                newElem.setAttribute("src", "https://img.icons8.com/plasticine/" + weatherSize + "/000000/new-moon.png");
                console.log("Clear");
            }
            //clouds
            if(conditionVal == 5){
                newElem.setAttribute("src", "https://img.icons8.com/plasticine/" + weatherSize + "/000000/fog-night.png");
                console.log("Cloudy");
            }
        }
    }
    if(!weatherElem){
        var conditionVal = findCondition(data.list[forecastDay].weather[0].id);
        var day = isDay(data, false, forecastDay);
        //storm
        if(conditionVal == 0){
            newElem.setAttribute("src", "https://img.icons8.com/officel/" + forecastSize + "/000000/cloud-lighting.png");
            console.log("Storm");
        }
        //rain
        if(conditionVal == 1){
             newElem.setAttribute("src", "https://img.icons8.com/nolan/" + forecastSize + "/000000/rain.png");
            console.log("Rain");
        }
        //snow
        if(conditionVal == 2){
            newElem.setAttribute("src", "https://img.icons8.com/color/" + forecastSize + "/000000/snow.png");
            console.log("Snow");
        }
        //atmosphere
        if(conditionVal == 3){
            newElem.setAttribute("src", "https://img.icons8.com/pastel-glyph/" + forecastSize + "/000000/wind--v1.png");
            console.log("Extreme Condition/Wind");
        }
        //clear
        if(conditionVal == 4){
            newElem.setAttribute("src", "https://img.icons8.com/plasticine/" + forecastSize + "/000000/sun.png");
            console.log("Clear");
        }
        //clouds
        if(conditionVal == 5){
             newElem.setAttribute("src", "https://img.icons8.com/plasticine/" + forecastSize + "/000000/partly-cloudy-day.png");
            console.log("Cloudy");
        }
    }
    if(weatherElem){
        weatherIconParent.appendChild(newElem);
    }else{
        var forecastDayElem = document.getElementById("dayIcon" + forecastDay);
        newElem.setAttribute("id", "iconDay" + forecastDay);
        forecastDayElem.appendChild(newElem);
    }
}
//removes current weather condition icon to display new from search result
const removeIcon = () => {
    if(weatherIconParent.firstChild){
        console.log("Remove current icon");
        var childIcon = document.getElementById("icon");
        var childIconError = document.getElementById("iconError");
        try{
            weatherIconParent.removeChild(childIcon);
        }catch{
            weatherIconParent.removeChild(childIconError);
        }
    }
    for(var i  = 1; i <= 5; i++){
        var forecastDayElem = document.getElementById("dayIcon" + i);
        if(forecastDayElem.firstChild){
            var dayChild = document.getElementById("iconDay" + i);
            forecastDayElem.removeChild(dayChild);
        }
    }
}
//this will create an element of text that will display if the user give a bad search
const giveErrorIcon = () => {
    var newElem = document.createElement("DIV");
    newElem.textContent = "404";
    newElem.setAttribute("id", "iconError");
    weatherIconParent.appendChild(newElem);
}