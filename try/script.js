var canvas = document.getElementById("canv"),
    c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


for (var i = 0; i < 20; i++) {
    var x = Math.random() * window.innerWidth,
        y = Math.random() * window.innerHeight,
        clor = Math.random() * 255,
        clor2 = Math.random() * 255,
        clor3 = Math.random() * 255;
    c.fillStyle = "rgb(" + Math.floor(clor) + ", " + Math.floor(clor2) + ", " + Math.floor(clor3) + ")";
    c.fillRect(x, y, 100, 100);    
}

