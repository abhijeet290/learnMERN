// 1. For-of Loop
// Iterate over an array of numbers and print each number.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of arr) {
  console.log(item);
}
// Iterate over a string and print each character.
let str = "Hello, world!";
for (let char of str) {
  console.log(char);
}
// Create an array of objects representing students and print each student's name using for-of.
let students = [
  { name: "prakriti", age: 20, roll_no: 28 },
  { name: "prajakta", age: 19, roll_no: 48 },
  { name: "kriti", age: 21, roll_no: 68 },
];
for (let student of students) {
  console.log(student["name"]);
}
// Try using for-of on an object and observe the error. Fix it using Object.keys().
let obj = {
  name: "shanaya",
  age: 24,
  relationship_status: false,
};
// for(let key of obj){
//   console.log(obj[key])
// }

for (let key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}
// 2. Callback Functions
// Write a function that takes another function as an argument and calls it inside.
function cb(){
console.log('Hello I am callback function')
}
function hof(callback) {
  callback()
}
hof(cb)
// Create a function operation that takes two numbers and a callback function (addition, multiplication, etc.). Call operation with different callbacks.
// 3. setInterval & setTimeout
// Use setTimeout to log "Hello" after 3 seconds.
// Use setInterval to print numbers from 1 to 5, then stop it.
// 4. forEach Loop
// Use forEach to print each element of an array.
// Modify each element of an array using forEach.
// Use a named function with forEach.
// 5. filter Method
// Given an array of numbers, use filter to find numbers greater than 50.
// From an array of student objects, filter out students who scored above 80.
// Filter all even numbers from an array.
// 6. map Method
// Given an array of numbers, use map to return an array of their squares.
// Use map to create an array of names from an array of student objects.
// Chain filter and map to get squares of even numbers.
// 7. Combination of Methods (map, filter, forEach)
// Given an array of numbers, filter out even numbers and then multiply them by 3 using map.
// Create an array of student names who scored more than 85 using filter and map.
// Use forEach to print the final array of modified numbers.
