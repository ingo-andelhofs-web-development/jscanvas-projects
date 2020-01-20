var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;

// rechthoek
c.fillStyle = "red";
c.fillRect(700, 150, 60, 330);

// cirkel
c.fillStyle = "blue";
c.beginPath();
c.arc(60, 60, 240, 0, Math.PI * 2, false);
c.fill();

// lijn pad
c.beginPath(); 
c.moveTo(400, 400); // start punt lijn
c.lineTo(400, 200); // 2de punt van de lijn
c.lineTo(300, 300); // 3de punt van de lijn
c.closePath(); // sluit de lijn (einde lijn --> begin lijn)
c.fillStyle = "red";
c.lineWidth = 5;
c.strokeStyle = "blue";
c.fill();
c.stroke();

// tekst
c.fillStyle = "aliceblue";
c.font = "30px Helvetica";
c.fillText("hello", 30, 50);

// stroke tekst
c.fillStyle = "red";
c.font = "90px Helvetica";
c.lineWidth = 3;
c.strokeText("outline", 220, 700);

// gradient
var redBlue = c.createLinearGradient(1000, 400, 1400, 600); // begin x,y en eind x,y
redBlue.addColorStop(0, "red");
redBlue.addColorStop(1, "blue");
c.fillStyle = redBlue;
c.fillRect(1000, 400, 400, 200);

// gradient stroke tekst
var redBlueStroke = c.createLinearGradient(720, 200, 1100, 270); // begin x,y en eind x,y
redBlueStroke.addColorStop(0, "blue");
redBlueStroke.addColorStop(1, "red");

c.strokeStyle = redBlueStroke;
c.font = "60px Arial";
c.lineWidth = 3;
c.strokeText("gradient stroke text", 720, 200);