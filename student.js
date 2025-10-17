class Student {
    constructor(id, name, course) {
        this.id = id,
            this.name = name,
            this.course = course
    }

    displayStudentData() {
        console.log(`Student Id : ${this.id}`);
        console.log(`Student Name : ${this.name}`);
        console.log(`Course Name : ${this.course}`);
    }
}

let s = new Student(9893, "Pooja", "FED");
s.displayStudentData();