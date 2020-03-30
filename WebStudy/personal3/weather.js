let weatherResult = document.querySelector('.weatherAPI');

const LOCAL_STORAGE_GEO = 'coords';
const API_KEY = '5edf660f1059136e06fdd9dcf601df65';

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(successGeo, getLocationError);
}

function getLocationError() {
    console.log("Cannot get location");
}

function getWeatherFromAPI(latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        )
        .then(function(Response){
            return Response.json()
        })
        .then(function(json) {
            let temperation = json.main.temp;
            let weather = json.weather[0].description;
            let city = json.name;
            console.log(json);
            weatherResult.innerText = `Temperature: ${temperation}
             Weather: ${weather} 
             City: ${city}`;
        });
}
function successGeo(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // create obj
    const coordsObj = {
        latitude,
        longitude
    };
    saveLocalStorage(coordsObj);
    getWeatherFromAPI(latitude, longitude);
}

function saveLocalStorage(coordsObj) {
    localStorage.setItem(LOCAL_STORAGE_GEO, JSON.stringify(coordsObj));
}

function loadCoordinates() {
    let loadCoords = localStorage.getItem(LOCAL_STORAGE_GEO);
    if (loadCoords === null) {
        getCurrentLocation();
    } else {
        let parsedCoords = JSON.parse(loadCoords);
        console.log(parsedCoords);
        getWeatherFromAPI(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoordinates();
}

init();