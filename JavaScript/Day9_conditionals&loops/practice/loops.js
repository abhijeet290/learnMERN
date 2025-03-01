// 🔹 Loops (for, while, do-while)
// Print Numbers: Write a loop that prints numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) console.log(i);
// Print Even Numbers: Print even numbers between 1 and 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}
// Sum of First N Numbers: Take an input N and return the sum of the first N natural numbers.
function sumOfFirstN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfFirstN(10));
// Factorial of a Number: Compute the factorial of a number using a loop.
const factorial = (n) => {
  let fact = 1;
  if (n == 0) return 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};
// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(0));
// Multiplication Table: Take a number and print its multiplication table.
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    // console.log(`${n}x${i}=${n * i}`);
  }
}
multiplicationTable(5);
// Reverse Counting: Print numbers from 10 to 1 using a loop.
// for (let i = 10; i >= 1; i--) console.log(i);
// Check Prime Number: Write a function to check if a number is prime.
function isPrime(num) {
  if (num === 0) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// console.log(isPrime(10));
// console.log(isPrime(0));
// console.log(isPrime(2));
// console.log(isPrime(17));
// console.log(isPrime(29));
// Fibonacci Series: Print the first N terms of the Fibonacci sequence.

// Armstrong Number: Check if a number is an Armstrong number (e.g., 153 → 1³ + 5³ + 3³ = 153).
function isArmstrong(num) {
  let strNum = num.toString();
  let sumOfSq = 0;
  for (let i = 0; i < strNum.length; i++) {
    sumOfSq += Math.pow(strNum[i], 3);
  }
  return num === Number(sumOfSq);
}
// console.log(isArmstrong(153))
// console.log(isArmstrong(1634))

function isArmstrong(num) {
  let strNum = num.toString();
  let sumOfPowers = 0;
  let numDigits = strNum.length; // Get the total number of digits

  for (let i = 0; i < numDigits; i++) {
    sumOfPowers += Math.pow(Number(strNum[i]), numDigits); // Raise to correct power
  }

  return num === sumOfPowers;
}

// console.log(isArmstrong(153));   // true
// console.log(isArmstrong(9474));  // true
// console.log(isArmstrong(9475));  // false
// console.log(isArmstrong(947));   // false
// console.log(isArmstrong(8208));  // true

// Number Guessing Game: Generate a random number and let the user guess until they get it right.
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function numberGuessingGame() {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;

//   console.log("Welcome to the Number Guessing Game!");
//   console.log("Guess a number between 1 and 100.");

//   function askGuess() {
//     rl.question("Enter your guess: ", (input) => {
//       const guess = parseInt(input, 10);

//       if (isNaN(guess)) {
//         console.log("❌ Please enter a valid number.");
//         askGuess();
//       } else if (guess < randomNumber) {
//         console.log("🔼 Too low! Try again.");
//         askGuess();
//       } else if (guess > randomNumber) {
//         console.log("🔽 Too high! Try again.");
//         askGuess();
//       } else {
//         console.log(
//           `🎉 Congrats! You guessed it right. The number was ${randomNumber}.`
//         );
//         rl.close();
//       }
//     });
//   }

//   askGuess();
// }

// numberGuessingGame();

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (answer) => {
//   console.log(`Hello, ${answer}!`);
//   rl.close(); // Close the readline interface when done
// });

// 🔹 Advanced Loops (for-of, for-in)
// Iterate Over an Array: Use for-of to print each element of an array.
const arr = [32, 65, 78, 90, 31, 54, 67];
for (let item of arr) {
  console.log(item);
}
// Sum of Array Elements: Write a function that takes an array and returns the sum of all elements.
// let sum=0
// for(let i of arr){
//   sum+=i
// }
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Find the Maximum in an Array: Given an array of numbers, return the maximum value.

// Find the Maximum in an Array: Given an array of numbers, return the maximum value.

// this is wrong approach
// let max=arr[0]
// for (const item of arr) {
//   if(arr[item]>max) max=arr[item]
// }
// console.log(max)

let max = arr[0];
for (const item of arr) {
  if (item > max) max = item;
}
console.log(max);
// Iterate Over an Object: Use for-in to print all keys and values in an object.
const obj = {
  name: "harshit",
  age: 30,
  city: "delhi",
};
for (let keys in obj) {
  console.log(`${keys}:${obj[keys]}`);
}
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key}:${value}`);
// });

// Object.entries(obj).forEach(([key,value])=>console.log(`${key}:${value}`))
// console.log(val)

// Count Characters in a String: Given a string, count the occurrences of each character using for-in.
function countCharacter(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let key in charCount) {
    console.log(`${key}: ${charCount[key]}`);
  }
}
// countCharacter('Hello From For-in Loop')
function countCharacters(str) {
  let charCount = {}; // Object to store character counts

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1; // Increment count
  }

  for (let key in charCount) {
    console.log(`${key}: ${charCount[key]}`);
  }
}

// Example
// countCharacters("hello");
// Find Duplicate Elements in an Array: Write a function that finds duplicate values in an array.
function findDuplicates(arr) {
  let count = {};
  let duplicates = [];

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1; // Count occurrences
  }

  for (let key in count) {
    if (count[key] > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

// Example
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1])); 

// 🏆 2. Small Projects to Apply Concepts
// 💡 Do these projects to apply conditionals and loops in real-world scenarios.
const secretNumber = Math.floor(Math.random() * 10) + 1; // Random number 1-10
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  attempts++;

  if (guess === secretNumber) {
    alert(`🎉 Correct! You guessed it in ${attempts} attempts.`);
    break;
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Too low! Try again.");
  }
}

let tasks = [];
let choice;

while (choice !== "4") {
  choice = prompt(
    "1. Add Task 📝\n2. View Tasks 📋\n3. Remove Task ❌\n4. Exit 🚪"
  );

  switch (choice) {
    case "1":
      let task = prompt("Enter a new task:");
      tasks.push(task);
      alert("✅ Task Added!");
      break;
    case "2":
      alert(tasks.length ? tasks.join("\n") : "No tasks available.");
      break;
    case "3":
      let index = prompt("Enter task number to remove:");
      if (index > 0 && index <= tasks.length) {
        tasks.splice(index - 1, 1);
        alert("❌ Task Removed!");
      } else {
        alert("Invalid task number!");
      }
      break;
    case "4":
      alert("Goodbye! 👋");
      break;
    default:
      alert("Invalid choice! Try again.");
  }
}
