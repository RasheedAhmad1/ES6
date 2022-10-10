// setInterval()
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo1").innerHTML = date.toLocaleTimeString();
}
 
// clearInterval(): 
// const myInterval = setInterval(myTimer, 1000);

// Use myStopFunction with an event on a button 
function myStopFunction () {
    clearInterval(myInterval);
}

// setTimeout()
let myStopInterval;

function myFunction() {
    myStopInterval = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  document.getElementById("demo2").innerHTML = "Happy Birthday!";
}

// clearTimeout()
// using to prevent greeting
// const myStopInter = setTimeout(myTimeout, 3000);

// Use myStopTimeout with an event on a button
function myStopTimeout() {
    clearTimeout(myStopInterval);
}
