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

// Using different key name (key aliasing)
let {name: firstName} = Employee;
console.log(`Name is: ${firstName}`);

// Destructuring nested objects
const {DOB, address: {city, state}} = Employee;
console.log(DOB, city, state);