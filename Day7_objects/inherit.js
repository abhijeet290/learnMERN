let user1={
  name:"John",
  age:20,
}

let user2={
  amount:100,
  money:50
}
user2.__proto__=user1 // to change the prototype of user2 to inherit the property of user1
console.log(user2.amount, user2.money)
console.log(user2.name, user2.age)

const arr=[28,57,589,383,859]
console.log(arr.__proto__===Array.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(arr.__proto__.__proto__==Object.prototype)
console.log(arr.__proto__.__proto__.__proto__==null)
console.log(arr.__proto__.__proto__.__proto__==null)