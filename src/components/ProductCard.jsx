import React, { useState } from 'react';
import './ProductCard.css';
import tieShoes_960_720 from '../assets/tieShoes_960_720.jpg';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-div">
        <img
          src={tieShoes_960_720}
          alt={product.name}
          className="product-img"
        />
      </div>
      <div className="product-info">
        <h3 className="productName">{product.name}</h3>
        <p className="productDescription">{product.description}</p>
        <p className="productPrice">{product.price}원</p>
        <button
          className={`button ${isAdded ? 'added' : ''}`}
          onClick={handleClick}
        >
          {isAdded ? '담김!' : '담기'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
