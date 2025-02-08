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
const listItems = document.getElementsByClassName("header2")[0].getElementsByTagName("li");
console.log(listItems); // Logs an HTMLCollection of <li> elements
for (let i = 0; i < listItems.length; i++) {
  console.log(`Item ${i + 1}: ${listItems[i].textContent}`);
}
