// Spread Operator allow an iterable, such as an array or string, 
// to be expanded where zero or more arguments (for ftn call) or 
// elements (for array lietrals) are expected.

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


// Rest Operator allows an iterable to pack him
// e.g:
const vowels = ['A', 'E', 'I', 'O', 'U']
const [aa, bb, ...rest] = vowels;
console.log(aa);
console.log(bb);
console.log(rest);
