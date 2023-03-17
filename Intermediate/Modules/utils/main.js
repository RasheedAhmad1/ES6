// To keep files on separated modules and export, import them whenever needed.

// // Name import
// import { name, add as summation } from './utils.js';
// console.log(name);
// console.log(summation(1, 1));

// // Default import
// // A function exported as default can be name as you desire like:
// import multiply from './utils.js';
// console.log(multiply(3, 3));

// // Rename import
// import { firstName } from './utils.js';
// console.log(firstName);

// // Import List + Rename
// import {
//     age as Age,
//     date_of_birth
// } from './utils.js';
// console.log(`My date of birth is: ${date_of_birth} and I'm ${Age} years old.`);

// // Global alias to import everything
// import * as data from './utils.js';
// console.log(data.name);
// console.log(data.add(2, 5));
// console.log(data.firstName);
// console.log(data.multiplyNumbers(4, 5));
// console.log(`My date of birth is: ${data.date_of_birth} and I'm ${data.age} years old.`);

// Import all at a time
import multiply, {name as Name, add, firstName, age as Age, date_of_birth } from './utils.js';
console.log(Name);
console.log(add(2, 8));
console.log(firstName);
console.log(multiply(3, 6));
console.log(`My date of birth is: ${date_of_birth} and I'm ${Age} years old.`);