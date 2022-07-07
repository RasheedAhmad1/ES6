// A named function with two parameters and a return statement.
let sum = (a, b) => {
    return a + b;
} 
console.log(sum(2, 3));
// OR
// let sum = (a, b) => a + b;

// A named function with only one parameter and a return statement.
let isPositive = (number) => {
    return number >= 0;
}
console.log(isPositive(2));
// OR 
// let isPositive = number => number >= 0;

// A named function with no parameters and a return statement.
let randomNumber = () => {
    return Math.random;
}
console.log(randomNumber());
// OR
// let randomNumber = () => Math.random;

// An annonymous function with no name
document.addEventListener('click', () => {
    console.log('Clicked!');
});
// OR
document.addEventListener('click', () => console.log('Clicked'));
