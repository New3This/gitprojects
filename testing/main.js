let canvas = document.getElementById("canvasDrawing");

let context = canvas.getContext("2d");



// context.strokeStyle="green";
// context.fillStyle = "yellow";
// context.lineWidth="10";

// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.stroke();
// context.fill();
// ===========================
/*First point is top right corner, last point is width, height */
// context.fillStyle = "red";
// context.fillRect(0,0,250,250);

// context.fillStyle = "black";
// context.fillRect(0,250,250,250);

// context.fillStyle = "yellow";
// context.fillRect(250,0,250,250);


// context.strokeStyle="green";
// context.lineWidth = 5;
// context.strokeRect(250,0,250,250);




// context.fillStyle = "blue";
// context.fillRect(250,250,250,250);

//(x,y,r,sAngle,eAngle,counterclockwise)

// context.beginPath();
// context.lineWidth = 10;
// context.strokeStyle = "darkblue";
// context.arc(250, 250, 100, 0, 2*Math.PI);
// context.stroke();
// context.fillStyle = "lightblue";
// context.fill();



context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", 250, 250);
