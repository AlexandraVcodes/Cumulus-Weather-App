function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityVariable = document.querySelector("#weather-app-city");
  cityVariable.innerHTML = searchInput.value;
}

let searchFormVariable = document.querySelector("#search-form");
searchFormVariable.addEventListener("submit", handleSearchSubmit);
