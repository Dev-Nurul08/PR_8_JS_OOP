 let obj1 = {
     name: "Nurul",
     age: 18
 }

 let obj2 = Object.create(obj1);

 obj2.printMsg = function() {
     return `My name is ${this.name}`;
 }

 console.log(obj2.printMsg());