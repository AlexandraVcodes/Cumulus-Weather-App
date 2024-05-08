function refreshWeather(response) {
  let temperatureVariable = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityVariable = document.querySelector("#weather-app-city");
  let descriptionVariable = document.querySelector("#description");
  let humidityVariable = document.querySelector("#humidity");
  let windVariable = document.querySelector("#wind");
  let timeVariable = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconVariable = document.querySelector("#icon");

  iconVariable.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  cityVariable.innerHTML = response.data.city;
  descriptionVariable.innerHTML = response.data.condition.description;
  humidityVariable.innerHTML = response.data.temperature.humidity;
  windVariable.innerHTML = response.data.wind.speed;
  timeVariable.innerHTML = formateDate(date);

  temperatureVariable.innerHTML = Math.round(temperature);
}

function formateDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

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
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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
