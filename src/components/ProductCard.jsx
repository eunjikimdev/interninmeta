import React, { useState, useContext } from 'react';
import './ProductCard.css';
import Button from './Button';
import ContextData from './context/ContextData';

const ProductCard = ({ product, onAddToCart }) => {
  // const [isAdded, setIsAdded] = useState(false);
  const { cartItems, handleAddToCart } = useContext(ContextData);
  const isAdded = cartItems.some((item) => item.id === product.id);

  const handleClick = (e, product) => {
    e.preventDefault();
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-div">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-info">
        <h3 className="productName">{product.name}</h3>
        <p className="productDescription">{product.description}</p>
        <p className="productPrice">{product.price}원</p>

        <Button
          type={isAdded ? 'grey' : 'black'}
          onClick={(e) => handleClick(e, product)}
          text={isAdded ? '담김!' : '담기'}
        ></Button>
      </div>
    </div>
  );
};

export default ProductCard;
