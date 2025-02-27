import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/ProductListPage.css';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Button from '../components/Button';
import ContextData from '../components/context/ContextData';
import CartIcon from '../components/CartIcon';

const ProductListPage = () => {
  const { products, handleAddToCart } = useContext(ContextData);
  const nav = useNavigate();
  return (
    <>
      <Header rightChild={<CartIcon />} />

      <div className="subject">
        <h1>신발 상품 목록</h1>
        <p>현재 {products.length}개의 상품이 있습니다.</p>
      </div>

      <div className="products-list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              // isInCart={cartItems.some((item) => item.id === product.id)}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
