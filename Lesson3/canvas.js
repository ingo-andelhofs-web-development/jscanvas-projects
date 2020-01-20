var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;


var arcRd = 50,
    minRd = 50,
    maxRd = 100,
    dirRd = 0.5;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cWidth, cHeight);

    arcRd += dirRd; // vergroot/verkleint de cirkel
    if (arcRd > maxRd || arcRd < minRd) {
        dirRd = -dirRd; // verander de richting
    };

    c.beginPath();
    c.arc(cWidth / 2, cHeight / 2, arcRd, 0, Math.PI * 2, false);
    c.stroke();
}

animate();