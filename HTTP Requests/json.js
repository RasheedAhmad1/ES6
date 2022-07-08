// JSON code - Array of Objects
var Items = [
    {
        'name': 'Laptop',
        'color': 'White',
        'price': 250,
        'location': 'Texas'
    },
    {
        'name': 'Desktop',
        'color': 'Black',
        'price': 220,
        'location': 'California'
    },
    {
        'name': 'Palmtop',
        'color': 'Gray',
        'price': 200,
        'location': 'Dallas'
    }
]

console.log(Items[0]);
console.log(Items[0].location);

// stringify(): Convert JSON object to string
let strJson = JSON.stringify(Items);
console.log(strJson);

// parse(): convert back string to JSON object
let objJSON = JSON.parse(strJson);
console.log(objJSON);

// Ignore the properties whose value is empty, undefined, or a function are ignored by stringify().
// stringify() accepts numbers, string, objects, array, boolean and null.
