// Number, String, Boolean,Null, Undefined, BigInt, Symbol

// Non Primitive data type: Array, Object, Functions, Date, RegExp

// let n1 = 10;
// let n2 = 20;
// let n3 = 24;

// let arr = [10, 20, 24, "string", "boolean"];
// console.log(`${arr} , ${typeof arr}`);
// console.log(arr, typeof arr);

// /Object: key:value pair

// let obj = {
//   username: "Natasha",
//   account_number: 7568463756,
//   balance: 10958,
// };

// console.log(obj)

// function

// let func=function(nam='natasha'){
//   console.log('Hello '+nam)
//   return 10
// }
// func('Natley Rashmin')
// console.log(typeof func)
// console.log(func())

// Type conversion

// let balance='100000'
// let numBal=Number(balance)
// console.log(numBal,typeof numBal)

// Boolean to number conversion
// let x=true
// let y=false
// console.log(Number(x))
// console.log(Number(y))

// let account='100xdev'
// console.log(Number(account))
// console.log(isNaN(Number(account)))

// null
// let x1=null
// console.log(Number(x1)) // 0

// undefined
// let x2=undefined
// console.log(Number(x2)) // NaN

// Number to string
// let ab=290
// console.log(String(ab))

// let bool=true
// console.log(String(bool), typeof bool)
// let bool2=false
// let convertedbool=String(bool2)
// console.log(convertedbool,typeof convertedbool)

// Boolean

// console.log(Boolean(''))
// console.log(Boolean(' '))
// console.log(Boolean(234))
// console.log(Boolean('    '.trim()))
// console.log(Boolean('string'))

// operators 

// Arithmetic operators

let result = (10 + 5) * 2 - 8 / 4 + 3 ** 2; // Example of a big arithmetic expression       15*2-8/4+9 => 30-2+9
console.log(result); // Output: 38.0

// divide and multiply have same precedence and calculated left to right
// addition and subtraction have same precedence and calculated left to right

// Modulous operator gives the remainder
console.log(20%3)

// ++ increment operator, -- decrement operator

let value=500
// value++
// console.log(value)
// value--
// console.log(value)
// ++value
// console.log(value)
// --value
// console.log(value)

// value++ post increment, value-- post decrement
console.log(value++)
console.log(value--)
// ++value pre increment, --value pre decrement
console.log(--value)
console.log(++value)

// Assignment
let x = 5; 

// Addition assignment
x += 3; // Equivalent to x = x + 3; x will be 8

// Subtraction assignment
x -= 2; // Equivalent to x = x - 2; x will be 6

// Multiplication assignment
x *= 4; // Equivalent to x = x * 4; x will be 24

// Division assignment
x /= 3; // Equivalent to x = x / 3; x will be 8

// Modulus assignment
x %= 5; // Equivalent to x = x % 5; x will be 3

// Exponentiation assignment
x **= 2; // Equivalent to x = x ** 2; x will be 9
