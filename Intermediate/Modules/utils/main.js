// To keep files on separated modules and export, import them 
// whenever needed.

// Name import
import { name } from './utils.js';
console.log(name);

// Default import
import addNubers from './utils.js';
console.log(addNubers(2, 3));

// Rename import
import { firstName } from './utils.js';
console.log(firstName);

// Export List + Rename
import {
    age as Age,
    date_of_birth
} from './utils.js';
console.log(`My date of birth is: ${date_of_birth} and I'm ${Age} years old.`);