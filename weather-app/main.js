let firstDay = document.getElementById("current-day");
let secondDay = document.getElementById("second-day");
let thirdDay = document.getElementById("third-day");

let secondThird = document.querySelectorAll(".all-three-temperatures");
let weatherItem = document.querySelectorAll(".weather-container-item");

let weatherDay = document.querySelectorAll(".weather-day");

let result;

const sun = [1000];
const suncloud = [1003, 1006, 1009];
const cloudthunderrain = [1273, 1276, 1087];
const rainy = [1030, 1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1246, 1243];
const snow = [1066, 1069, 1072, 1114, 1117, 1135, 1147, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Sydney&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '959c1f1c3emsh1d3d4ff7230e04cp1116f9jsnf9d8aca8c2c1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

getWeather(url, options);


async function getWeather(url, options) {
    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
        retrieveWeather(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

function retrieveWeather(result) {
    checkWeather(result.current.condition.code, firstDay);
    checkWeather(result.forecast.forecastday[1].day.condition.code, secondDay);
    checkWeather(result.forecast.forecastday[2].day.condition.code, thirdDay);
    for (var i = 0; i < secondThird.length; i++) {
        secondThird[i].textContent = parseInt(result.forecast.forecastday[i].day.avgtemp_c)+"°C";
        weatherDay[i].textContent = daysOfWeek[new Date((result.forecast.forecastday[i].date).toString()).getDay()];
    }
    let s = new Date((result.forecast.forecastday[0].date).toString()).getDay();

    console.log(daysOfWeek[s]);
}

let count = 0;
weatherItem.forEach(item => item.addEventListener("click", () => {
    if (count % 2) {
        for (let i = 0; i < secondThird.length; i++) {
            secondThird[i].textContent = parseInt(result.forecast.forecastday[i].day.avgtemp_c)+"°C";
        }
    }
    else {
        for (let i = 0; i < secondThird.length; i++) {
            secondThird[i].textContent = parseInt(result.forecast.forecastday[i].day.avgtemp_f)+"°F";
        }
    }
    count++;
}
));

function checkWeather(code, element) {
    if (sun.includes(code)) {
        element.src = "./imgs/sun.svg";
    }
    if (suncloud.includes(code)) {
        element.src = "./imgs/suncloud.svg";
    }
    if (cloudthunderrain.includes(code)) {
        element.src = "./imgs/thunderclouds.svg";
    }
    if (rainy.includes(code)) {
        element.src = "./imgs/cloudrain.svg"

    }
    if (snow.includes(code)) {
        secondDay.src = "./imgs/snow.svg";
    }
}

function celsisus(code, element) {

}