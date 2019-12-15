/*
    -The functions will be used as convertions for any metric data, Unix time, UTC time, 
     wind speed, and kelvin degree to far or cel degree

    -Created by: Michael Wilmouth
*/
const convertWindSpeed = (mps) => {
    var meterSecond = mps;
    var mph = meterSecond * 2.237;
    return Math.floor(mph);
}
const convertF = (kelvinTemp) => {
    var kelvin = kelvinTemp;
    var newF = "";
    var temp = kelvin * 1.8;
    newF = temp - 459.67;
    return Math.floor(newF);
}
const convertC = (kelvinTemp) => {
    var kelvin = kelvinTemp;
    var newC = "";
    newC = kelvin - 273.15;
    return Math.floor(newC);
}
const militaryToStandard = (timeOBJ) => {
    var milTime = timeOBJ;      //military time format
    var hour = milTime.hour;
    var minute = milTime.minute;
    var AmPm = "";
    if(hour >= 12){
        AmPm = "PM";
    }else{
        AmPm = "AM";
    }
    if(hour > 12){
        hour -= 12;
    }
    if(hour == 0){
        hour = 12;
    }
    if(minute < 10){
        var tempMinute = "0" + minute;
        minute = tempMinute;
    }
    var standardTimeFormat = hour + ":" + minute + " " + AmPm;
    console.log(standardTimeFormat);
    return standardTimeFormat;
}
//get military time format -> use another function to convert to standard time format
const convertTime = (timezone) => {
    //api gives timezone in seconds -> convert to minutes
    var timeOffset = timezone / 60;
    //convert timezone to hours
    timeOffset /= 60;
    var time = new Date();
    var utcHour = time.getUTCHours();
    var utcMinute = time.getMinutes();
    //adjust utc time to prevent negative numbers in time
    if(utcHour == 0){
        utcHour = 24;
    }
    if(utcHour == 1){
        utcHour = 25;
    }
    if(utcHour == 2){
        utcHour = 26;
    }
    if(utcHour == 3){
        utcHour = 27;
    }
    if(utcHour == 4){
        utcHour = 28;
    }
    if(utcHour == 5){
        if(timeOffset == -6 || timeOffset == -7 || timeOffset == -8){
            utcHour = 29;
        }
    }
    if(utcHour == 6){
        if(timeOffset == -7 || timeOffset == -8){
            utcHour = 30;
        }
    }
    if(utcHour == 7){
        if(timeOffset == -8){
            utcHour = 31;
        }
    }
    var localHour = utcHour + timeOffset;
    var localTime = {
        hour : localHour,
        minute : utcMinute,
        offset : timeOffset,
        hourUTC : utcHour
    }
    console.log(localTime);
    return localTime;
}
//calcDate is used to calculate the current date -> NOT the day of the week
const calcDate = (timeOBJ) => {
    var timeNew = timeOBJ;
    var time = new Date();
    var formattedDate = "";
    var utcDate = time.getUTCDate();
    var utcMonth = time.getUTCMonth();
    utcMonth++;
    var utcYear = time.getUTCFullYear();
    //check if UTC is giving date of next day if(yes){adjust}
    if(timeNew.hour >= 16){
        if(utcDate == 1){
            utcMonth--;
            if(utcMonth == 0){
                utcMonth = 12;
                utcYear--;
            }
            switch(utcMonth){
                case 1:
                    utcDate = 31;
                    break;
                case 2:
                    utcDate = 28;
                    break;
                case 3: 
                    utcDate = 31;
                    break;
                case 4:
                    utcDate = 30;
                    break;
                case 5:
                    utcDate = 31;
                    break;
                case 6:
                    utcDate = 30;
                    break;
                case 7:
                    utcDate = 31;
                    break;
                case 8:
                    utcDate = 31;
                    break;
                case 9:
                    utcDate = 30;
                    break;
                case 10:
                    utcDate = 31;
                    break;
                case 11:
                    utcDate = 30;
                    break;
                case 12:
                    utcDate = 31;
                    break;
            }
        }else{
            utcDate--;
        }
    }
    formattedDate = "" + utcMonth + "/" + utcDate + "/" + utcYear;
    console.log("Date: " + formattedDate);
    return formattedDate;
}
//this function will be used to find convert unix time to standard format -> use this to get the sunrise and sunset times
const getTime = (unixTime, timeZone) => {
    //unix time is in seconds -> JS needs milliseconds
    var timeStamp = unixTime;
    timeStamp *= 1000;
    var zone = timeZone / 60;
    zone /= 60;
    var time = new Date(timeStamp);
    var hour = time.getUTCHours();
    var minute = time.getUTCMinutes();
    var beforeAfterNoon = "";
    var standardTimeFormat = "";
    //adjust UTC hour to prevent any negative time numbers
    if(hour == 0){
        hour = 24;
    }
    if(hour == 1){
        hour = 25;
    }
    if(hour == 2){
        hour = 26;
    }
    if(hour == 3){
        hour = 27;
    }
    if(hour == 4){
        hour = 28;
    }
    if(hour == 5){
        if(zone == -6 || zone == -7 || zone == -8){
            hour = 29;
        }
    }
    if(hour == 6){
        if(zone == -7 || zone == -8){
            hour = 30;
        }
    }
    if(hour == 7){
        if(zone == -8){
            hour = 31;
        }
    }
    hour += zone;
    var param = {
        hour: hour,
        minute: minute
    }
    var standard = militaryToStandard(param);
    return standard;
}
const forecastDate = (standard) => {
    var date = standard;
    var tempYear = date.slice(0, 4); 
    var tempMonth = date.slice(5, 7);
    var tempDay = date.slice(8, 10);
    date = tempMonth + "/" + tempDay + "/" + tempYear;
    return date;
}