class Rectangle {
    constructor(length, width) {
        this.length = length,
            this.width = width
    }

    area() {
        console.log(`Area of rectangle is : ${this.length * this.width}`);
    }
}

let obj1 = new Rectangle(5, 8);
obj1.area();