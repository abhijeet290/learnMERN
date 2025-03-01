let a = 5;
let b = a;
b = 3;
console.log(a, b);

// Primitive data type VS Non Primitive data type

// Primitive data type: Immutable
// Non Primitive data type: Mutable

// Object
let obj1 = { name: "Eddie", age: 24 };

let obj2=obj1
console.log(obj1)
console.log(obj2)
obj2.age=29

console.log(obj1)
console.log(obj2)

let num=10
console.log(num)
// const num1=30
// num1=28
// console.log(num1)

// const obj={name:'herry', age:50}
// console.log(obj)
// obj.name='tom'
// console.log(obj)

// const obj21={name:'mary', age:30}
// obj=obj21
// console.log(obj)

let obj={name:'herry', age:50}
console.log(obj)
obj.name='tom'
console.log(obj)

const obj21={name:'mary', age:30}
obj=obj21
console.log(obj)