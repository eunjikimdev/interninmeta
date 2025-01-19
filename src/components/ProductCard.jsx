import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="image-div">
        <img
          src="public/images/shoe1.jpg"
          alt={product.name}
          className="product-img"
        />
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        className={`button ${isAdded ? 'added' : ''}`}
        onClick={handleClick}
      >
        {isAdded ? '담김!' : '담기'}
      </button>
      {/* <button onClick={handleClick} className={isInCart ? 'btn-in-cart' : ''}>
        {isInCart ? '담김!' : '담기'}
      </button> */}
    </div>
  );
};

export default ProductCard;
