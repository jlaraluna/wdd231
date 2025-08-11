const url = './data/satellites.json';
const cards = document.querySelector('#cards');

export const getSatelliteData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displaySatellites(data.satellites);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displaySatellites = (satellites) => {
  satellites.forEach((satellite, index) => {
    if (index === 0) {
      renderSatellite(satellite, true);
    } else {
      requestIdleCallback(() => renderSatellite(satellite, false));
    }
  });
};

function renderSatellite(satellite, isFirst = false) {
  const card = document.createElement('section');
  card.classList.add('card');

  const name = document.createElement('h2');
  name.textContent = satellite.name;

  const details = document.createElement('p');
  details.innerHTML = `
    <strong>Launch Year:</strong> ${satellite.launching_year} <br>
    <strong>Country:</strong> ${satellite.country}
  `;

  const overview = document.createElement('p');
  overview.textContent = satellite.overview;

  const link = document.createElement('a');
  link.href = satellite.link;
  link.innerHTML = `Learn more <span class="visually-hidden">about ${satellite.name}</span>`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';


  card.append(name, details, overview, link);
  cards.appendChild(card);
}

export const setupViewToggle = () => {
  const gridButton = document.querySelector('#grid');
  const listButton = document.querySelector('#list');

  gridButton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
  });

  listButton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
  });
};
