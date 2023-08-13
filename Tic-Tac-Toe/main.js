let cellContainer = document.getElementById("cellContainer");
let cell = document.querySelectorAll(".cell");
let results = document.getElementById("Results");
let restart = document.getElementById("restart");
restart.style.display = "none";
let playerOne = [];
let playerTwo = [];

let turns = 0;
let winConditions = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
];

restart.addEventListener("click", () => {
    playerOne = [];
    playerTwo = [];
    turns = 0;
    cell.forEach(eachCell => {eachCell.textContent = ""});
    results.textContent = "Results: ";
    results.style.color = "black";
    restart.style.display = "none";
    addCellEventListeners();
})

addCellEventListeners();

function addCellEventListeners() {
    cell.forEach(eachCell => {
        if (!playerWin()) {
            eachCell.addEventListener("click", cellClickListener);
        }
    });
}

function removeCellEventListeners() {
    cell.forEach(eachCell => {
        eachCell.removeEventListener("click", cellClickListener);
    });
}

function cellClickListener() {
    if (this.textContent != "X" && this.textContent != "O" && turns % 2 == 0) {
        this.textContent = "X";
        playerOne.push(this.getAttribute("cellIndex"));
        turns++;
    }
    else if (this.textContent != "X" && this.textContent != "O" && turns % 2 != 0) {
        playerTwo.push(this.getAttribute("cellIndex"));
        this.textContent = "O";
        turns++;
    }
    if (!playerWin() && turns >= 9) {
        results.textContent = "Results: DRAW!";
        restart.style.display = "block";
    }
}


function playerWin(){
    for (i=0; i < winConditions.length; i++) {
        for (j=0; j < winConditions[i].length; j++) {
            if (winConditions[i].every(item => playerOne.includes(item))) {
                results.style.color = "rgb(7, 240, 69)";
                results.textContent = "Results: Player 1 Wins";
                restart.style.display = "block";
                removeCellEventListeners();
                return true;
            }
            else if (winConditions[i].every(item => playerTwo.includes(item))) {
                results.style.color = "rgb(7, 240, 69)";
                results.textContent = "Results: Player 2 Wins";
                restart.style.display = "block";
                removeCellEventListeners();
                return true;
            }
        }
    }
    return false;
}
