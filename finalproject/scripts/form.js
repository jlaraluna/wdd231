export function setTimestamp() {
  document.addEventListener("DOMContentLoaded", () => {
    const now = new Date().toISOString();
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      timestampInput.value = now;
    }
  });
}
