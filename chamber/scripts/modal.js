const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach(button => {
button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).showModal();
});
});

closeButtons.forEach(button => {
button.addEventListener('click', () => {
    button.closest('dialog').close();
});
});
