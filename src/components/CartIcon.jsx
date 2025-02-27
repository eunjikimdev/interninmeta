import React, { useContext } from 'react';
import ContextData from './context/ContextData';
import './CartIcon.css';

const CartIcon = () => {
  const { cartItems } = useContext(ContextData);

  // 총 아이템 개수 계산 (각 아이템의 quantity 합계)
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="cart-icon-container">
      <img
        src="/images/CartIcon_white.svg"
        alt="My Happy SVG"
        className="cart-icon"
      />
      {totalItems > 0 && <span className="cart-count-badge">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
