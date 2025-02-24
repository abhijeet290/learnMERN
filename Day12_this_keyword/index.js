"use strict";
// a = 10;
// console.log(a);
// globalobject: object has different names in different environment like window in browser and global in nodejs environment
// Chrome Browser: window
// Nodejs: global
// globalThis : so this common name is given which points to global object in every environment

// console.log(globalThis.Math.random());

// The this keyword in JavaScript is a special keyword that refers to
// the context in which the current code is being executed.
// Its value depends on how the function where this is used is called.

// 1: Global Context (Outside Any Function)
// In browsers: window
// In Node.js: Module's exports object // initially empty

// console.log(window.console.log("hii I am global object"));
// console.log(window);
// console.log(this);

// console.log(this === window); // in global scope
// let a = 10;
// var b = 30; // part of global object
// console.log(this.a, this.b);

// 2:Inside a Function
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.

// function greet() {
//   console.log(this);
// }
// greet();
// window.greet();

// ii: Strict Mode
// this will be undefined inside a function.

// "use strict" // it help us write modern js code also help in catching errors early, makes debugging easy it follows strict rules introduced in ES6

// function greet() {
//   console.log(this);
// }
// greet();

// const obj={
//   name:'steve',
//   age:29,
//   greet:function(){
//     console.log(this.name,this.age,this)
//   }
// }
// obj.greet()

//  ****************************************************************

// Arrow functions don’t have their own this.
// Instead, they inherit this from the surrounding (lexical) scope.

// const obj = {
//   name: "steve",
//   age: 29,
//   greet: () => {
//     console.log(this.name, this.age, this); // refer to global scope
//   },
// };
// obj.greet();

// const obj = {
//   name: "steve",
//   age: 29,
//   greet: function () {
//     let ab = () => {
//       console.log(this); // refer to this object its lexical scope is obj
//     };
//     ab();
//   },
// };
// obj.greet();

// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }

// let per1=new Person('Rohit',23)
// console.log(per1)

let greet = () => {
  console.log(this); // inherit from window
};
// greet()

let meet = function () {
  console.log(this);
};
meet();
