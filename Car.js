class Car {
    constructor(brand, modal, year) {
        this.brand = brand,
            this.modal = modal,
            this.year = year
    }

    carInfo() {
        console.log(`This is a ${this.year} ${this.brand} ${this.modal}`);
    }
    modalInfo() {
        console.log(`This is a ${this.brand} ${this.modal}`);
    }
}

let myCar = new Car("Honda", "Civic", 2005);
myCar.carInfo();
myCar.modalInfo();