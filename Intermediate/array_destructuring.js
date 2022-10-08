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

// But what about the rest elements, that's where 'Rest Operator' comes into play
const [aaa, bbb, ...rest] = alphabets;
console.log(aaa);
console.log(bbb);
console.log(rest);

// Function returning multiple values (Using Destructuring)
function addAndMultiply(a, b) {
    return [a+b, a*b];
}

const [sum, multiplication] = addAndMultiply(2, 3);
console.log(`The sum is: ${sum} and Multiplication is: ${multiplication}`);

