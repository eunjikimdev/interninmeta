import './Header.css';

const Header = (cartItems) => {
  return (
    <div className="Header">
      <div className="Cart">
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
        <span>3</span>
      </div>
    </div>
  );
};

export default Header;
