# PR_8_JS_OOP


# 🧠 Object-Oriented Programming Concepts Project (C++ / Java / JS)

## 📘 Project Overview

This project demonstrates the **core principles of Object-Oriented Programming (OOP)** such as **Classes, Objects, Array of Objects, Polymorphism, Abstraction, the `static` keyword**, and **Getter & Setter methods**.

It was created as part of my learning journey at **Red & White Multimedia Institute** while pursuing a **Diploma in Computer Engineering**.

The goal of this project is to understand how real-world entities can be represented and manipulated in programming using OOP principles, focusing on **clean structure, reusability, and data encapsulation**.

---

## 🚀 Topics Covered

### 1️⃣ Classes and Objects
```cpp
class Student {
    public:
        string name;
        int age;

        void display() {
            cout << "Name: " << name << ", Age: " << age << endl;
        }
};

int main() {
    Student s1;
    s1.name = "Nurul";
    s1.age = 20;
    s1.display();
    return 0;
}
```

---

### 2️⃣ Array of Objects
```cpp
class Employee {
    public:
        string name;
        int salary;
        void input(string n, int s) {
            name = n;
            salary = s;
        }
        void show() {
            cout << "Employee: " << name << " | Salary: " << salary << endl;
        }
};

int main() {
    Employee emp[3];
    emp[0].input("Ayaan", 30000);
    emp[1].input("Sara", 35000);
    emp[2].input("Ravi", 40000);

    for(int i=0; i<3; i++) {
        emp[i].show();
    }
    return 0;
}
```

---

### 3️⃣ Encapsulation with Getter & Setter Methods
```cpp
class Account {
    private:
        int balance;

    public:
        void setBalance(int b) {
            if(b > 0)
                balance = b;
        }
        int getBalance() {
            return balance;
        }
};
```

---

### 4️⃣ Static Keyword
```cpp
class Counter {
    static int count;

    public:
        Counter() {
            count++;
            cout << "Object Count: " << count << endl;
        }
};

int Counter::count = 0;
```

---

### 5️⃣ Abstraction
```cpp
class Shape {
    public:
        virtual void area() = 0;
};

class Circle : public Shape {
    public:
        void area() {
            cout << "Area of Circle = πr²" << endl;
        }
};
```

---

### 6️⃣ Polymorphism
```cpp
class Animal {
    public:
        virtual void sound() {
            cout << "Animals make sound" << endl;
        }
};

class Dog : public Animal {
    public:
        void sound() override {
            cout << "Dog barks" << endl;
        }
};

int main() {
    Animal *a;
    Dog d;
    a = &d;
    a->sound();
    return 0;
}
```

---

## 💡 Example Practice Questions

1. Create a class `Car` with data members `brand`, `price`, and a static variable `count`.
2. Write a program to create an **array of student objects** and display their marks.
3. Create a **BankAccount** class using **Encapsulation** with getter and setter methods for balance.
4. Implement **Abstraction** by creating an abstract class `Shape` and derived classes like `Circle` and `Rectangle`.
5. Demonstrate **Polymorphism** using base class `Animal` and derived classes `Dog`, `Cat`, and `Cow`.
6. Use **Constructor Overloading** to initialize class objects in multiple ways.
7. Create a program using **Static Methods** to display a count of created objects.
8. Write a class `Calculator` demonstrating **function overloading**.

---

## 🧩 Technologies Used
- **Programming Language:** C++ (or Java / JS for OOP Concepts)
- **Concepts:** Classes, Objects, Abstraction, Polymorphism, Static Keyword, Getter & Setter Methods

---



## 🎯 Project Outcome

✅ Understood the practical implementation of **core OOP principles**.  
✅ Gained the ability to design structured and reusable programs.  
✅ Learned how to apply **Encapsulation, Abstraction, and Polymorphism**.  
✅ Enhanced understanding of **static members** and **data hiding**.

---

## 👨‍💻 Author
**Name:** Nurul Shaikh  
**Institute:** Red & White Multimedia  
**Course:** Diploma in Computer Engineering (Backend Development)  
**Topic:** Object-Oriented Programming with Classes, Objects, and Advanced OOP Concepts
