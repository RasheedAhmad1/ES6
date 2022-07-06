// Created a person array, holds info about the person
var person = ['Rasheed Ahmad', 26, 'Peshawar']
console.log(person);

// Indexing array
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// Checking the type of the array
console.log(typeof(person));

// Updating an existing value i.e second value
person[1] = 25;
console.log(person[1]);

//Adding a new value at the end of the Array
person[person.length] = 'Engineer';
console.log(person);

// OR adding with a built-in function
person.push('Software');
console.log(person);

// Remove last element of the Array</p>
person.pop();
console.log(person);

// Adding or Removing a value at a specific location
person.splice(2,1,'Nice Person');
console.log(person);

// Deleting a specific element
person.splice(2, 1);
console.log(person);

// Checking lenght of the array
console.log(person.length);

//Concatination
Languages = ['JavaScript', 'React', 'Node.js'];
var newData = person.concat(Languages);
console.log(newData);

// Sorting Ascending and Descending
newData.sort();  // Ascending order
console.log(newData);

newData.reverse();  // Descending order
console.log(newData);

// --- Some Useful Array Methods ---
const items = [
                { name: 'Bike', price: 200 },
                { name: 'Phone', price: 150 },
                { name: 'TV', price: 202 },
                { name: 'Movie', price: 10 },
                { name: 'Cycle', price: 140 },
                { name: 'Computer', price: 180 },
                { name: 'Mouse', price: 20 }
            ]

// filter(): Filetering Data
const filterdItems = items.filter( (item) => {
    return item.price <= 100; 
});
console.log(filterdItems);

// map(): Mapping Data
const mapedItems = items.map( (item) => {
    return item.name;
});
console.log(mapedItems);

// find(): Finding an element
const foundItem = items.find( (item) => {
    return item.name === 'Cycle';
});
console.log(foundItem);

// forEach(): Easy Looping
items.forEach( (item) => {
    console.log(item.price);
});

// some(): Check if anything in an array returns true of false
const inexpensiveItems = items.some( (item) => {
    return item.price <= 50;
});
console.log(inexpensiveItems);

// some(): Check if anything in an array returns true of false
const everyItem = items.every( (item) => {
    // return item.price <= 50;
    return item.price <= 202;
});
console.log(everyItem);

// includes(): Check if an array has the given item or not
const numbers = [1, 2, 3, 4, 5];
const item1 = numbers.includes(2);
const item2 = numbers.includes(6);
console.log(item1);
console.log(item2);