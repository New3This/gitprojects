const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("boxOne");
const myAnimation2 = document.getElementById("boxTwo");

myButton.addEventListener("click", activateAnimation);

function activateAnimation() {
    let x = 0;
    let y = 0;
    let timerId = setInterval(right, 1);
    let timerIdtwo;
    let timerIdThree;
    let timerIdFour;
    let timerIdRefresh;
    
    function right() {
        if (x>=300) {
            clearInterval(timerId);
            timerIdtwo = setInterval(down, 1);
        }
        else {
            x+=1;
            myAnimation.style.left = x+"px";
            myAnimation2.style.left = x+"px";
            myAnimation.style.transform = "rotateZ("+x+"deg)";

        }
    };
    
    function down() {
        if (y>=300) {
            clearInterval(timerIdtwo);
            timerIdThree = setInterval(left, 1);
        }
        else {
            y += 1;
            myAnimation.style.top = y+"px";
            myAnimation2.style.top = y+"px";
            myAnimation.style.transform = "rotateZ("+y+"deg)";

        }
    }
    function left() {
        if (x==0) {
            clearInterval(timerIdThree);
            timerIdFour = setInterval(up, 1);
        }
        else {
            x-=1;
            myAnimation.style.left = x+"px";
            myAnimation2.style.left = x+"px";
            myAnimation.style.transform = "rotateZ("+x+"deg)";

        }
    };
    
    function up() {
        if (y==0) {
            clearInterval(timerIdFour);
            timerId = setInterval(right, 1);
        }
        else {
            y -= 1;
            myAnimation.style.top = y+"px";
            myAnimation2.style.top = y+"px";
            myAnimation.style.transform = "rotateZ("+y+"deg)";

        }
    }
}