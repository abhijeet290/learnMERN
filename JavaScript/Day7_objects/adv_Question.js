// 1. Shallow vs. Deep Copy
// Create an object called original with the following structure:

const original = {
  a: 1,
  b: 2,
  nested: {
    c: 3,
    d: 4
  }
};
// Create a shallow copy of original using Object.assign() and modify the nested.c property in the copy. Observe the changes in both objects.
// const copy=Object.assign({}, original)
// copy.a=23
// copy.nested.c=45
// console.log(original,copy)
// Create a deep copy of original using structuredClone() and modify the nested.c property in the copy. Observe the changes in both objects.

// const copied=structuredClone(original)
// copied.nested.c=23
// console.log(original,copied)

// 2. Object Destructuring
// Given the following object:

const user = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    pincode: 10001
  },
  hobbies: ["reading", "coding", "traveling"]
};
// Use object destructuring to extract name, age, city, and pincode into variables.
const {name,age,address:{city,pincode}} =user
// Use array destructuring to extract the first two hobbies into variables.
const {hobbies:[a,b]}=user
// Log the extracted values to the console.

console.log(name,age,city,pincode)
console.log(a,b)