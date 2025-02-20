import React, { useState, useEffect, useContext } from 'react';
import '../components/ProductListPage.css';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Button from '../components/Button';
import ContextData from '../components/context/ContextData';
const ProductListPage = () => {
  const { products, handleAddToCart } = useContext(ContextData);
  return (
    <div>
      {/* <Header
        title={'보유카드'}
        leftChild={<Button text={'left'} />}
        rightChild={<Button text={'right'} />}
      /> */}
      <div className="subject">
        <h1>신발 상품 목록</h1>
        <p>현재 {products.length}개의 상품이 있습니다.</p>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            // isInCart={cartItems.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
