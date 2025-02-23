import React, { useContext } from 'react';
import './CartItem.css';
import ContextData from '../context/ContextData';

// const CartItem = ({id, img, title, price, amount}) => {
//   return (
//     <article className="cart-item">
//       <img src="{img}" alt="{title}" />
//       <div>
//         <h4>{title}</h4>
//         <h4 className="item-price">{price}</h4>
//         <button className='amount-btn' onClick={ }></button>
//         <p className='amount'>{amount}</p>
//         <button className='amount-btn' onClick={}></button>
//       </div>
//     </article>
//   );
// };

const CartItem = () => {
  const { item, cartItems, handleAddToCart, quantity, setQuantity } =
    useContext(ContextData);

  return (
    <article className="cart-item">
      <img src="{item.image}" alt="{item.name}" className="cart-item-image" />
      <div className="item-info">
        <h3 className="brandName">{item.name}</h3>
        <p className="item-price">
          가격: {item.price * (item.quantity || 1)}원
        </p>
      </div>
      ;
      <div className="amount">
        <button
          className="amount-btn"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <p className="amount-num">{item.quantity}</p>
        <button
          className="amount-btn"
          onClick={() => setQuantity((prev) => Math.max(1, prev + 1))}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default CartItem;
