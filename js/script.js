
const openModalBtn = document.getElementById('openModalBtn');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === contactModal) contactModal.style.display = 'none';
});
