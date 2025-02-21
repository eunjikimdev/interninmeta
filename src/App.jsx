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
  const [products, setProducts] = useState([]); //상태를 생성
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/data/db.json', { method: 'GET' })
      .then((res) => res.json()) //메소드를 사용해 어떤 형태로 응답 본문을 처리할건지 정함
      .then((data) => {
        setProducts(data.products); // 인자에 배열형태의 데이터가 들어있음. 받아온 데이터를 상태에 저장
      })
      .catch((err) => console.error('데이터 불러오기 실패:', err));
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const isAlreadyInCart = prev.some((item) => item.id === product.id); //아이템 중 일부라도 조건에 매칭되면 true 반환

      if (isAlreadyInCart) {
        //이미 있는 상품이면 수량만 증가
        return prev.filter((item) => item.id !== product.id); //배열 아이템 일부를 걸러내어 새로운 배열을 반환
      } else {
        return [...prev, product];
      }
    });
  };

  const nav = useNavigate();
  return (
    <>
      <div>
        <Link to={'/list'}>상품목록</Link>
        <Link to={'/product/${product.id}'}>상품상세페이지</Link>
        <Link to={'/payment'}>결제모듈</Link>
        <Link to={'/cart'}>장바구니</Link>
      </div>

      <ContextData.Provider value={{ cartItems, products, handleAddToCart }}>
        <Routes>
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
