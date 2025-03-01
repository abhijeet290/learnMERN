// Write a function called greet that takes a name as an argument and logs:
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Steve"));
// Write a function called add that takes two numbers as arguments and returns their sum. Log the result to the console.
function add(a, b) {
  return a + b;
}
console.log(add(34, 54));

const greet1 = function (name) {
  return `Hello ${name}`;
};
console.log(greet1("Rogers"));

const add1 = (a, b) => a + b;
console.log(add1(56, 54));

// Default Parameters
// Write a function called multiply that takes two arguments:
// The first argument is required (num1).
// The second argument is optional (num2) and defaults to 1.
function multiply(num1, num2 = 1) {
  return num1 * num2;
}
// The function should return the product of num1 and num2. Test the function with:
// Only one argument.
console.log(multiply(32));
// Both arguments.
console.log(multiply(43, 2));

// Write a function called sumAll that takes any number of arguments (using the rest parameter) and returns their sum. Test the function with:

function sumAll(...args){
  let sum=0
  for(let num of args){
    sum+=num
  }
  return sum
}

console.log(sumAll(1, 2, 3))

console.log(sumAll(10, 20, 30, 40, 50))

// Write a function called calculate that takes three arguments:
// Two numbers (num1 and num2).
// A callback function (operation) that performs an operation on the two numbers.
// The calculate function should call the operation function with num1 and num2 and return the result. Test it with:
// A callback function that adds the two numbers.
// A callback function that multiplies the two numbers.
function calculate(num1,num2,operation){
  return operation(num1,num2)
}
function add(a,b){
  return a + b
}
function subtract(a,b){
  return a-b
}
function multiply(a,b){
  return a * b
}
function divide(a,b){
  return a / b
}
console.log(calculate(12,4,add))
console.log(calculate(12,4,subtract))
console.log(calculate(12,4,multiply))
console.log(calculate(12,4,divide))

// This function takes a multiplier and returns a new function that multiplies any number by the multiplier.


function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Test the function
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

// createMultiplier is a higher-order function because it returns another function.

// The returned function remembers the multiplier value due to closures.

// When you call double(5), it multiplies 5 by 2 (the multiplier passed to createMultiplier).

// This function returns a new function that increments and logs a counter variable each time it’s called.

function counter() {
  let count = 0; // This variable is "remembered" by the returned function
  return function () {
    count++;
    console.log(count);
  };
}

// Test the function
const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

// counter is a higher-order function that returns another function.

// The returned function closes over the count variable, meaning it retains access to count even after counter has finished executing.

// Each time you call increment(), the count variable is incremented and logged.

// factorial Function (Recursion)
// This function calculates the factorial of a number using recursion.

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040

function addCur(n){
  return function(b){
    return function(a){
      return n+b+a
    }
  }
}
console.log(addCur(23)(32)(54))