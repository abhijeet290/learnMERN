// createElement in JS

// const header1 = document.createElement("h1");
// header1.innerText = "Welcome to createElement";
// header1.style.backgroundColor = "skyblue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement("h1");
// header2.innerText = "Welcome to createElement2";
// header2.style.backgroundColor = "skyblue";
// header2.style.fontSize = "26px";
// header2.style.color = "white";

// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);

// Creating React

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    if (typeof children === "object") {
      for (item of children) {
        element.append(item);
      }
    } else element.innerText = children;
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

// Creating ReactDOM

const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const header = React.createElement(
  "h1",
  { fontSize: "25px", backgroundColor: "blue", color: "white" },
  "Hello from Personal Library"
);
const header3 = React.createElement(
  "h1",
  { fontSize: "25px", backgroundColor: "cyan", color: "white" },
  "Hello from Personal Library3"
);
const header4 = React.createElement(
  "h1",
  { fontSize: "25px", backgroundColor: "red", color: "white" },
  "Hello from Personal Library4"
);
const para = React.createElement(
  "p",
  { fontSize: "25px", backgroundColor: "green", color: "white" },
  "Hello from paragraph in Personal Library"
);
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "Javascript");
const ul = React.createElement(
  "ul",
  { fontSize: "25px", backgroundColor: "blue", color: "white" },
  [li1, li2, li3]
);
// Unordered List
// HTML, CSS. Javascript

ReactDOM.render(header, document.getElementById("root"));
ReactDOM.render(header3, document.getElementById("root"));
ReactDOM.render(header4, document.getElementById("root"));
ReactDOM.render(para, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));
