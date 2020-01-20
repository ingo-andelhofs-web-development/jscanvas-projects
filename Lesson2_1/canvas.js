var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;

var x = 0, y = 0,
    dx = 1, dy = 1,
    w = 100, h = 100;

var redBlue = c.createLinearGradient(0, 0, cWidth, cHeight); // begin x,y en eind x,y
redBlue.addColorStop(0, "red");
redBlue.addColorStop(1, "blue");

function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, cWidth, cHeight);
    c.fillStyle = 'rgba(255, 255, 255, 0.01)';
    c.fillRect(0, 0, cWidth, cHeight);

    if (x > (cWidth - w) || x < 0) {
        dx = -dx;
    };

    if (y > (cHeight - h) || y < 0) {
        dy = -dy;
    };

    c.fillStyle = redBlue;
    c.fillRect(x, y, w, h);

    y += dy;
    x += dx;
}
animate();