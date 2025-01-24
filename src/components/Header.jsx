import './Header.css';
import bag_icon from '../assets/bag_icon.png';

const Header = (cartItems) => {
  return (
    <div className="header">
      <div className="cart">
        <img src={bag_icon} alt="bag" />
        <div className="header-cart-count">0</div>
      </div>
    </div>
  );
};

export default Header;
