import React, { useState } from 'react';
import './ProductCard.css';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  // const handleClick = () => {
  //   setIsAdded(!isAdded);
  //   onAddToCart(product);
  // };

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

        {/* <button onClick={() => onAddToCart(product)}>
          {setIsAdded ? ' 담김!' : '담기'}
        </button> */}

        <Button
          type={'black'}
          onClick={(e) => handleClick(e, product)}
          text="담기"
        ></Button>

        {/* <button
          className={`button ${isAdded ? 'added' : ''}`}
          onClick={handleClick}
        >
          {isAdded ? '담김!' : '담기'}
        </button> */}
        {/* <button> 구매 </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
