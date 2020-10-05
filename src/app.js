function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}  ${hours}:${minutes}`;
}

function showTemperature(response) {
  let temperatureElem = document.getElementById("units");
  let humidityElement = document.getElementById("humidity");
  let feelElement = document.getElementById("realfeel");
  let windElement = document.getElementById("wind");
  let stateElement = document.getElementById("weatherstate");
  let cityName = document.getElementById("city");
  let dayElement = document.getElementById("day");
  temperatureElem.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  feelElement.innerHTML = Math.round(response.data.main.feels_like);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  stateElement.innerHTML = response.data.weather[0].main;
  cityName.innerHTML = response.data.name;
  dayElement.innerHTML = formatDate(response.data.dt * 1000);
}

function testname(event) {
  event.preventDefault();
  let cityname = document.querySelector("#cityname");
  search(cityname.value);
  console.log(cityname.value);
}

function search(city) {
  let apiKey = "c5d9545edd6e77c87e757baa297f0d90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", testname);
