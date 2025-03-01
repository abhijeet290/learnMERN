// Practice Questions
// 1. Basic Array Operations
// Create an array of your favorite fruits and log the length of the array.

let fruitArray = [
  "Banana",
  "Apple",
  "Orange",
  "Grapes",
  "Blackberry",
  "Banana",
];
console.log(fruitArray);
// console.log(fruitArray.length)

// Access and log the third element of the array.

// console.log(fruitArray[2])
// console.log(fruitArray.at(2))

// Use the at() method to access the last element of the array.

// console.log(fruitArray.at(fruitArray.length-1))
// console.log(fruitArray.at(-1))

// Add a new fruit to the end of the array using push() and log the updated array.

// fruitArray.push('Guava')
// console.log(fruitArray)

// Remove the last fruit from the array using pop() and log the updated array.

// fruitArray.pop()
// console.log(fruitArray)

// 2. Adding and Removing Elements
// Add a new fruit to the beginning of the array using unshift() and log the updated array.
// fruitArray.unshift('Guava')
// console.log(fruitArray)

// Remove the first fruit from the array using shift() and log the updated array.

// fruitArray.shift()
// console.log(fruitArray)

// Use splice() to remove the second fruit from the array and log the updated array.
// console.log(fruitArray)
// fruitArray.splice(1,1)
// console.log(fruitArray)

// Use splice() to replace the third fruit with a new fruit and log the updated array.
// fruitArray.splice(2,1,'Kiwi')
// console.log(fruitArray)
// Use splice() to add two new fruits at index 2 without removing any elements.
// fruitArray.splice(2,0,'berry','mango')
// console.log(fruitArray)
// 3. Searching and Checking Elements
// Use indexOf() to find the index of a specific fruit in the array.
// console.log(fruitArray.indexOf('Orange'))
// Use lastIndexOf() to find the last occurrence of a specific fruit in the array.

// console.log(fruitArray.lastIndexOf('Orange'))

// Use includes() to check if a specific fruit exists in the array.

// console.log(fruitArray.includes('Orange'))

// Use slice() to create a new array containing the second and third fruits.

// const sliceArr=fruitArray.slice(1,3)
// console.log(sliceArr)

// Use slice() to create a new array containing all fruits except the first and last.

// const slicear=fruitArray.slice(1,-1)
// console.log(slicear)

// 4. Combining and Converting Arrays
// Create two arrays of numbers and use concat() to combine them into a new array.
const numarr1 = [1, 2, 3];
const numarr2 = [4, 5, 6];
// const  newarr=numarr1.concat(numarr2)
// console.log(newarr)

// Use join() to convert an array of fruits into a string separated by commas.
// let str=fruitArray.join(',')
// console.log(str)
// Use toString() to convert an array of fruits into a string and compare it with the result of join().

// let str1=fruitArray.toString()
// console.log(str1)
// console.log(str==str1)

// Use the spread operator (...) to create a copy of an array and modify the copy without affecting the original.
// let cparr=[...numarr1,5,34,2]
// console.log(cparr)

// Use flat() to flatten a 2D array into a single-dimensional array.

// let arr2d=[
//   [1,2,3,4,5],
//   [6,7,8,9,10],]
// console.log(arr2d.flat())

// 5. Advanced Array Manipulation
// Write a function to remove all occurrences of a specific fruit from an array.

// Write a function to find the index of the second occurrence of a specific fruit in an array.
// function removeFruits(arr,fruit){
//   return arr.filter(item=>item!==fruit)
// }
// console.log(removeFruits(fruitArray,'Banana'))

// Write a function to reverse the order of elements in an array without using the reverse() method.
// function reverseArr(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArr(fruitArray));

// Write a function to check if an array is a palindrome (reads the same forwards and backwards).

// function isPalindrome(arr) {
//   // Compare the original array with its reversed version
//   const reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   // Check if the reversed array has the same elements as the original
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== reversed[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// Write a function to remove duplicates from an array.

// function removeDuplicates(arr){
//   let arr1=[]
//   for (let i = 0; i < arr.length; i++) {
//     if(!arr1.includes(arr[i])){
//       arr1.push(arr[i]);
//     }
    
//   }
//   return arr1;
// }

// console.log(removeDuplicates(fruitArray))
// 6. Miscellaneous
// Use Array.isArray() to check if a given variable is an array.
console.log(Array.isArray(fruitArray))
// Create an array using the Array() constructor and log its length.
const newArr=new Array(10,20,30,40,50)
console.log(newArr.length)
// Write a function to shuffle the elements of an array randomly.

// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
//     const randomIndex = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and randomIndex
//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//   }
//   return arr;
// }

// Example usage
// const array = [1, 2, 3, 4, 5];
// console.log(shuffleArray(array));

// Write a function to sort an array of numbers in ascending order.

// function sortNumbersAscending(arr) {
//   return arr.sort((a, b) => a - b);
// }

// Example usage
// const numbers = [5, 2, 9, 1, 5, 6];
// console.log(sortNumbersAscending(numbers));

// Write a function to sort an array of strings in alphabetical order.

// function sortStringsAlphabetically(arr) {
//   return arr.sort((a, b) => a.localeCompare(b));
// }

// Example usage
// const strings = ["banana", "apple", "cherry", "date"];
// console.log(sortStringsAlphabetically(strings)); // Output: ["apple", "banana", "cherry", "date"]


// Tips for Practice:
// Test your code with different inputs to ensure it works as expected.

// Use console.log() to debug and understand how your code is working.

// Try to optimize your solutions for better performance.

// Experiment with different methods and combinations to deepen your understanding.

