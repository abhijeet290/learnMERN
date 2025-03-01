// Arrays in js

const arr = [2, 54, 6, 34, 21, 6, true, "mohit"];
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr.at(4));

// at is latest it can take negative index also
// console.log(arr[-2]);
// console.log(arr.at(-2));

// const newArr=arr
// console.log(newArr===arr)

// we can use structure clone to create a clone of existing array with different reference
// const newArrClone=structuredClone(arr)
// console.log(newArrClone==arr)

// push: add element to end of array and return new length of array
// arr.push('rohan',false)
// console.log(arr)

// pop: remove element from end of array and return popped element from array

// console.log(arr.pop())
// console.log(arr)

// unshift: add element to start of an array and return new length
// console.log(arr.unshift('rohan'))
// console.log(arr)

// unshift: remove element from start of an array and return removed element
// console.log(arr.shift())
// console.log(arr)

// delete: delete remove an element at a given index, it will reserve the space vacant for the deleted element sp it's better to not use delete
// console.log(delete arr[2])
// console.log(arr)

// console.log(arr)
// indexOf: returns the index of first found element in array
// console.log(arr.indexOf(6))
// lastIndexOf: returns the index of last found element in array
// console.log(arr.lastIndexOf(6))

// includes: returns true if the element is present in the array else false
// console.log(arr.includes(6))

// slice: returns a slice of a array from start given index and end index in which end index is not includes, it returns a new array don't modifies original array

// console.log(arr)
// console.log(arr.slice(2,5))

// Splice() is a method in JavaScript that lets you add or remove elements from an array. It directly modifies the original array.

// array.splice(startIndex, deleteCount, newElement1, newElement2, ...); 

// console.log(arr.splice(0,5))
// const splicedarr = arr.splice(0, 4, "hello", "splice"); // stores only removed elements and add elements to the original array

// console.log(splicedarr)
// console.log(arr);

// Join Allows you to specify a separator (e.g., space, comma, hyphen, etc.).
// More flexible than .toString().

// console.log(arr.toString()) // convert array to comma separated string
// console.log(arr.join(' '))

// concat help us to build a new array by combining 2 or more array, it don't modify the original array.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = arr1.concat(arr2);
// arr1.push(arr2) // [ 1, 2, 3, [ 4, 5, 6 ] ]
// arr1.push(...arr2)
// console.log(arr1)
// console.log(result);

// 2D Array

let arr2d=[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]
console.log(arr2d[0][0])

console.log(arr2d.flat()) // it take a value upto which it can go to flat the array, if dimension of array is unknown we can write infinity to convert
let ar=[1,2,4,5,3]
let ar1=[...ar]
console.log(ar1)

// to check array
// console.log(Array.isArray(arr))

let ary=new Array(10,20,30) // if only 1 value is given it will take it as size of array, we will not use this method
console.log(ary.length)