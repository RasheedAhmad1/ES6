// Name export
export const name = 'Rasheed Jan';

// Default export
function addNubers(a, b) {
    return a + b;
}
export default addNubers;

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