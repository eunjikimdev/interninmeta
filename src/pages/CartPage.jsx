import React from 'react';
import './CartPage.css';
import Header from '../components/Header';
import Button from '../components/Button';
import CartItem from '../components/cart/CartItem';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const nav = useNavigate();

  return (
    <>
      <Header
        // title={''}
        leftChild={
          <Button
            text={'<'}
            type={'whiteType'}
            onClick={() => nav('/product')}
          />
        }
        // rightChild={<Button text={''} />}
      />
      {/* <Header /> */}
      <section className="cart">
        {/* 카트헤더 */}
        <header className="cart-header">
          <h2>장바구니</h2>
          <h3>현재 3개의 상품이 담겨있습니다.</h3>
        </header>
        {/* 카트아이템 */}
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        {/* 카트푸터 */}
        <div className="cart-total">
          <div className="cart-total-info">
            <p>상품금액</p>
            <p className="price">95,500원</p>
          </div>
          <div className="cart-total-info">
            <p>배송비</p>
            <p className="price">3,000원</p>
          </div>

          <div className="cart-total-info">
            <p>총금액</p>
            <p className="price">98,000원</p>
          </div>
          <Button
            text={'결제하기'}
            type={'Finish'}
            onClick={() => nav('/payment')}
          ></Button>
        </div>
      </section>
    </>
  );
};

export default CartPage;
