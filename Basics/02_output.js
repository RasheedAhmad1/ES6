// --- Using innerHTML ---

function myFunction() {
    document.getElementById("trial").innerHTML = "I am loaded";
}

// --- Using document.write() ---
function loadData() {
    document.getElementById('paragraph').innerHTML = document.write('Hey, I just loaded from "document.write()"!');
}

// --- Using window.alert() ---
function loadAlert() {
    window.alert("Hey, I'm an alert!");
}

// --- Using console.log() ---
// console.log(1+2);
// This JS code is embeded in HTML file to load at the exact position