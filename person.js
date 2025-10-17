class Person {
    constructor(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address
    }
    displayData() {
        console.log(`Name is : ${this.name}`);
        console.log(`Age is : ${this.age}`);
        console.log(`Address is : ${this.address}`);
    }
}

let obj1 = new Person("Pooja", 31, "Pardi");
obj1.displayData();

let obj2 = new Person("Diya", 21, "Navsari");
obj2.displayData();