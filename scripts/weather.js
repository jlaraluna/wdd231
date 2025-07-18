const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'ca2073fac661d8129f291b073f321046';
const myLat = "49.7612";
const myLong = "6.5529";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
}

apiFetch();
