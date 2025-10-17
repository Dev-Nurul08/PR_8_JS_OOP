class User {
    constructor(name, email, role = 'user') {
        this.name = name,
            this.email = email,
            this.role = role,
            this.isActive = true,
            this.createdAt = new Date()
    }
    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivated.`);
    }
    activate() {
        this.isActive = true;
        console.log(`${this.name} has been activated.`);
    }
    getInfo() {
        return `${this.name} ${this.email} - ${this.role}`;
    }
}

let admin = new User('Pooja', 'pooja@gmail.com', 'admin');
let customer = new User('Vicky', 'vicky@gmail.com');

console.log(admin.getInfo());
customer.deactivate();