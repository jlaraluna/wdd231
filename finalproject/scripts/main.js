import { showDate } from './date.js';
import { initNavigation } from './navigation.js';
import { loadArticles } from './articles.js';
import { initWeather } from './weather.js';
import { getSatelliteData, setupViewToggle } from './satellites.js';
import { showConfirmation } from './thankyou.js';
import { setTimestamp } from './form.js';
import { trackVisits } from './visit-tracking.js';

showDate();
initNavigation();
initWeather();
setTimestamp();
trackVisits();

document.addEventListener('DOMContentLoaded', () => {
  loadArticles();
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.card__button');
  if (button) {
    button.addEventListener('click', () => {
      document.getElementById('launchModal').showModal();
    });
  } else {
    console.warn('No element with class .card__button found.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  getSatelliteData();
  setupViewToggle();
});

document.addEventListener('DOMContentLoaded', () => {
  showConfirmation('#results');
});








