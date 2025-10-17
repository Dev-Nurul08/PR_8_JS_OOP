
# 🧠 Object-Oriented Programming Concepts Project (JavaScript)

## 📘 Project Overview

This project demonstrates the **core principles of Object-Oriented Programming (OOP)** such as **Classes, Objects, Array of Objects, Polymorphism, Abstraction, the `static` keyword**, and **Getter & Setter methods** — all implemented using **JavaScript (ES6)**.

It was created as part of my learning journey at **Red & White Multimedia Institute** while pursuing a **Diploma in Computer Engineering**.

The goal of this project is to understand how real-world entities can be represented and manipulated in programming using OOP principles, focusing on **clean structure, reusability, and data encapsulation**.

---

## 🚀 Topics Covered

### 1️⃣ Classes and Objects
```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const s1 = new Student("Nurul", 20);
s1.display();
```

---

### 2️⃣ Array of Objects
```javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  show() {
    console.log(`Employee: ${this.name} | Salary: ${this.salary}`);
  }
}

const employees = [
  new Employee("Ayaan", 30000),
  new Employee("Sara", 35000),
  new Employee("Ravi", 40000)
];

employees.forEach(emp => emp.show());
```

---

### 3️⃣ Encapsulation with Getter & Setter Methods
```javascript
class Account {
  #balance; // private field

  set balance(amount) {
    if (amount > 0) {
      this.#balance = amount;
    }
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.balance = 10000;
console.log("Balance:", acc.balance);
```

---

### 4️⃣ Static Keyword
```javascript
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
    console.log("Object Count:", Counter.count);
  }
}

new Counter();
new Counter();
new Counter();
```

---

### 5️⃣ Abstraction (Using Abstract-like Base Class)
```javascript
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log("Area of Circle:", c.area());
```

---

### 6️⃣ Polymorphism
```javascript
class Animal {
  sound() {
    console.log("Animals make sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(a => a.sound());
```

---

## 💡 Example Practice Questions

1. Create a class `Car` with data members `brand`, `price`, and a static variable `count` that counts how many car objects are created.
2. Write a program to create an **array of student objects** and display their marks.
3. Create a **BankAccount** class using **Encapsulation** with getter and setter methods for balance.
4. Implement **Abstraction** by creating a base class `Shape` and derived classes like `Circle` and `Rectangle`.
5. Demonstrate **Polymorphism** using base class `Animal` and derived classes `Dog`, `Cat`, and `Cow`.
6. Use **Constructor Overloading (Simulated)** to initialize class objects in multiple ways.
7. Create a program using **Static Methods** to display a count of created objects.
8. Write a class `Calculator` demonstrating **method overloading** using multiple parameter checks.

---

## 🧩 Technologies Used
- **Language:** JavaScript (ES6)
- **Concepts:** Classes, Objects, Abstraction, Polymorphism, Static Keyword, Getter & Setter Methods

---



---

## 🎯 Project Outcome

✅ Understood the practical implementation of **core OOP principles in JavaScript**.  
✅ Learned to use modern **ES6 classes, getters, setters, and static methods**.  
✅ Applied **Abstraction and Polymorphism** using class inheritance.  
✅ Enhanced understanding of **data encapsulation and reusability**.

---

## 👨‍💻 Author
**Name:** Nurul Shaikh  
**Institute:** Red & White Multimedia  
**Course:** Diploma in Computer Engineering (Backend Development)  
**Topic:** Object-Oriented Programming with JavaScript Classes, Objects, and Advanced OOP Concepts
