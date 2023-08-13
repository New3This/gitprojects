let canvas = document.getElementById("canva");
let score = document.getElementById("score");
let context = canvas.getContext("2d");
let canvaWidth = 500;
let canvaHeight = 500;
let paddleWidth = canvaWidth/20;
let paddleHeight = canvaHeight/5;
let posX = 0;
let posY = canvaHeight/2 - 50;

let paddle1 = {
    x: posX,
    y: posY,
    width: paddleWidth,
    height: paddleHeight
}

let paddle2 = {
    x: canvaWidth-paddleWidth,
    y: posY,
    width: paddleWidth,
    height: paddleHeight
}

let ball = {
    x:(canvaWidth/2),
    y:(canvaHeight/2),
    radius:10,
    Xdirection:1,
    Ydirection:1,
    speed:0
}
context.beginPath();
context.fillStyle = "red";

context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
context.fillStyle = "green";

context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

function resetGame() {
    clearInterval(wait);

    canvaWidth = 500;
    canvaHeight = 500;
    paddleWidth = canvaWidth/20;
    paddleHeight = canvaHeight/5;
    posX = 0;
    posY = canvaHeight/2 - 50;

    paddle1 = {
        x: posX,
        y: posY,
        width: paddleWidth,
        height: paddleHeight
    }

    paddle2 = {
        x: canvaWidth-paddleWidth,
        y: posY,
        width: paddleWidth,
        height: paddleHeight
    }


    context.beginPath();
    context.fillStyle = "red";

    context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    context.fillStyle = "green";

    context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ball = {
        x:(canvaWidth/2),
        y:(canvaHeight/2),
        radius:10,
        Xdirection:1,
        Ydirection:1,
        speed:0
    }

    tick();
}


window.addEventListener("keydown", event => paddleMovement(event.key));

function paddleMovement(event) {
    console.log(event);
    if (event == "ArrowDown" && paddle1.height + paddle1.y + 50 <= canvaHeight) {
        context.clearRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        context.fillStyle = "red";
        paddle1.y += 50;
    }
    else if (event == "ArrowUp" && paddle1.y - 50 >= 0) {
        context.clearRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        context.fillStyle = "red";
        paddle1.y -= 50;
    }
    else if (event == "w" && paddle2.y - 50 >= 0 || event == "W" && paddle2.y - 50 >= 0) {
        context.clearRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        context.fillStyle = "green";
        paddle2.y -= 50;
    }
    else if (event == "s" && paddle2.height + paddle2.y + 50 <= canvaHeight || event == "S" && paddle2.height + paddle2.y + 50 <= canvaHeight) {
        context.clearRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        context.fillStyle = "green";
        paddle2.y += 50;
    }
}



//(x,y,r,sAngle,eAngle,counterclockwise)
context.strokeStyle = "darkblue";

let game1 = null;

function tick() {
    startBall();
    game1 = setInterval(updateCanvas, 6);
}
tick();
function updateCanvas() {
    context.clearRect(0,0,500,500);
    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    context.fillStyle = "green";
    context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    collision();
    context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
    context.fillStyle = "lightblue";
    context.fill();
}

function collision() {
    ball.x += ball.Xdirection * ball.speed;
    ball.y += ball.Ydirection * ball.speed;

    if (ball.y <= ball.radius || ball.y >= canvaHeight-ball.radius) {
        ball.Ydirection *= -1;
    }
    if (ball.x <= ball.radius + 0) {
        ball.Xdirection *= -1;
        touchedwall("left");
    }
    if (ball.x >= canvaWidth-ball.radius) {
        ball.Xdirection *= -1;
        touchedwall("right");
    }


    if (ball.x >= paddle2.x-10 && ball.y >= paddle2.y && ball.y <= paddle2.y + paddle2.height) {
        ball.x = -ball.radius + paddle2.x;
        ball.Xdirection *= -1;
    }

    if (ball.x - ball.radius <= paddle1.x+paddle1.width && ball.y >= paddle1.y && ball.y <= paddle1.y + paddle1.height) {
        ball.Xdirection *= -1;
        ball.x = paddle1.x + paddle1.width + ball.radius;
    }
    ball.speed +=0.0002;
}

function startBall() {
    Math.round(Math.random()) == 0 ? ball.Xdirection = -1 : ball.Xdirection = 1; 
    Math.round(Math.random()) == 0 ? ball.Ydirection = -1 : ball.Ydirection = 1;
    ball.speed=1;
}
let x = 0;
let y = 0;
let wait = null;
function touchedwall(player) {
    if (player == "left") {
        x++;
        console.log("Left Player lost");
    }
    if (player == "right") {
        y++;
        console.log("Right Player lost");
    }
    score.textContent = `${x}  :  ${y}`
    clearInterval(game1);

    context.font = "50px MV Boli";
    context.fillStyle = "grey";
    context.textAlign = "center";

    if (x == 5) {
        context.fillText("Player 1 WINS!", canvaHeight/2, canvaWidth/2);
        wait = setInterval(resetGame, 5000);
        x = 0;
        y = 0;
        score.textContent = `${x}  :  ${y}`;
    }

    else if (y == 5) {

        context.fillText("Player 2 WINS!", canvaHeight/2, canvaWidth/2);
        wait = setInterval(resetGame, 5000);
        x = 0;
        y = 0;
        score.textContent = `${x}  :  ${y}`;
    }

    else {
        resetGame();
    }
}

// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!", 250, 250);