class BankAccount {
    constructor(holdername, balance) {
        this.holdername = holdername,
            this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Account Holder ${this.holdername} deposited ${this.balance} successfully..`);
    }
}

let obj1 = new BankAccount("Nurul", 50000);
obj1.deposit(20000);