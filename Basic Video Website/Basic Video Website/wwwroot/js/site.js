// script.js
window.onload = function () {
    const elem = document.getElementById("animate");
    let pos = 0;
    let direction = 1;
    const containerWidth = document.querySelector('.container').offsetWidth;

    function frame() {
        if (pos >= containerWidth - 60 || pos <= 0) {
            direction *= -1;
        }
        pos += direction * 2;
        elem.style.left = pos + 'px';
        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
};
