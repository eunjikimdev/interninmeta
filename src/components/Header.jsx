import './Header.css';
import bag_icon from '../assets/bag_icon.png';

const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <div className="cart">
        <img src={bag_icon} alt="bag" />
        {cartItems.length > 0 && (
          <div className="header-cart-count">{cartItems.length}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
