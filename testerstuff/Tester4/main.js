
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 June 2030 12:00:00 UTC; path=/";

// document.cookie = "lastName=Star; expires=Sun, 1 June 2030 12:00:00 UTC; path=/";

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#secondText");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.querySelector("#getCookie");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})


cookieBtn.addEventListener("click", ()=> {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})


function setCookie(name, value, time) {
    if (time === null) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    else {
        const date = new Date();
        date.setTime(date.getTime()+24*time*60*60*1000)
        let expires = "expires="+date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
        console.log(document.cookie);
    }
}
function delEzCookies(name) {
    setCookie(name,null,null);
}
// function delCookies(name) {
//     const expire = new Date();
//     expire.setFullYear(expire.getFullYear()-1);
//     let expiryDate = "expires="+expire.toUTCString();
//     document.cookie = `${name}=null;${expiryDate};path=/`;
// }

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length+1);
        }
    });

    return result;

}

function greeting() {
    console.log(document.cookie);
    // let namec = window.prompt("What is the cookie");
    // console.log(getCookie(namec));

    // let name = window.prompt("What is the name of the cookie you want to delete?");
    // delCookies(name);


    // delEzCookies(name);



    // console.log(document.cookie);
}
greeting();
