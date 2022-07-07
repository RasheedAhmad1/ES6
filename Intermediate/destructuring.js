const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4];

// Array destructuring
const [a, b] = alphabets;
console.log(a);
console.log(b);

// Skipping first element
const [ , bb, cc] = alphabets;
console.log(bb);
console.log(cc);

// But what about the rest elements, that's where 'spread operator' comes into play
const [aaa, bbb, ...rest] = alphabets;
console.log(aaa);
console.log(bbb);
console.log(rest);

// Function returning multiple values
function addAndMultiply(a, b) {
    return [a+b, a*b];
}

const [sum, multiplication] = addAndMultiply(2, 3);
console.log(`The sum is: ${sum} and Multiplication is: ${multiplication}`);

// Object destructuring
const Employee = {
    name: 'Sara',
    age: 22,
    DOB: '23/03/1996',
    address: {
        city: 'Peshawar',
        state: 'KP'
    }
}

let {name, age} = Employee;
console.log(`Name is: ${name} and Age is: ${age}`);

// Using different key name
let {name: firstName} = Employee;
console.log(`Name is: ${firstName}`);

// Destructuring nested objects
const {DOB, address: {city, state}} = Employee;
console.log(DOB, city, state);
