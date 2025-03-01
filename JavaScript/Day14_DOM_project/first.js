// let li = document.querySelectorAll("li");
// console.log(li);
// const obj = document.getElementsByTagName("h1");
// const liElem = document.getElementsByTagName("li");
// console.log(obj);
// console.log(liElem);
// for (let i = 0; i < liElem.length; i++) {
//   liElem[i].style.backgroundColor = "green";
// }
// const arr = Array.from(liElem);
// arr.forEach((val) => (val.textContent = "hello form Array"));
// for(item of arr){
//     item.style.backgroundColor='cyan'
// }

const list = document.querySelector("li");
console.log(list.parentElement);
console.log(list.parentNode);
const list1 = document.querySelector("ul");
console.log(list1);
console.log(list1.childNodes);
console.log(list1.children);
console.log(list1.firstChild);

// innerHTML
// textContent
// innerText
const text = document.getElementById("first");
console.log(text.innerHTML); // shows all the html as it is
console.log(text.textContent); // shows hidden text also
console.log(text.innerText); // shows only visible text hidden text are hidden
