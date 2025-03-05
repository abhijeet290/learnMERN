function Card({ cloth, offer, price }) {
  return (
    <div
      className="card"
      style={{ border: "1px solid black", padding: "10px" }}
    >
      <img
        src="https://www.mashup.in/cdn/shop/files/M-6582Maroon_6.jpg?v=1685101798"
        alt="Card"
        width="200px"
        height="150px"
      />
      <div style={{ textAlign: "center" }}>
        <h3>{cloth}</h3>
        <h3>{offer}</h3>
        <h3>{price}</h3>
        <h3>Shop Now</h3>
      </div>
    </div>
  );
}
export default Card;
