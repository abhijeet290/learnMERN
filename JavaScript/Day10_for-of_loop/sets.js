// Sets in javascript
// let arr=[1,2,3,3,2,4]
// Set : stores only unique values
// const set1=new Set(arr)
// console.log(set1, typeof set1)

// const set2=new Set()
// set2.add(45)
// set2.add(35)
// set2.add(95)
// set2.add('Arjun')

// console.log(set2.size)
// delete
// set2.delete(45)
// console.log(set2)

// const user_id = new Set([
//   "codeMaster99",
//   "devNinja_07",
//   "reactProX",
//   "JS_Genius",
//   "nodeWizard",
//   "bugHunter23",
//   "frontendKing",
//   "backendBoss",
//   "MERN_stackDev",
//   "fullstackHero",
// ]);
// let new_user='backendBoss'
// console.log(user_id.has(new_user))
// console.log(user_id.clear())
// console.log(user_id)

// to get all the operation that we perform on set comes from Set.prototype
// removing duplicates from array using set
// let arr=[1,2,3,4,5,3,2,4,2]
// let set=new Set(arr)
// console.log(set)
// arr=[...set]
// console.log(arr)

// Union using Sets
let set1 = new Set([1, 2, 3, 75, 76, 234, 54, 56, 13, 4, 5, 6, 7]);
let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 54, 3]);
// let set3=new Set([...set1,...set2])
// console.log(set3)

// Intersection
// filter: array
// const Intersection=[...set1].filter(num=>set2.has(num))
// console.log(new Set(Intersection)) // to return value in set

// Iterate over set
// Using for-of loop
// for(let val of set1){
//   console.log(val)
// }
// using forEach loop

set2.forEach((val) => console.log(val));
