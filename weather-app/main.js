let firstDay = document.getElementById("current-day");
let secondDay = document.getElementById("second-day");
let thirdDay = document.getElementById("third-day");



let secondThird = document.querySelectorAll(".all-three-temperatures");
let weatherItem = document.querySelectorAll(".weather-container-item");

let weatherDay = document.querySelectorAll(".weather-day");

let result;
let city = "Sydney";

const sun = [1000];
const suncloud = [1003, 1006, 1009];
const cloudthunderrain = [1273, 1276, 1087];
const rainy = [1030, 1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1246, 1243];
const snow = [1066, 1069, 1072, 1114, 1117, 1135, 1147, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
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
        createTable(result);
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

}

let count = 0;
weatherItem.forEach(item => item.addEventListener("click", () => {
    if (count % 2) {
        for (let i = 0; i < secondThird.length; i++) {
            secondThird[i].textContent = result.forecast.forecastday[i].day.avgtemp_c+"°C";
        }
    }
    else {
        for (let i = 0; i < secondThird.length; i++) {
            secondThird[i].textContent = result.forecast.forecastday[i].day.avgtemp_f+"°F";
        }
    }
    count++;
}
));

function checkWeather(code, element) {
    
    if (sun.includes(code)) {
        element.src = "./imgs/sun.svg";
    }
    else if (suncloud.includes(code)) {
        element.src = "./imgs/suncloud.svg";
    }
    else if (cloudthunderrain.includes(code)) {
        element.src = "./imgs/thunderclouds.svg";
    }
    else if (rainy.includes(code)) {
        element.src = "./imgs/cloudrain.svg"

    }
    else if (snow.includes(code)) {
        element.src = "./imgs/snow.svg";
    }

    else {
        console.log("No images matched");
    }

}


function createTable(result) {

    let intervalItemOne = document.createElement("div");
    intervalItemOne.className = "intervals-item";

    let intervalItemTwo = document.createElement("div");
    intervalItemTwo.className = "intervals-item";

    let intervalItemThree = document.createElement("div");
    intervalItemThree.className = ("intervals-item");

    let intervalItemFour = document.createElement("div");
    intervalItemFour.className = ("intervals-item");

    let intervalItemFive = document.createElement("div");
    intervalItemFive.className = ("intervals-item");

    let intervalItemSix = document.createElement("div");
    intervalItemSix.className = ("intervals-item");

    document.getElementById("intervals-container").appendChild(intervalItemOne);
    document.getElementById("intervals-container").appendChild(intervalItemTwo);
    document.getElementById("intervals-container").appendChild(intervalItemThree);
    document.getElementById("intervals-container").appendChild(intervalItemFour);
    document.getElementById("intervals-container").appendChild(intervalItemFive);
    document.getElementById("intervals-container").appendChild(intervalItemSix);


    let div;
    let p = 0;

    intervalItem = document.querySelectorAll(".intervals-item");
    intervalItem[0].textContent = daysOfWeek[new Date((result.forecast.forecastday[0].date).toString()).getDay()].toUpperCase();
    intervalItem[1].textContent = "TEMPERATURE";
    intervalItem[2].textContent = "FEELS LIKE °C";
    intervalItem[3].textContent = "CHANCE OF RAIN %";
    intervalItem[4].textContent = "HUMIDITY";
    intervalItem[5].textContent = "PREDICTION";



    let image;
    let count = 0;
    for ( let j = 0; j < result.forecast.forecastday[0].hour.length; j++) {
        for (let k = 0; k < 6; k++) {
            intervalsContainer = document.getElementById("intervals-container");
            div = document.createElement("div");
            p +=1;
            if (j % 2) {
                div.classList.add("intervals-item-dynamic", "item-even");
            }

            else {
                div.classList.add("intervals-item-dynamic", "item-odd");

            }
            switch (k) {
                case 0:
                    div.textContent =  result.forecast.forecastday[0].hour[j].time.toString().split(" ")[1];
                    break;
                case 1:
                    div.textContent = result.forecast.forecastday[0].hour[j].temp_c.toString()+"°C";
                    break;
                case 2:
                    div.textContent = result.forecast.forecastday[0].hour[j].feelslike_c;
                    break;
                case 3:
                    div.textContent = result.forecast.forecastday[0].hour[j].chance_of_rain;
                    break;
                case 4:
                    div.textContent = result.forecast.forecastday[0].hour[j].humidity;
                    break;
                case 5:
                    image = document.createElement("img");
                    checkWeather(parseInt(result.forecast.forecastday[0].hour[j].condition.code.toString()), image);
                    count++;
                    break;
                default:
                    break;
            }

            intervalsContainer.appendChild(div);
            if (count === 1) {
                div.appendChild(image);
                count-=1;
            }
        }
    }
    
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search.value}&days=3`;
    document.getElementById("intervals-container").innerHTML = "";
    getWeather(url, options);
    
})