/*
    -this file holds all search functions: 
        -searchWatch is called by main.js and is used to handle ALL search functionality
            --search watch establishes event listeners and will pass in the user input to search
        -to clear the search bar after a search is made

    -Created by: Michael Wilmouth
*/
//triggers the zip search -> call the post functions
const searchZip = (search) => {
    var zip = search;
    console.log("search zip start" + zip);
    //remove current icon
    removeIcon();
    //post new API results
    postWeatherZip(zip);
    postForeCastZip(zip);
    searchBar.value = "";
}
//triggers the city search -> 
const searchCity = (search) => {
    var city = search;
    console.log("Search City start");
    //remove current Icon
    removeIcon();
    postWeatherCity(city);
    postForecastCity(city);
    searchBar.value = "";
}
const searchWatch = () => {
    searchBar.addEventListener("keyup", (async function(e){
        if(e.keyCode == 13){
            var value = searchBar.value;
            if(Number(value[0]) > 0){
                await searchZip(value);
                loadingData();
            }else{
                await searchCity(value);
                loadingData();
            }
        }
    }));
    zipBtn.addEventListener("click", (async function(){
        var search = searchBar.value;
        await searchZip(search);
        loadingData();
    }));
    cityBtn.addEventListener("click", (async function(){
        var search = searchBar.value;
        search += ",us";
        await searchCity(search);
        loadingData();
    }));
}
searchWatch();