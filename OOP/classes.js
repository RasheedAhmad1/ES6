class Employee {
        constructor(givenName, givenAge, givenYears_of_service) {
            this.name = givenName;
            this.age = givenAge;
            this.years = givenYears_of_service;
        }

        // User-defined method
        joining_date() {
            let age = this.age;
            let name = this.name;

            let joining_date = new Date();
            joining_date = joining_date.getFullYear() - this.years;
            return `Name: ${name}, Age: ${age} and Joining date is: ${joining_date}`;
        }
        
        // Static method: which can be used/invoked without an object
        static add(a, b) {
            return a + b;
        }
    }

// Initialinzing an object 'emp1', the constructor is called automatically
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

let p1 = new Programmer('Abid', 24, 4, 'JavaScript');
let p2 = new Programmer('Mufassir', 25, 4, 'React');
console.log(p1);
console.log(p2);
