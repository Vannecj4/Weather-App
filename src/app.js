function showTemperature(response) {
  console.log(response.data);
  let temperatureElem = document.getElementById("units");
  let humidityElement = document.getElementById("humidity");
  let feelElement = document.getElementById("realfeel");
  let windElement = document.getElementById("wind");
  let stateElement = document.getElementById("weatherstate");
  temperatureElem.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  feelElement.innerHTML = Math.round(response.data.main.feels_like);
  windElement.innerHTML = response.data.wind.speed;
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
