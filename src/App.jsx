import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ProductListPage from './pages/ProductListPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const isAlreadyInCart = prev.some((item) => item.id === product.id); //아이템 중 일부라도 조건에 매칭되면 true 반환

      if (isAlreadyInCart) {
        return prev.filter((item) => item.id !== product.id); //배열 아이템 일부를 걸러내어 새로운 배열을 반환
      } else {
        return [...prev, product];
      }
    });
  };

  const products = [
    {
      id: 1,
      name: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      id: 2,
      name: '브랜드B',
      description: '편안한 컬러가 매력적인 신발',
      price: 25000,
    },
    {
      id: 3,
      name: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 25000,
    },
    {
      id: 4,
      name: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      id: 5,
      name: '브랜드B',
      description: '편안한 컬러가 매력적인 신발',
      price: 25000,
    },
    {
      id: 6,
      name: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 25000,
    },
  ];

  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <ProductListPage
          products={products}
          handleAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}

export default App;
