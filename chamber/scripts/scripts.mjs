import {places} from "../data/places.mjs";

console.log("Loading places data...");
console.log(places);

// Grab a reference to the container where we will display the places
const showHere = document.getElementById("allplaces");

// loop through the array of json objects

function displayItems(places) {
  places.forEach(x => {
  // build the card element
  const thecard = document.createElement("div");
  // build the photo element
  const thephoto = document.createElement("img");
  thephoto.src = `images/${x.image}`;
  thephoto.alt = x.name;
  thephoto.loading = "lazy"; 
  thecard.appendChild(thephoto);
  const thetitle = document.createElement("h2");
  thetitle.innerText = x.name;
  thecard.appendChild(thetitle);
  // build the address element
  const theaddress = document.createElement("address");
  theaddress.innerText = x.address;
  thecard.appendChild(theaddress);
  // build the description element
  const thedesc = document.createElement("p");
  thedesc.innerText = x.description;
  thecard.appendChild(thedesc);

  showHere.appendChild(thecard);
  });
}

displayItems(places);

// Local Storage for Visit Tracking
function calculateDaysBetween(lastVisitTimestamp, currentTimestamp) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((currentTimestamp - lastVisitTimestamp) / msPerDay);
}

document.addEventListener("DOMContentLoaded", () => {
  const messageContainer = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const daysAgo = calculateDaysBetween(Number(lastVisit), now);

    if (daysAgo < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysAgo === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysAgo} days ago.`;
    }
  }

  if (messageContainer) {
    messageContainer.textContent = message;
  }

  localStorage.setItem("lastVisit", now.toString());
});

