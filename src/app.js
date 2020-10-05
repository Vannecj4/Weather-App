function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElem = document.getElementById("units");
  temperatureElem.innerHTML = Math.round(response.data.main.temp);
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

search("Amsterdam");

let form = document.querySelector("#search-form");
form.addEventListener("submit", testname);
