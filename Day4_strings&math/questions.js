// Questions from chatGPT

// String Questions
// Basic
// Write a program to:
// Find the length of a string.

function findLen(str) {
  return str.length;
}
console.log(findLen("Hello world!"));
// Convert a string to uppercase and lowercase.
let str = "dummy String";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// Extract the first and last character of a string using string methods.
console.log(str[0]);
console.log(str[str.length - 1]);
// Write a program to check if a given substring exists in a string using includes() and indexOf().
let str1 = "Hello from javascript";
console.log(str1.includes("from"));
console.log(str1.indexOf("from"));
// Reverse a string without using built-in functions.
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // reversed =reversed+ str[i];
    reversed += str[i];
  }
  return reversed;
}
console.log(reverse("Hello"));
// Count the number of vowels in a given string.
function vowelsCount(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(vowelsCount("Hello"));
// Intermediate
// Write a program to split a string into an array of words and join it back into a single string.
// Replace all occurrences of a substring in a string (e.g., replace all "a" with "x").
// Find whether a string starts or ends with a specific substring using startsWith() and endsWith().
// Remove all leading and trailing spaces from a string using trim().
// Write a program to extract a substring between two specific characters (e.g., get the text between [ and ] in "Hello [world]!").


// Advanced
// Check if a string is a palindrome (reads the same forward and backward).
// Write a program to sort the characters in a string alphabetically.
// Count the occurrences of each character in a string.
// Write a program to capitalize the first letter of every word in a sentence.
// Encode a string using the Caesar cipher (shift each letter by 3 places in the alphabet).


// Math Object Questions
// Basic
// Write a program to:
// Find the square root of a number.
// Round a number to the nearest integer using Math.round().
// Round a number up and down using Math.ceil() and Math.floor().
// Generate a random number between 0 and 1 using Math.random().
// Write a program to calculate the power of a number using Math.pow().
// Intermediate
// Generate a random integer between 1 and 100.
// Find the maximum and minimum numbers in an array using Math.max() and Math.min().
// Write a program to calculate the absolute difference between two numbers using Math.abs().
// Calculate the area of a circle given its radius using Math.PI.
// Advanced
// Write a program to simulate a dice roll (random number between 1 and 6).
// Generate a random hexadecimal color code.
// Calculate compound interest using the formula:
// 𝐴
// =
// 𝑃
// (
// 1
// +
// 𝑟
// 𝑛
// )
// 𝑛
// ⋅
// 𝑡
// A=P(1+ 
// n
// r
// ​
//  ) 
// n⋅t
 
// where:
// 𝑃
// P = principal amount
// 𝑟
// r = annual interest rate
// 𝑛
// n = number of times interest is compounded per year
// 𝑡
// t = time in years.
// Write a program to round a number to 2 decimal places.
// Simulate a coin toss and return "Heads" or "Tails" randomly.
