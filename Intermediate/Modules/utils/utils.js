// Name export
export const name = 'Rasheed Jan';
export function add(c, d) {
    return c + d;
}

// Default export
// A module can have only one default export
function multiplyNumbers(a, b) {
    return a * b;
}
export default multiplyNumbers;

// Rename export
const fName = 'Rasheed';
export { fName as firstName };

// Export List + Rename
const age = 26;
const DOB = 1996;
export {
    age,
    DOB as date_of_birth
};