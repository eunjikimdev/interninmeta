import React from 'react';
import './CartItem.css';

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
  return (
    <article className="cart-item">
      <img src="src/assets/tieShoes_960_720.jpg" alt="브랜드A" />
      <div className="item-info">
        <h4 className="brandName">브랜드A</h4>
        <h3 className="item-price">35,000원</h3>
        <div className="amount">
          <button className="amount-btn">-</button>
          <p className="amount-num">1</p>
          <button className="amount-btn">+</button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
