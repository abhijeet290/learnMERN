// Map: key value pair: key should be unique, also stores tand remember the order of insertion

// const map1=new Map();
// map1.set('key1', 'value1');
// map1.set(3,'value2')
// map1.set(2,34)
// console.log(map1)

// console.log(map1.has(2))
// console.log(map1.has(3))
// console.log(map1.has('key1'))

// console.log(map1.size)
// map1.clear()
// console.log(map1)

const map1= new Map([
  [1,34],
  [2,'rohan'],
  ['key3','value3']
])
// console.log(map1)

// for-of loop
for (let val of  map1){
  console.log(val)
}
for (let [key,val] of  map1){
  console.log(key,val)
}