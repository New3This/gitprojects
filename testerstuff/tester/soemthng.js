

// function promise(time) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, time);
//     });
// }

// function promise(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
// }

// const wait = time => new Promise(resolve => setTimeout(resolve, time));


      
// promise(3000).then(
//     function() {
//         console.log("Hello");
//     }
// );
    
// const promise = 
//     new Promise(
//         function(resolve) {
//            setTimeout(resolve, 5000);
//         }
//     );

      
// promise.then(
//     function() {
//         console.log("Hello");
//     }
// );

// const promise = new Promise(
//     function(resolve) {
//         setTimeout(resolve, 5000)
//     }
// );

// promise.then(
//     function(resolve) {
//         console.log("Hello");
//     }
// )






// const promise = new Promise (
//     function(resolve, reject) {
//         let fileLoaded = false;

//         if (fileLoaded) {
//             resolve("File loaded");
//         }
//         else {
//             reject("File NOT loaded");
//         }
//     }
// );

// promise.then(function(value) {
//     console.log(value);
//   }).catch(function(error) {
//     console.log(error);
//   });

// async function promise() {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         return "File loaded";
//     }
//     else {
//         return "File NOT loaded";
//     }
// };

// function promise() {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         return Promise.resolve("File loaded");
//     }
//     else {
//         return Promise.reject("File NOT loaded");
//     }
// };

// promise().then(value => (console.log(value))).catch(error => console.log(error));

// promise().then(function(value) {
//     console.log(value);
//   }).catch(function(error) {
//     console.log(error);
//   });

async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return "File is loaded";
    }
    else {
        throw "File is not loaded";
    }
}

async function startProcess() {
    try {
        let msg = await loadFile();
        console.log(msg);
    }

    catch(error) {
        console.log(error);
    }
}

startProcess();
