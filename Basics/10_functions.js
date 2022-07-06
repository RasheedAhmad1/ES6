// Declaring a simple function
function printName() {
    console.log('Rasheed Ahmad');
}
printName(); // calling(invoking) the function

// function with parameter(s)
function addNumbers(a, b) {
    var sum = a + b;
    console.log(sum);
}
addNumbers(2, 3);

// function returning a value
var result;
function multiplyNumbers(a, b) {
    var multiply = a * b;
    return multiply;
}
result = multiplyNumbers(2, 3);
console.log(result);

// Variable Scoping
var num1 = 5; //global scope
function sum (a) {
    var num2 = 2; //local to this function
    var result = num1+num2+a;
    console.log(result);
}
sum(5); 
console.log(num2);