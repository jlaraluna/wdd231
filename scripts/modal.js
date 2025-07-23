const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `
    <h2>Course Details</h2>
    <p>Here you can find the details of the course.</p>
    <p>Click the close button to dismiss this dialog.</p>
  `;
});

openButton2.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `
    <h2>Course Details</h2>
    <p>Here you can find the details of the course.</p>
    <p>Click the close button to dismiss this dialog.</p>
  `;
});

openButton3.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `
    <h2>Course Details</h2>
    <p>Here you can find the details of the course.</p>
    <p>Click the close button to dismiss this dialog.</p>
  `;
});

openButton4.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `
    <h2>Course Details</h2>
    <p>Here you can find the details of the course.</p>
    <p>Click the close button to dismiss this dialog.</p>
  `;
});

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}


closeButton.addEventListener("click", () => {
  dialogBox.close();
});






