// Function in javascript
console.log("Hello from Javascript functions");
console.log("Hello from Javascript functions");
console.log("Hello from Javascript functions");

// Function Declaration
function greet() {
  console.log("Hello from inside of function");
}
greet();

function sum(a, b) {
  return a + b;
}
console.log(sum(54, 65));

function multiply(a = 2, b = 3) {
  return b * a;
}
console.log(multiply(54, 65));
console.log(multiply());

// Function Expression: in this function stored inside heap and func variable store its reference which is stored in stack as this is a variable

const func = function () {
  return `Hello from function expression`;
};
console.log(func());

// Arrow Function: Short and modern syntax for defining functions introduced in ES6

const arrFunc = () => {
  console.log(`Hello from arrow function`);
};
arrFunc();

const sumFunc = (a, b) => {
  return a + b;
};
console.log(sumFunc(23, 54));

// return didn't required for single line statement
const sub = (a, b) => a - b;
console.log(sub(23, 54));

const sq = (a) => a ** 3;
console.log(sq(4));

const sum1 = function (...num) {
  let sum = 0;
  for (let n of num) {
    sum += n;
  }
  return sum;
};
console.log(sum1(4, 54, 12, 51, 89, 25));


let obj={
  nam:'Natasha',
  age:27,
  amount:1094984
}
// function funct(obj){
//   console.log(obj.nam, obj.age)

// }
// funct(obj)
function funct({nam,age}){
  console.log(nam, age)

}
funct(obj)