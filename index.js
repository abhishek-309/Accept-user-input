// How ta accept user input
// 1. Easy Way = Window prompt
// 2. PROFESSIONAL WAY = HTML text box


// let username;

// username = window.prompt("What's is your username?");


// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById(myText).value;
    document.getElementById("myH1").textContent = `Hello ${username}`
   
}