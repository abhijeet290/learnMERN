import React from "react";
import ReactDOM from "react-dom/client";

// const element1 = <h1>Hello React</h1>;
// in jsx we can write only js expressions, , means something which can be evaluated to a value like number or string
// can not write js statements or objects
function Greet(props) {
  console.log(props);
  return (
    <h2>
      Hello {props.name}, You are {props.age} years old
    </h2>
  );
}

const element2 = <Greet name="Rohan" age="23" />;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element2);
