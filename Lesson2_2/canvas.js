var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;

var r = (Math.random() * 50) + 50, 
    x = Math.random() * (cWidth - r), 
    y = Math.random() * (cHeight - r),
    dx = (Math.random() - 0.5) * 10, 
    dy = (Math.random() -0.5) * 10;

var redBlue = c.createLinearGradient(0, 0, cWidth, cHeight); // begin x,y en eind x,y
redBlue.addColorStop(0, "red");
redBlue.addColorStop(1, "blue");
c.fillStyle = redBlue;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cWidth, cHeight);


    if (x > (cWidth - r) || x < 0) {
        dx = -dx;
    };

    if (y > (cHeight - r) || y < 0) {
        dy = -dy;
    };

    c.fillRect(x, y, r, r);

    y += dy;
    x += dx;
}

animate();