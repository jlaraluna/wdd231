export function showConfirmation(targetSelector = '#results') {
  const myInfo = new URLSearchParams(window.location.search);
  console.log(myInfo);

  const target = document.querySelector(targetSelector);
  if (!target) {
    console.warn(`No element found for selector: ${targetSelector}`);
    return;
  }

  target.innerHTML = `
    <section class="confirmation-card">
      <h2>Confirmation</h2>
      <p>Thank you for subscribing! We will get back to you shortly.</p>
      <ul class="confirmation-details">
        <li><strong>First Name:</strong> ${myInfo.get('first-name') || 'N/A'}</li>
        <li><strong>Last Name:</strong> ${myInfo.get('last-name') || 'N/A'}</li>
        <li><strong>Email:</strong> ${myInfo.get('email') || 'N/A'}</li>
        <li><strong>Mobile Number:</strong> ${myInfo.get('mobile') || 'N/A'}</li>
        <li><strong>Organization:</strong> ${myInfo.get('organization') || 'None'}</li>
        <li><strong>Subscription Type:</strong> ${myInfo.get('subscription-type') || 'N/A'}</li>
        <li><strong>Date Submitted:</strong> ${myInfo.get('timestamp') || 'N/A'}</li>
      </ul>
    </section>
  `;
}
