class BankAccount {#
    accountNumber;#
    balance;#
    transactionHistory;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder,
            this.#accountNumber = this.#generateAccountNumber(),
            this.#balance = initialBalance,
            this.#transactionHistory = [],
            this.#logTransaction('Account Opened', initialBalance)
    }

    #
    generateAccountNumber() {
        return 'ACC' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    #
    logTransaction(description, amount) {
        this.#transactionHistory.push({
            date: new Date(),
            description,
            amount,
            balance: this.#balance
        });
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive.');
        }
        this.#balance += amount;
        this.#logTransaction('Deposit', amount);
        console.log(`Deposited ${amount} . New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive.');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient Funds.');
        }
        this.#balance -= amount;
        this.#logTransaction('Withdrawal', -amount);
        console.log(`Withdrew ${amount} . New Balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getStatement() {
        return [...this.#transactionHistory];
    }
}

let account = new BankAccount('Nurul', 20000);
console.log(`Account Number: ${account.getAccountNumber()}`);
console.log(`Balance: ${account.getBalance()}`);
account.deposit(2000);
account.withdraw(5000);