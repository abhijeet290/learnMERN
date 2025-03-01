// Practice Questions
// Memory Management
// Explain the difference between stack and heap memory with examples.
// Write a program to demonstrate how variables (e.g., primitive and non-primitive types) are stored in stack and heap memory.
// How does JavaScript garbage collection work? Provide examples to explain when memory is released.
// Call by Value and Call by Reference
// Write a program to demonstrate call by value for primitive types like numbers or strings.
// Example:

// javascript
// Copy
// Edit
// let a = 10;  
// function modify(x) {  
//     x = x + 5;  
// }  
// modify(a);  
// console.log(a); // What is the output?
// Write a program to demonstrate call by reference for objects or arrays.
// Example:

// javascript
// Copy
// Edit
// let obj = { key: "value" };  
// function updateObject(o) {  
//     o.key = "newValue";  
// }  
// updateObject(obj);  
// console.log(obj); // What is the output?
// Explain what happens in the following scenario:

// javascript
// Copy
// Edit
// let arr = [1, 2, 3];  
// let anotherArr = arr;  
// anotherArr.push(4);  
// console.log(arr);  
// console.log(anotherArr);  
// Create an example where a function modifies an object but doesn’t affect the original object by using shallow copy.
// Hint: Use Object.assign() or spread operator ....

// Stack and Heap Memory
// Write a program to demonstrate how variables in the stack and objects in the heap behave.
// Example:

// javascript
// Copy
// Edit
// let a = 10; // Stored in stack  
// let b = { key: "value" }; // Stored in heap  
// b.newKey = "anotherValue";  
// console.log(b);  
// Write a function that creates a memory leak. How does it happen?
// Hint: Circular references or unclosed intervals.

// Challenging Practice
// Solve the following:

// javascript
// Copy
// Edit
// let x = { value: 10 };  
// let y = x;  
// y.value = 20;  
// console.log(x.value); // Output?  
// x = { value: 30 };  
// console.log(y.value); // Output?  
// Create a program that clones an object deeply (no reference issues) and demonstrates how changes in one do not affect the other. Use JSON.parse(JSON.stringify(obj)) or recursion for the solution.

// Bonus Tip
// Test and play with these concepts in DevTools Console. Watching the values change in real-time will strengthen your understanding of memory allocation and references. Let me know if you’d like example solutions! 😊