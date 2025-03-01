// shallow copy when we create copy with reference in this making change to any object will change the both as both share the same address

// let obj1={
//   a:1,
//   b:2

// }
// let obj2=obj1
// console.log(obj1,obj2)
// obj2.a=10
// console.log(obj1,obj2)

// deep copy: creates the actual copy with defferent address, both point to different objects
// console.log(obj1)
// const obj3=structuredClone(obj1)
// console.log(obj3)
// obj3.a=3
// console.log(obj1,obj3)

// Nested Objects
// const user = {
//   name: "Tom",
//   balance: 300,
//   address: {
//     city: "delhi",
//     pincode: 110043,
//   },
// };
// console.log(user.address.pincode);

// const user2=Object.assign({},user)
// user2.address.pincode=112233
// user2.name='peter'
// console.log(user2,user)

// in object.assign() it will create shallow copy for nested objects and deep copy for parent object, and same happens with spread operator, so it's better to use structure clone for creating deep copy of objects

// Object destructuring

// const obj={
//   name:'tom',
//   age:20,
//   address:'delhi',
//   money:1000
// }

// const {name,age,address,money}=obj
// console.log(name,age,address,money)

// const {name:n,age:a,address:addr,money:m}=obj
// console.log(n,a,addr,m)

// const {name,age,...rest}=obj
// console.log(name,age,rest)

// Array Destructuring
// const arr=[34,23,12,56,78,90]
// const [first,second]=arr
// const[a,b,,c]=arr // to skip 1 value
// console.log(a,b,c)
// console.log(first,second)

// const [a1,b1,...c1]=arr
// console.log(a1,b1,c1)

// a nested object witw name age and address as nested object

// const user={
//   nam:'tom',
//   age:20,
//   arr:[20,45,26,7],
//   address:{
//     city:'delhi',
//     pincode:110043
//   }
// }

// const {nam,age,address:{city,pincode}}=user
// console.log(nam,age,city,pincode)
// const {arr:[a,b,c,d]}=user
// console.log(a,b,c,d)

// let user = {
//   name: "May",
//   balance: 1000,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
//   meet: function () {
//     return "meeting at 9am";
//   },
  // greet: (obj) => {  as arrow function doesnot have their own this keyword
  //   console.log(`Hello ${obj.name}`);
  // }
// };
// user.greet();
// console.log(user.meet())

// const arr=[34,23,12,56,78,90]
// console.log(arr.__proto__)

// const arr=[1,2,3]

// arr.__proto__

// const arr2=new Array(10,20,30,40,50)

// arr2.push(34)

// (6) [10, 20, 30, 40, 50, 34]
// let obj={a:1,b:2}

// const ar=[32,41,67,87,56]

// ar.__proto__