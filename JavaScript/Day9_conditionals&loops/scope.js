// let's talk about scope
// Global scope, local/functional scope, block scope

// GLobal scope variable: can be accessed by anyone
// let a = 10;
// var b = 32;
// const c = 23;
// console.log(a);
// console.log(b);
// console.log(c);
// function glo() {
// accessing global variable inside funnction
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// glo()

// function greet() {
  // functional or local scope variable
//   let a = 10;
//   var b = 32;
//   const c = 23;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log("inside greet");
// }
// greet()
// console.log(c)

// if(true){
  // block scope vatiable can be accessed in the declared block
//   let a=10
//   var b=32
//   const c=21
// }
// console.log(a)
// console.log(b)
// console.log(c)

// for (var i = 0; i < 5; i++) {
//   console.log(i)
  
// }
// console.log(i)

// in previous days js uses functional scope

// let amount=20
// if(true){
  // let amount=30
//   console.log(amount)
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i); // Prints 1, 2, 3, 4, 5
//   }, 1000);
// }
// With let, each iteration of the loop creates a new block-scoped i, so the setTimeout callbacks capture the correct value.

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i); // Prints 6, 6, 6, 6, 6
//   }, 1000);
// }
// The setTimeout callback runs after the loop has finished, and by then, i has the value 6.
// Since var is function-scoped, all callbacks share the same i.

// while loop
// let w=1
// while(w<=10){
//   console.log(w)
//   w++
// }

// do-while loop
let dw=1
do{
  console.log(dw)
}while(dw>10){
  dw++
}

// function createHelloWorld() {
//   return function (...args) {
//     return "Hello World";
//   };
// }

// let f=createHelloWorld();
// console.log(f())