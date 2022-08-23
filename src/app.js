function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "5fbf29be988a6f0d497691f9466d6598";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
