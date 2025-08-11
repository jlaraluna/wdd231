export function showDate() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    const date = new Date();
    yearSpan.innerHTML = `&copy; ${date.getFullYear()} Orbit Tracker`;
  }

  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
  }
}
