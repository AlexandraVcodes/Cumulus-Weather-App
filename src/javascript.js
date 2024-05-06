function refreshWeather(response) {
  let temperatureVariable = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityVariable = document.querySelector("#weather-app-city");

  cityVariable.innerHTML = response.data.city;

  temperatureVariable.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "40eebb051ec036c739feeto37ba5f2ee";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormVariable = document.querySelector("#search-form");
searchFormVariable.addEventListener("submit", handleSearchSubmit);

searchCity("Berlin");
