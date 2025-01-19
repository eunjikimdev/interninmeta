import React, { useState, useEffect } from 'react';
import '../components/ProductListPage.css';
import ProductCard from '../components/ProductCard';

const ProductListPage = ({ products, handleAddToCart, cartItems }) => {
  return (
    <div>
      <div className="subject">
        <h1>신발상품목록</h1>
        <p>현재 {products.length}개의 상품이 있습니다.</p>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            isInCart={cartItems.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
