class Employee {
        constructor(givenName, givenAge, givenYears_of_service) {
            this.name = givenName;
            this.age = givenAge;
            this.year = givenYears_of_service;
        }

        // User-defined method
        joining_date() {
            let age = this.age;
            let name = this.name;

            let date = new Date();
            date = date.getFullYear() - this.year;
            return `Name: ${name} 
            Age: ${age} 
            Joining data: ${date}`;
        }
        
        // Static method: which can be used/invoked without an object
        static add(a, b) {
            return a + b;
        }
    }

// Initialinzing an object 'emp1'
let emp1 = new Employee('Akram', 32, 10);

// Invoking class method
console.log(emp1.joining_date());

// Invoking static method without using class object
console.log(Employee.add(2, 3));

// Inheritance
class Programmer extends Employee {
    constructor(givenName, givenAge, givenYears_of_service, language) {
        // super() means to invoke all the constructors of the parent class
        super(givenName, givenAge, givenYears_of_service); 
        this.language = language;
    }
}

let p1 = new Programmer('Ahad', 23, 4, 'JavaScript');
console.log(p1);
