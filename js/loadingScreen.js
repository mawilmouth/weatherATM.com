/*
    -This file holds the functions used to present a loading screen while the HTTP Request is being made
*/
const hideLoading = () => {
    loadingContain.classList.toggle("hide-section");
    mainApp.classList.remove("hide-section");
}
const loadingData = () => {
    loadingContain.classList.remove("hide-section");
    mainApp.classList.toggle("hide-section");
    window.setTimeout(hideLoading, 2000);
}
