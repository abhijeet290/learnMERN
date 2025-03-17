import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count-display">
        <h2>Count: {count}</h2>
      </div>
      <div className="button-container">
        <button className="btn increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="btn decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
