var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;


var x = 0, y = 0,
    dx = 2, dy = 3,
    w = 100, h = 100;

c.fillStyle = "blue";

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cWidth, cHeight);

    if (x > (cWidth - w) || x < 0) {
        dx = -dx;
        if (c.fillStyle == "#ff0000") {
            c.fillStyle = "blue";
        }else {
            c.fillStyle = "red";
        };
    };

    if (y > (cHeight - h) || y < 0) {
        dy = -dy;
        if (c.fillStyle == "#ff0000") {
            c.fillStyle = "blue";
        }else {
            c.fillStyle = "red";
        };
    };

    c.fillRect(x, y, w, h);

    y += dy;
    x += dx;
}

animate();