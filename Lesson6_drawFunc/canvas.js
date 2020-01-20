var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;


var x0 = cWidth / 2,
    y0 = cHeight / 2,
    x = 0,
    fx,
    xStart;

// c.beginPath();
// c.moveTo(0, y0);
// c.lineTo(cWidth, y0);
// c.stroke();

// c.beginPath();
// c.moveTo(x0, 0);
// c.lineTo(x0, cHeight);
// c.stroke();

function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0,0,cWidth,cHeight);
    c.fillStyle = 'rgba(255, 255, 255, 0.1)';
    c.fillRect(0, 0, cWidth, cHeight);

    fx = 200 * Math.sin(0.01 * xStart);
    // fx = 0.0000005 * ((Math.pow(xStart, 5) - (10 * Math.pow(xStart, 2))));
    xStart = x - x0;
    
    x += 2;
    xStart += 2;

    c.fillStyle = "red";
    c.fillRect(xStart + x0, y0 - fx, 20, 20);


} animate(); // run animate