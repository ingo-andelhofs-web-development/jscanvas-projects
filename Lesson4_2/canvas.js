var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;


var startArc = 3 * Math.PI / 2,
    animateArc = startArc,
    incrRd = Math.PI / 40,
    dirArc = false,
    hue = 120; // HSL voor groen

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cWidth, cHeight);

    animateArc += incrRd;
    if (animateArc > (startArc + (2 * Math.PI))) {
        animateArc = startArc + 0.1;
        if (dirArc == true) {
            dirArc = false;
        }else {
            dirArc = true;
        };
    };

    c.beginPath();
    c.arc(cWidth / 2, cHeight / 2, 200, startArc, animateArc, dirArc);
    c.lineWidth = 20;

    // change color via HSL color
    hue += 0.5;
    c.strokeStyle = 'hsl(' + hue + ', 70%, 70%)';
    c.stroke();
};

animate();