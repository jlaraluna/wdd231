const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  const date = new Date();
  yearSpan.innerHTML = `&copy;${date.getFullYear()} Nahua Chamber of Commerce`;
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modification: ${document.lastModified}`;
}
