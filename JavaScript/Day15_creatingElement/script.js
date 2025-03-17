const li = document.createElement("li");
li.innerHTML = "TS";
const ul = document.getElementById("root");
ul.appendChild(li);

function addTODOM(content) {
  const elem = document.createElement("li");
  elem.innerHTML = content;

  const parent = document.getElementById("root");
  //   parent.appendChild(elem);
  parent.append(elem, `hello from ${content}`); // appendChild only accepts a single Node object as its argument. This means you can only append DOM elements (like li, div, etc.) or text nodes.

  //   append, on the other hand, can accept multiple arguments and can append Node objects as well as DOMString objects (strings of text). This makes append more versatile.
}

addTODOM("React");
addTODOM("angular");
addTODOM("vue");

// **********************Creating a text node******************************

const text = document.createTextNode("hello from text Node");
ul.append(text);

// creating attributes
const attr = document.createAttribute("id");
attr.value = "first";
const curli = document.querySelector("li");
curli.setAttributeNode(attr);

// access to second list item
// console.log(ul.children);
// ul.children[1].setAttributeNode(attr);

// Create and set the attribute for the first list item
const curli2 = document.querySelector("li");
curli2.setAttribute("id", "first");

// Access to the second list item
const ul2 = document.getElementById("root");
console.log(ul2.children);

// Make sure the second list item exists before setting the attribute
if (ul2.children.length > 1) {
  ul2.children[1].setAttribute("id", "second");
}


// to add at the beginning
const ele=document.createElement('li')
ele.innerHTML='JAVA'
ul.prepend(ele)