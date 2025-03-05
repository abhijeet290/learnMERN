export default function Header() {
    return (
      <div className="heading">
        <img
          className="logo"
          src="https://images.indianexpress.com/2021/01/myntra.png?w=640"
          height="60px"
          width="100px"
          alt="logo"
        />
        <div className="options">
          <button className="btn">Men</button>
          <button className="btn">Women</button>
          <button className="btn">Kids</button>
          <button className="btn">Home and Living</button>
          <button className="btn">Beauty</button>
          <button className="btn">Studio</button>
        </div>
        <input
          className="searchbar"
          placeholder="Search for products brands and more"
          type="text"
        />
        <div className="profile">
          <button className="pro">Profile</button>
          <button className="pro">Wishlist</button>
          <button className="pro">Bag</button>
        </div>
      </div>
    );
  }