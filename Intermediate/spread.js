// Spread Operator allow an iterable, such as an array or string, 
// to be expanded where zero or more arguments (for ftn call) or 
// elements (for array lietrals) are expected.

// const newArray = [...oldArray, 1, 2];
// const newObject = {...oldObject, newProp:5}

function sum(x, y, z) {
    return x+y+z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));

// Function returning multiple values (Using Destructuring)
function addAndMultiply(a, b) {
    return [a+b, a*b];
}

const [addition, multiplication] = addAndMultiply(2, 3);
console.log(`Addition is: ${addition} and Multiplication is: ${multiplication}`);


// Rest Operator is used to merge a list of ftn arguments into an array
// e.g1:
const vowels = ['A', 'E', 'I', 'O', 'U'];
const [aa, bb, ...rest] = vowels;
console.log(aa);
console.log(bb);
console.log(rest);

// e.g2:
function sortArgs(...args) {
    return args.sort();
}