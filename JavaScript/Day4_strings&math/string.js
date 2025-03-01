// // Strings in Javascript

// let str1='Hello from string'
// let str2='Hi I am string 2 within single quote'
// let str3=` I am template string`

// console.log(str1)
// console.log(str2)
// console.log(str3)

// let price=499
// console.log(`the price of the product is ${price}`)

// // string concatenation
// console.log(str1+str3)

// let message='Javascript is the best language.\n it is the language for the web'
// console.log(message)

// let message2='Javascript is the best language.\\n it is the language for the web'
// console.log(message2)

let nam='Arjun'
console.log(nam[4])
console.log(nam.charAt(4))

// toLowerCase() these str methods don't changes the original string
console.log(name1.toLowerCase())

//toUpperCase()
console.log(name1.toUpperCase())
console.log(name1)

let newStr='Hello from my side, this is my first string'

console.log(newStr.indexOf('my'))
console.log(newStr.lastIndexOf('my'))
console.log(newStr.indexOf('Side')) // returns -1 case sensitive
console.log(newStr.includes('side'))

let newString='Avengers:Endgame'
console.log(newString.slice(0,5))
console.log(newString.slice(-16,16))
// slice can take -ve index also
console.log(newString.substring(0,5))
// can't use -ve index with substring
console.log(newString.substr(3,5))

let str3='Hello how are are are you'
console.log(str3.replace('how','are'))
console.log(str3.replaceAll('are','is'))
console.log(str3)

// converting string to array using split()
let str4='Hello,Hii,namaste,sayonaraa'
console.log(str4.split(','))
let money='     Paisa hai to bari bari bari bari baate    '

console.log(money.trim()) // trim() removes the whitespaces from start and end only

// new way to create string

let latestStr=new String('Hello from new method')
console.log(latestStr)
console.log(typeof latestStr) // object created from String() class