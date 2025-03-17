import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import arr from "./utils/dummy";
import { greet as hello, meet as meeting } from "./utils/dummy";

// Header

// Body

// Footer

function App() {
  const [price, setPrice] = useState("");
  const [filteredPrice, setFilteredPrice] = useState(null);
  const [A,setA]=useState(arr)

  const handleFilter = () => {
    setFilteredPrice(price);
  };
  const sortPrice = () => {
    A.sort((a, b) => a.price - b.price);
    setA([...A]);
  };

  return (
    <>
      <Header />
      {hello("Rahul")}
      <br />
      {meeting("10:00 AM")}<br/>
      <input
        type="number"
        placeholder="Enter price to filter"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Filter by Price</button><br/>
      <button onClick={sortPrice}>sort by price</button>

      <div
        className="middle"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {arr
          .filter((value) => !filteredPrice || value.price <= filteredPrice)
          .map((value, index) => (
            <Card
              cloth={value.cloth}
              key={index}
              offer={value.offer}
              price={value.price}
            />
          ))}
      </div>
      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
