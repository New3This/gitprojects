window.addEventListener("keydown", event => console.log(event.key));
console.log("Hello")

const myDiv = document.getElementById("myDiv");
const myDiv2 = document.getElementById("myDiv2");

window.addEventListener("keydown", move);
window.addEventListener("keydown", move2);

let x = 0;
let y = 0;
myDiv.style.position = "relative";
myDiv2.style.position = "relative";

function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y+"px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y+"px";
            break;
        case "ArrowLeft":
            x+=5;
            myDiv.style.right = x+"px";
            break;
        case "ArrowRight":
            x-=5;
            myDiv.style.right = x+"px";
            break;
        default:
            break;
    }
}

let a = 0;
let b = 0;
function move2(event) {
    switch (event.key) {
        case "s":
            a+=5;
            myDiv2.style.top = a+"px";
            break;
        case "w":
            a-=5;
            myDiv2.style.top = a+"px";
            break;
        case "a":
            b+=5;
            myDiv2.style.right = b+"px";
            break;
        case "d":
            b-=5;
            myDiv2.style.right = b+"px";
            break;
        default:
            break;
    }
}