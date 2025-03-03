import React from "react";
import "./App.css";
export default function App() {
  const naame = "Abhinav";

  const obj = { name: "Anubhav", age: 25, city: "delhi" };
  return (
    <div>
      <h1 id="first" className="hello">
        Hello From React
      </h1>
      <h1 text={24}>Hello From React</h1>

      <p style={{backgroundColor:'yellow',color:'blue'}}>Hello {naame}</p>
      <p>
        Hello {obj.name}, You are {obj.age} years old and currently living in{" "}
        {obj.city}
      </p>
    </div>
  );
}
