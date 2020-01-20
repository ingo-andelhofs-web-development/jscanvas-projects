var canvas = document.querySelector("canvas"),
    cWidth = window.innerWidth,
    cHeight = window.innerHeight,
    c = canvas.getContext("2d");

canvas.width = cWidth;
canvas.height = cHeight;


var startClock = 3 * Math.PI / 2,
    animateSeconds = startClock,
    animateMinutes = startClock,
    animateHours = startClock,
    incr60 = Math.PI / 6000, // 6 graden per seconde of 0,06 graden per miliseconde
    hueMinutes = 0,
    hueSeconds = 0; 

function timeSeconds() {
    c.clearRect(0, 0, cWidth, cHeight);
    // seconden
    animateSeconds += incr60; // 100

    c.beginPath();
    c.arc(cWidth / 2, cHeight / 2, 100, startClock, animateSeconds, false);
    c.lineWidth = 10;
    hueSeconds += incr60 * 60;
    c.strokeStyle = 'hsl(' + hueSeconds + ', 70%, 70%)';
    c.stroke();

    if (animateSeconds > ( startClock + (12000 * incr60)))  {
        animateSeconds = startClock;
    };

    // minuten
    animateMinutes += (incr60 / 60);

    c.beginPath();
    c.arc(cWidth / 2, cHeight / 2, 110, startClock, animateMinutes, false);
    c.lineWidth = 10;
    hueMinutes += incr60;
    c.strokeStyle = 'hsl(' + hueMinutes + ', 70%, 70%)';
    c.stroke();

    // set timeout
    setTimeout(timeSeconds, 1);
};
timeSeconds();




// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, cWidth, cHeight);

//     animateArc += incrRd;
//     if (animateArc > (startArc + (2 * Math.PI))) {
//         animateArc = startArc + 0.1;
//         if (dirArc == true) {
//             dirArc = false;
//         }else {
//             dirArc = true;
//         };
//     };

//     c.beginPath();
//     c.arc(cWidth / 2, cHeight / 2, 200, startArc, animateArc, dirArc);
//     c.lineWidth = 20;

//     // change color via HSL color
//     hue += 0.5;
//     c.strokeStyle = 'hsl(' + hue + ', 70%, 70%)';
//     c.stroke();
// };

// animate();