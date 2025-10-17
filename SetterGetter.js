// Set and Get method


class Person {
    constructor() {
        this.firstname;
    }

    set firstName(name) {
        this.firstname = name;
    }

    get firstName() {
        return this.firstname;
    }
}

let person = new Person();
person.firstName = "Nurul";
console.log(`First Name : ${person.firstName}`);