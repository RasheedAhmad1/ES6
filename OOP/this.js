// Creating an 'Item' object for demonstrating 'this' keyword
let price = 220;
const Item = {
    name: 'Cycle',
    color: 'Black', 
    topSpeed: 50,
    getName: function() {
        console.log(price); // Outside variable used without 'this' keyword
        console.log(`Name: ${this.name}`); // Object variable used with 'this' keyword
    }
}

Item.getName();