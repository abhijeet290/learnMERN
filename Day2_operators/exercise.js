// Write a program to declare variables of different data types (string, number, boolean, undefined, null, object, and symbol) and log their types using typeof.

// const symbol=Symbol('Hello')
// const arr=["string",123,true,undefined,null,{name:'Tom'},symbol]
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i],typeof(arr[i]))
// }

// Create a variable with undefined and assign it a value later. Log both before and after assignment.

// let a;
// console.log(a);
// a = 10;
// console.log(a);

// Write a program to demonstrate the difference between null and undefined.

// let a1
// console.log(a1)

// let b=null
// console.log(b)

// Operators

// Write a program to perform basic arithmetic operations (addition, subtraction, multiplication, division, modulus) using two numbers.

// let a=22
// let b=5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// Create a program that uses assignment operators (=, +=, -=, etc.) to update a variable’s value.

// let num=10
// console.log(num)
// num+=5
// console.log(num)
// num-=3
// console.log(num)

// Use comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two values and log the results.

// let num=29
// let num2=30
// console.log(num==num2)
// console.log(num===num2)
// console.log(num!=num2)
// console.log(num!==num2)
// console.log(num>num2)
// console.log(num<num2)
// console.log(num>=num2)
// console.log(num<=num2)

// Demonstrate the use of logical operators (&&, ||, !) in decision-making with simple conditions.

// let a=true
// let b=true
// let c=false
// if(a&&b){console.log('both are true')}
// if(a||b){console.log('one is true')}
// console.log(!a)

// Type Conversion
// Write a program to convert the following types explicitly:
// Number to String (String() or .toString())

// let num=231267
// console.log(num.toString())
// console.log(String(num))

// String to Number (Number(), parseInt(), parseFloat())

// let str='6587'
// console.log(Number(str))
// console.log(parseInt(str))
// console.log(parseFloat(str))

// Boolean to String and vice versa.

// let a=true
// console.log(String(a))
// console.log(Boolean('str'))


// Create a program to check the type of the following values:
// console.log(typeof NaN)
// console.log(typeof Infinity)
// console.log(typeof "123") //(string representation of a number)
// console.log(typeof null)

// Explain implicit type coercion with examples like:

// console.log("5" - 2);
// console.log("5" + 2);
// console.log(true + 1);

// Write a program to check if a variable is NaN using isNaN().

// let num='123yu'
// console.log(isNaN(num))

// Bonus Practice
// Write a program to demonstrate the precedence of operators. Use parentheses to change precedence and compare the results.
// Create a program that takes user input (use prompt) and converts it to different types before performing operations (e.g., addition or multiplication).

// Write a program to check if a value is falsy or truthy and log the result.

// function checkTruthyFalsy(value) {
//   if (value) {
//     console.log(`The value "${value}" is truthy.`);
//   } else {
//     console.log(`The value "${value}" is falsy.`);
//   }
// }