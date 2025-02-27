import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState, useReducer, useEffect } from 'react';
import Header from './components/Header';
import ProductListPage from './pages/ProductListPage';
import PaymentPage from './pages/PaymentPage';
import CartPage from './pages/cartPage';
import NotFound from './pages/NotFound.jsx';
import Button from './components/Button';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ContextData from './components/context/ContextData.jsx';

function App() {
  //전체 상품 목록을 저장하는 state
  const [products, setProducts] = useState([]);

  //장바구니에 담긴 상품들을 저장하는 state
  const [cartItems, setCartItems] = useState([]);

  //db.json에서 상품 데이터를 가져오는 부분
  useEffect(() => {
    fetch('/data/db.json', { method: 'GET' }) //메소드를 사용해 어떤 형태로 응답 본문을 처리할건지 정함
      .then((res) => res.json())
      .then((data) => {
        //// data.products는 db.json의 "products" 키에 있는 배열을 가져옴
        setProducts(data.products);
      })
      .catch((err) => console.error('데이터 불러오기 실패:', err));
  }, []);

  //장바구니에 상품을 추가하는 함수
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      //이미 장바구니에 있는 상품인지 확인
      const existingItem = prev.some((item) => item.id === product.id);

      if (existingItem) {
        //이미 있는 상품이면 수량만 증가
        return prev.filter((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  //장바구니 상품 수량 업데이트 함수
  const handleUpedateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevCartItems) => {
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      );
    });
  };

  //장바구니에서 상품 제거하는 함수
  const handleRremoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId),
    );
  };

  const nav = useNavigate();

  return (
    <>
      {/* <div>
        <Link to={'/list'}>상품목록</Link>
        <Link to={'/product/${product.id}'}>상품상세페이지</Link>
        <Link to={'/payment'}>결제모듈</Link>
        <Link to={'/cart'}>장바구니</Link>
      </div> */}

      <ContextData.Provider
        value={{
          products, // 쇼핑몰의 전체 상품목록
          cartItems, // 사용자가 장바구니에 담은 상품들
          handleAddToCart, // 장바구니 추가 함수
          handleUpedateQuantity, // 수량 변경 함수
          handleRremoveFromCart, // 장바구니에서 제거하는 함수
        }}
      >
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/list" element={<ProductListPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextData.Provider>
    </>
  );
}

export default App;
