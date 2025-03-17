import { useState, useEffect } from "react";

const colors = [
  { name: "red", hex: "#FF0000" },
  { name: "blue", hex: "#0000FF" },
  { name: "green", hex: "#00FF00" },
  { name: "yellow", hex: "#FFFF00" },
  { name: "pink", hex: "#FFC0CB" },
];

function App() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      // Cleanup function: reset the background color to its initial value
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  return (
    <div>
      <h1>Background Color Changer</h1>
      <div className="btn">
        {colors.map((colorObj) => (
          <button
            key={colorObj.name}
            style={{
              backgroundColor: colorObj.hex,
              color: "white",
            }}
            onClick={() => setColor(colorObj.hex)}
          >
            {colorObj.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;