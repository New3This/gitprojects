const array = ["Scissors", "Paper", "Rock"];
let rockBtn = document.getElementById("Rock");
let paperBtn = document.getElementById("Paper");
let scissorsBtn = document.getElementById("Scissors");
let computer = document.getElementById("PCR-Computer");
let player = document.getElementById("PCR-Player");
let results = document.getElementById("PCR-Results");
let streaks = document.getElementById("streak");
let highStreak = document.getElementById("highStreak");


function randomiser() {
    let x = Math.floor(Math.random()*10)
    while (x > 2) {
        let y = Math.floor(Math.random()*10)
        y > x ? x = y-x : x = x-y;
    }
    return x;
}

let x = 0;
let y = 0;
rockBtn.addEventListener("click",() => {
    let computerChosen = array[randomiser()];
    computer.textContent = "Computer: " + computerChosen;
    player.textContent = "Player: Rock";
    results.textContent = "Results: " + loseOrWin(array[2], computerChosen);
    if (loseOrWin(array[2], computerChosen) == "Win") {
        Streak();
    }
    else {
        x = 0;
        streaks.textContent = "Streaks: " + x;
    }
})
paperBtn.addEventListener("click", () => {
    let computerChosen = array[randomiser()];
    computer.textContent = "Computer: " + computerChosen;
    player.textContent = "Player: Paper";
    results.textContent = "Results: " + loseOrWin(array[1], computerChosen);
    if (loseOrWin(array[1], computerChosen) == "Win") {
        Streak();
    }
    else {
        x = 0;
        streaks.textContent = "Streaks: " + x;
    }
})
scissorsBtn.addEventListener("click", () => {
    let computerChosen = array[randomiser()];
    computer.textContent = "Computer: " + computerChosen;
    player.textContent = "Player: Scissors";
    results.textContent = "Results: " + loseOrWin(array[0], computerChosen);
    if (loseOrWin(array[0], computerChosen) == "Win") {
        Streak();
    }
    else {
        x = 0;
        streaks.textContent = "Streaks: " + x;
    }
})

function Streak() {
    x+=1;
    if (x > y) {
        y=x;
    }
    streaks.textContent = "Streaks: " + x;
    
    highStreak.textContent = "Highest Win Streak: " + y;
}

function loseOrWin(value, against) {
    if (value == array[0]) {
        if (against == array[0]) {
            results.style.color = 'black';
            return "Draw";
            
        }
        else if (against == array[1]) {
            results.style.color = 'green';
            return "Win";
        }
        else {
            results.style.color = 'red';
            return "Lose";
        }
    }
    else if (value == array[1]) {
        if (against == array[0]) {
            results.style.color = 'red';
            return "Lose";
        }
        else if (against == array[1]) {
            results.style.color = 'black';
            return "Draw";
        }
        else {
            results.style.color = 'green';
            return "Win";
        }    }
    else {
        if (against == array[0]) {
            results.style.color = 'green';
            return "Win";
        }
        else if (against == array[1]) {
            results.style.color = 'red';
            return "Lose";
        }
        else {
            results.style.color = 'black';
            return "Draw";
        }    
    }
}

