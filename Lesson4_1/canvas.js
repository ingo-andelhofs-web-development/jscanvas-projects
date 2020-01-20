var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;

var startArc = 3 * Math.PI / 2,
    animateArc = startArc,
    incrRd = Math.PI / 40,
    dirArc = false;

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

        var clor = Math.random() * 255,
            clor2 = Math.random() * 255,
            clor3 = Math.random() * 255;
    };

    c.beginPath();
    c.arc(cWidth / 2, cHeight / 2, 200, startArc, animateArc, dirArc);
    c.lineWidth = 20;
    c.strokeStyle = "rgb(" + Math.floor(clor) + ", " + Math.floor(clor2) + ", " + Math.floor(clor3) + ")";
    c.stroke();
};

animate();