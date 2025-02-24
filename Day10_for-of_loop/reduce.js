// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result=arr.reduce(cb, initialization)
// const result = arr.reduce((acc, curr) => acc + curr);
// console.log(result);
// const result = arr.reduce((acc, curr) => {
//   return acc + curr, 0;
// });
//  reduce
// const arr = [10,20,30,40,50];

// const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=> acc+curr, 0);

// console.log(result);

let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//  final result ek object ke form
// orange:3
// apple:2
// acc = {
// orange:2,
// apple:2,
// banana:1}

// const result = arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//       acc[curr]=1;

//     return acc;
// },{})


// const result = arr.reduce((acc,curr)=>{
    
//     acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;

//     return acc;
// },{})

// console.log(result);