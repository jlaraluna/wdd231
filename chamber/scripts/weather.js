const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');


const todayTemp = document.querySelector('#today-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const dayAfterTemp = document.querySelector('#dayafter-temp');

const apiKey = 'ca2073fac661d8129f291b073f321046';
const lat = '19.42';
const lon = '-99.11';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getCurrentWeather() {
  try {
    const response = await fetch(currentWeatherURL);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;

  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error("Error al cargar el forecast:", error);
  }
}

function displayForecast(data) {
  todayTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;
  tomorrowTemp.innerHTML = `${data.list[8].main.temp}&deg;C`;
  dayAfterTemp.innerHTML = `${data.list[16].main.temp}&deg;C`;
}

getCurrentWeather();
getForecast();
