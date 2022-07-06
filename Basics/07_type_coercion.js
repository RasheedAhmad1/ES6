var numOne = 5;
var numTwo = "Hello";
var sum = numOne + numTwo;

const info = "The result is 'String', because JS adds a number and string and the result is a string also";

function loadCoercion() {
    document.getElementById('output').innerHTML = sum;
    document.getElementById('type').innerHTML = typeof(sum);
    document.getElementById('exp').innerHTML = info;
}
