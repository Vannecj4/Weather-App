function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElem = document.getElementById("units");
  temperatureElem.innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let cityname = document.querySelector("#cityname");
  console.log(cityname);
}

let apiKey = "c5d9545edd6e77c87e757baa297f0d90";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=c5d9545edd6e77c87e757baa297f0d90&units=metric";

axios.get(apiUrl).then(showTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
