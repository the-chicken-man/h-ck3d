// main.js

document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});
