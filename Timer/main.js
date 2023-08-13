clock = document.getElementById("timer");

startBtn = document.getElementById("start");

stopBtn = document.getElementById("stop");

resetBtn = document.getElementById("reset");


let timerStarted = null;

let seconds = 0;
let minutes = 0;
let hours = 0;

startBtn.addEventListener("click", () => {
    if (timerStarted==null) {
        timerStarted = setInterval(time, 1000);
    }
})

stopBtn.addEventListener("click", () => {
    clearInterval(timerStarted);
    timerStarted = null;

})

resetBtn.addEventListener("click", () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(timerStarted);
    timerStarted = null;
    clock.textContent = `${formatZeros(hours)}:${formatZeros(minutes)}:${formatZeros(seconds)}`;
})


let time = () => {
    seconds+=1;
    seconds >= 60 ? (minutes+=1, seconds = 0): null;
    minutes >= 60 ? (hours +=1, minutes = 0): null;
    clock.textContent = `${formatZeros(hours)}:${formatZeros(minutes)}:${formatZeros(seconds)}`;
};

function formatZeros(value) {
    value < 10 ? value = `0${value}` : null; 
    return value;
}