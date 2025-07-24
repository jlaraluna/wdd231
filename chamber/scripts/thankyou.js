const myInfo = new URLSearchParams(window.location.search); 
console.log(myInfo);

// console.log(myInfo.get('first-name'));

document.querySelector('#results').innerHTML = `
  <section class="confirmation-card">
    <h2>Confirmation</h2>
    <p>Thank you for submitting your details. Your request has been received and is being processed.</p>
    <ul class="confirmation-details">
      <li><strong>First Name:</strong> ${myInfo.get('first-name')}</li>
      <li><strong>Last Name:</strong> ${myInfo.get('last-name')}</li>
      <li><strong>Email:</strong> ${myInfo.get('email')}</li>
      <li><strong>Mobile Number:</strong> ${myInfo.get('mobile')}</li>
      <li><strong>Business Name:</strong> ${myInfo.get('organization')}</li>
      <li><strong>Date Submitted:</strong> ${myInfo.get('timestamp')}</li>
    </ul>
  </section>
`;
