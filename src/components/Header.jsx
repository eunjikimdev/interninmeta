import './Header.css';
import bag_icon from '../assets/bag_icon.png';
import { useContext } from 'react';
import ContextData from './context/ContextData';

// const Header = ({ cartItems }) => {
//   return (
//     <header className="Header">
//       <div className="cart">
//         <img src={bag_icon} alt="bag" />
//         {cartItems.length > 0 && (
//           <div className="header-cart-count">{cartItems.length}</div>
//         )}
//       </div>
//     </header>
//   );
// };

const Header = ({ title, leftChild, rightChild, type }) => {
  const { handleUpedateQuantity } = useContext(ContextData);
  return (
    <header className={`Header Header_${type}`}>
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
