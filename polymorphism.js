// Polymorphism (method overriding) 

class A {
    printMessage() {
        console.log("Hello from A.");
    }
}

class B extends A {
    printMessage() {
        console.log("Hello from B.");
    }
}

class C extends A {
    printMessage() {
        console.log("Hello frmo C.");
    }
}
// method call by B class object
let b = new B();
b.printMessage();

// method call by C class object
let c = new C();
c.printMessage();