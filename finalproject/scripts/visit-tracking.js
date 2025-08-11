function calculateDaysBetween(lastVisitTimestamp, currentTimestamp) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((currentTimestamp - lastVisitTimestamp) / msPerDay);
}

export function trackVisits(messageContainerId = "visit-message") {
  document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById(messageContainerId);
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    let message = "";

    if (!lastVisit) {
      message = "This is your first visit!";
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
}
