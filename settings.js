// settings.js

document.getElementById('saveSettings').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    localStorage.setItem('backgroundColor', bgColor);
    alert('Background color saved!');

    // Apply the color immediately
    document.body.style.backgroundColor = bgColor;
});
