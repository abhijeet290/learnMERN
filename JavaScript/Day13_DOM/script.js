// console.log("Hello from dom in javascript");
// to log entire document in console (console.dir(document))
// document.getElementById('first').innerHTML='Hello from dom'

// const obj = document.getElementById("first");
// console.log(obj);
// obj.className='header'
// const obj2=document.getElementsByClassName('header')
// console.log(obj2)

// const headers = document.getElementsByClassName("header2");
// headers[0].style.border = "2px solid red"; // Add a red border
// const listItems = document.getElementsByClassName("header2")[0].getElementsByTagName("li");
// console.log(listItems); // Logs an HTMLCollection of <li> elements
// for (let i = 0; i < listItems.length; i++) {
//   console.log(`Item ${i + 1}: ${listItems[i].textContent}`);
// }
const id = document.querySelector("#first");
id.innerHTML = "hello from QuerySelector";

const cl = document.querySelector(".header2");
// console.log(cl);

const qsall = document.querySelectorAll(".header1"); //returns a nodelist containing all the elements
// console.log(qsall);
// console.log(qsall[0]);
// console.log(qsall[1]);

// for (let i = 0; i < qsall.length; i++) {
//   if (i == 0) { // dom elements are not number so qsall[i] always return false
//     qsall[i].style.color = "blue";
//   } else if (i == 1) {
//     qsall[i].style.color = "pink";
//   }
// }

// we can also use for-of loop

// for(let i of qsall){ // this will not work solution is below
//   if (i == 0) {
//     qsall[i].style.backgroundColor = "violet"
//   }if (i == 1) {
//     qsall[i].style.backgroundColor = "purple"
//   }
// }
// let index = 0;  // Keep track of the index manually

// for (let i of qsall) {
//   if (index === 0) {
//     i.style.backgroundColor = "violet";
//   } else if (index === 1) {
//     i.style.backgroundColor = "purple";
//   }
//   index++;  // Increment index for next iteration
// }

qsall.forEach((e) => {
  // e.innerHTML='I am forEach'
  // console.log(e.textContent)
});

//document.querySelector(".header1").style.color = "cyan"; // return first matching element

// to convert html collection or nodelist into an array

// Array.from(nodelist or htmlCollection)
const arr = Array.from(qsall);
// arr.push('hii')
// console.log(arr);
// const sp=[...qsall]
// console.log(sp[0])
// console.log(sp[1])
// console.log(sp)

// const ob=document.querySelector('ul li')
// const ob = document.querySelectorAll("ul li");
// console.log(ob);

// const obj=document.getElementsByTagName('h1')
// console.log(obj[0].innerHTML)

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "aqua";
// }


// ********************************************************************

// const list=document.querySelector('li')
// console.log(list.parentElement)
// console.log(list.parentElement.textContent)


const list = document.querySelector('li');
console.log(list.parentElement);
console.log(list.parentNode);


const par = document.querySelector('ul');
console.log(par);
console.log(par.childNodes);
console.log(par.children);
console.log(par.firstChild);
console.log(par.firstElementChild);

// html collection returns html element but nodelist returns textnode also

// innerHTML
// textContent
// innerText