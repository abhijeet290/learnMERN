// For-of loop
// const arr = [23, 54, 65, 67, 34, 89];
// for (let val of arr) {
//   console.log(val);
// }

// let str='For-of loop'
// for(let char of str) console.log(char)

// dont use for of loop with object as objects are not iterable

// const obj={
//   name:'karna',
//   age:50,
//   city:'Aang',
//   gender:'Male'
// }
// for (let key of obj) { // this will return an error as object are not iterable
//   console.log(key)
// }
// console.log(obj.length)

// for(let key of Object.keys(obj)) {
//   console.log(key,obj[key]);
// }

// callback function
// function name(fun) {
//   console.log("Hello from name");
//   fun();
// }
// function greet() {
//   console.log("Hello from callback");
// }
// name(greet);

// setInterval(greet,2000)
// forEach loop
// const arr = [23, 54, 65, 67, 34, 89];
// arr.forEach(function(num){
//   console.log(num)
// })
// arr.forEach((num, index, arr) => (arr[index] = num * 2));
// single argument: number
// second index
// third array
// function greet(n){
//   console.log(n)
// }
// arr.forEach(greet)
// console.log(arr)

// filter
// const greaterthan50 = arr.filter((n) => {
//   return n > 50;
// });
// console.log(greaterthan50);

// const students = [
//   { name: "Amit", age: 20, marks: 85 },
//   { name: "Priya", age: 22, marks: 92 },
//   { name: "Rahul", age: 19, marks: 76 },
//   { name: "Sneha", age: 21, marks: 88 },
//   { name: "Vikram", age: 23, marks: 65 },
//   { name: "Anjali", age: 20, marks: 95 },
//   { name: "Rohan", age: 22, marks: 55 }
// ];

// const passedStudents=students.filter((obj)=>obj.marks>80)

// console.log(passedStudents)

// map
// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// const res=arr.map(n=>n*n)
// console.log(res)

// const even=arr.filter(n=>n%2==0).map(a=>a**2)
// console.log(even)
// const odd=arr.map(n=>n**3).filter(n=>n%2!==0)
// console.log(odd)