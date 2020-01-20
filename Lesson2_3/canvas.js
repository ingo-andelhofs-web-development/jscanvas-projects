var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;

function Square(x, y, dx, dy, r) {
    this.r = r;
    this.x = x;
    this.y = y;

    this.draw = function() {
        var redBlue = c.createLinearGradient(0, 0, cWidth, cHeight); // begin x,y en eind x,y
        redBlue.addColorStop(0, "red");
        redBlue.addColorStop(1, "blue");

        c.fillStyle = redBlue;
        c.strokeStyle = "red";
        c.stroke();
        c.fillRect(x, y, r, r);
    };
    this.update = function() {

        if (x > (cWidth - r) || x < 0) { dx = -dx; };
        if (y > (cHeight - r) || y < 0) { dy = -dy; };

        y += dy;
        x += dx;

        this.draw();
    };
}

// maak een array aan voor alle vierkanten
var squareArray = [];
for (var i = 0; i < 1000; i ++) {
    var r = (Math.random() * 5) + 10, 
        x = Math.random() * (cWidth - r), 
        y = Math.random() * (cHeight - r),
        dx = (Math.random() - 0.5) * 1, 
        dy = (Math.random() -0.5) * 1;

    // voegt vierkant toe aan de array
    squareArray.push(new Square(x, y, dx, dy, r));
};

function animate() { 
    requestAnimationFrame(animate);
    // chose animation
        // c.clearRect(0, 0, cWidth, cHeight);
        c.fillStyle = 'rgba(255, 255, 255, 0.03)';
        c.fillRect(0, 0, cWidth, cHeight);

    for (var i = 0; i < squareArray.length; i++) {
        squareArray[i].update();
    };

}animate();