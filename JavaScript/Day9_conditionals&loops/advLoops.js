// const obj = {
//   name: "Sachin",
//   age: 29,
//   gender: "Male",
//   city: "delhi",
// };
// for-in loop to iterate over object
// for (let key in obj){
//   console.log(key+',',obj[key]);
// }

//
// console.log(Object.keys(obj))

// let obj2 = Object.create(obj);
// obj2.money = 234;
// obj2.id = 12;
// console.log(Object.keys(obj2)); // print only ite own keys, don't print inherited properties
// for (let key in obj2) {
//   console.log(key); // print its own as well as inherited properties or keys
// }

// Understanding Writable Enumerable and Confiigurable properties

// let obj={}
// obj.name='Ramburst'
// obj.age=20
// key value Writable Enumerable and Confiigurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// writable: false , can I change the value
// obj.neme='something'

// configurable=true it means we can change the value of writable and enumerable
// let obj={}
// Object.defineProperty(obj, 'name',{
//   value:'soham',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// Object.defineProperty(obj,'name',{
//   writable: false,
// })
// obj.name='rohi'
// console.log(obj)

// const obj1 = {
//     name:"rohit",
//     age:23,
//     account_number:30001
// };

// Object.defineProperty(obj1, 'account_number',{
//     writable:false
// })



// obj1.account_number = 20001;
// console.log(obj1.account_number);

Object.protoype
const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

let customer2 = Object.create(customer);
customer2.city = "Haridwar";
customer2.place = "Delhi";

Object.defineProperty(customer, "name", {
    enumerable:false,
})

// enumerable: jis bhi key ka enumerable true hga, un sabka acces hga ya print hga
//  Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh wo bhio print hga



// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);

// for in loop : Isko array ke sath nahi lete bcoz it can take string as keys which is wrong practice
//  by default enumerable is true for every property and for in loop can access all the elemrnt whose enumerable property is true
//  arr is an object
// 0: 10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:"rohit",
// age:20,

const arr = [10,20,40,12,30];
arr.name = "Rohit";
arr.age = 20;
// for(let index=0; index<arr.length;index++)
//     console.log(index , arr[index]);
for(let key in arr){
    console.log(key);
}


//  defineProperty
// defineProperties


