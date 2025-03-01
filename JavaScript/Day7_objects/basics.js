// creating an objects

// const obj = {
//   name: "Steve",
//   balance: 48756,
//   gender: "Male",
//   age: 45,
//   undefined:50,
//   null:'Rogers'
// };

// key is stored as string in backend
// can't use space in key, in that case we have to store it as string
// if we use number as key, in that case too it will be stored as string
// const insta = {
//   id: "devil_23",
//   password: "***********",
// };
// console.log(insta.id, " ", insta.password);
// console.log(obj);

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.gender);
// console.log(obj.balance);

// in square breckets we have to pass key as string
// console.log(obj["name"]);

// in arrays in js length of array is stored as a key
// let arr = {
//   0: 34,
//   1: 23,
//   2: 45,
//   3: 46,
//   length: 4,
// };

// in this case null and undefined are also stored as string, so we can access it
// console.log(obj.undefined)
// console.log(obj['undefined'])
// console.log(obj.null)
// console.log(obj['null'])

// using new Object (using constructor)
// const person=new Object()

// adding property
// person.name='tony'
// person.age='45'
// person.gender='male'
// console.log(person.name)

// deleting
// delete person.age
// console.log(person)
// modify / update

// person.name='starc'
// console.log(person)

// third method using class
// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// let per1 = new Person("Rohit", 20, "Male");
// console.log(Person.name)
// console.log(per1)

// common methods for objects

// const obj = {
//     name: "Steve",
//     balance: 48756,
//     gender: "Male",
//     age: 45
//   };

// to get all the keys of an object
// const arr = Object.keys(obj) // returns keys in an array
// console.log(arr)
// to get all the values of an object
// const val = Object.values(obj) // returns keys in an array
// console.log(val)

// to get key and value both
// const entries=Object.entries(obj) //return key value pair in a 2d-array
// console.log(entries)

// assign use case !Important

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj4 = { e: 3, f: 4 };

// const obj3=obj1+obj2 //don't do this
// console.log(obj3)

const obj3 = Object.assign({}, obj1, obj2,obj4); // first is target object in which we will ass all the given objects
console.log(obj1, obj3);

// using spread operator

const obj5={...obj1, ...obj2, ...obj4}
console.log(obj5)