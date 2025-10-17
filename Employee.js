class Employee {
    constructor(id, name, department, basicSalary) {
        this.id = id,
            this.name = name,
            this.department = department,
            this.basicSalary = basicSalary
    }

    calculateSalary() {
        return this.basicSalary;
    }

    getDetails() {
        return `${this.name} (ID : ${this.id}) - ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(id, name, department, basicSalary, teamSize, bonusPercentage) {
        super(id, name, department, basicSalary),
            this.teamSize = teamSize,
            this.bonusPercentage = bonusPercentage
    }

    calculateSalary() {
        let bonus = this.basicSalary * (this.bonusPercentage / 100);
        return this.basicSalary + bonus;
    }

    conductMeeting() {
        console.log(`Manager ${this.name} is conducting a team meeting with ${this.teamSize} members.`);
    }
}

class Developer extends Employee {
    constructor(id, name, department, basicSalary, programmingLanguage, overTimeHours = 0) {
        super(id, name, department, basicSalary),
            this.programmingLanguage = programmingLanguage,
            this.overTimeHours = overTimeHours
    }

    calculateSalary() {
        let overTimePay = this.overTimeHours * (this.basicSalary / 160);
        return this.basicSalary + overTimePay;
    }

    code() {
        console.log(`Developer ${this.name} is coding in ${this.programmingLanguage}`);
    }
}

let manager = new Manager("8133", "Nurul", "Developing", 50000, 5, 15);
let developer = new Developer("8144", "Shivam", "Developing", 25000, "JavaScript", 10);

console.log(`Manager Salary is : ${manager.calculateSalary()}`);
console.log(`Developer Salary is : ${developer.calculateSalary()}`);

manager.conductMeeting();
developer.code();