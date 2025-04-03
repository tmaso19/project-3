const button = document.querySelector('.icon-images');
button.addEventListener('click', () => {
button.classList.add('pulse');
setTimeout(() => {
button.classList.remove('pulse');
}, 500);
});



