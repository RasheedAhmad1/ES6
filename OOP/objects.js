// Creating an 'Employee' object
const Car = {
    name: 'BMW',
    color: 'White',
    manufacturer: {
      name: 'Dallas',
      location: 'United States of America'
    }, 
    topSpeed: 450,
    applyBreaks: function() {
      setTimeout(function() {
        console.log('Car Stopped!');
      }, 2000);
    }
  }
  
  console.log(Car.name);
  console.log(Car.manufacturer.location);
  console.log(Car.topSpeed);
  Car.applyBreaks();
