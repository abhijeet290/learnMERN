// 1️⃣ What is this in JavaScript?
// this is a special keyword that refers to the context (or owner) of the function being executed.
// Its value depends on how and where the function is called.
// 2️⃣ Different Contexts of this
// ✅ Global Scope (this in global execution)

console.log(this); // In browser: Window, In Node.js: {}
// In a browser, this refers to the window object.
// In Node.js, this is an empty object {}.
// ✅ Using globalThis

console.log(globalThis); // Works in both browser (Window) and Node.js (global object)
// globalThis is a standard way to access the global object in any environment.
// ✅ Inside Functions (this in a regular function)

function showThis() {
  console.log(this);
}
showThis(); // In strict mode: undefined, otherwise window (browser)
// In non-strict mode, it refers to window (browser).
// In strict mode ("use strict";), this is undefined.
// ✅ Inside an Object (Method Context)

// const obj = {
//   name: "Abhijit",
//   showThis: function () {
//     console.log(this); // Refers to obj
//   }
// };
// obj.showThis(); 
// this inside a method refers to the object calling it.
// ✅ Arrow Functions (Lexical this)

const obj = {
  name: "Abhijit",
  show: () => {
    console.log(this);
  }
};
obj.show(); // `this` refers to the outer scope (global/window)
// Arrow functions do not have their own this. They inherit from their surrounding scope.
// ✅ Inside a Constructor Function

function Person(name) {
  this.name = name;
}
const p1 = new Person("Abhijit");
console.log(p1.name); // "Abhijit"
// this refers to the newly created object.
// ✅ Inside a Class

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  show() {
    console.log(this.brand);
  }
}
const myCar = new Car("Tesla");
myCar.show(); // "Tesla"
// In a class, this refers to the instance of the class.
// ✅ Event Listeners (this in DOM)

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // Refers to the button element
});
// this inside an event listener refers to the element that triggered the event.
// ✅ Explicit Binding (call, apply, bind)

function greet() {
  console.log(this.name);
}
const user = { name: "Abhijit" };

greet.call(user); // "Abhijit"
greet.apply(user); // "Abhijit"
const newGreet = greet.bind(user);
newGreet(); // "Abhijit"
// call and apply invoke the function with a specified this.
// bind creates a new function with a fixed this.
// 🔥 Key Takeaways
// this depends on how the function is called.
// Arrow functions do not have their own this.
// In classes and constructors, this refers to the instance.
// Use call, apply, and bind to explicitly set this.