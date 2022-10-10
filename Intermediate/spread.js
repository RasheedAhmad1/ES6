// Spread Operator allow an iterable, such as an array or string, 
// to be expanded where zero or more arguments (for ftn call) or 
// elements (for array lietrals) are expected.

// const newArray = [...oldArray, 1, 2];
// const newObject = {...oldObject, newProp:5}

function plus(x, y, z) {
    return x+y+z;
}
const numbers = [1, 2, 3];

console.log(plus(...numbers));


// Function returning multiple values (Using Destructuring)
function addAndMultiply(a, b) {
    return [a+b, a*b];
}

const [addition, multiplication] = addAndMultiply(2, 3);
console.log(`Addition is: ${addition} and Multiplication is: ${multiplication}`);


// Rest Operator is used to merge a list of ftn arguments into an array
// example 1 demonstrates the residual elements of an array
const vowels = ['A', 'E', 'I', 'O', 'U'];
const [aa, bb, ...rest] = vowels;
console.log(aa);
console.log(bb);
console.log(rest);

// example 2
function sortArgs(...args) {
    return args.sort();
}

console.log(sortArgs(2, 4, 9, 1, 0));


// example 3
const filter = (...args) => {
    return args.filter(el => el <= 2);
}

console.log(filter(2, 4, 9, 1, 0));
let result = filter(2, 4, 9, 1, 0);
console.log(sortArgs(...result));
