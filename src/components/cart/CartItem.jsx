import React, { useContext, useState } from 'react';
import './CartItem.css';
import ContextData from '../context/ContextData';

const CartItem = ({ item }) => {
  const { handleAddToCart, handleRemoveFromCart } = useContext(ContextData);
  const [quantity, setQuantity] = useState(item.quantity || 1);

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="item-info">
        <h3 className="brandName">{item.name}</h3>
        <p className="item-price">
          {(item.price * (item.quantity || 1)).toLocaleString()}원
        </p>

        <div className="amount">
          <button
            className="amount-btn"
            // onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            -
          </button>
          <p className="amount-num">{item.quantity}</p>
          <button
            className="amount-btn"
            onClick={() => setQuantity((prev) => Math.max(1, prev + 1))}
            // onClick={() => handleAddToCart(item.id)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
