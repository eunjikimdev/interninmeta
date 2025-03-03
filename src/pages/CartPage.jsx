import React, { useContext } from 'react';
import './CartPage.css';
import Header from '../components/Header';
import Button from '../components/Button';
import CartItem from '../components/cart/CartItem';
import { useNavigate } from 'react-router-dom';
import ContextData from '../components/context/ContextData';

const CartPage = () => {
  const nav = useNavigate();
  const { cartItems } = useContext(ContextData);

  //장바구니에 있는 모든 상품의 총 금액 계산
  const totalProductPrice = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  //배송비 100000원 이상 구매시 무료
  const shippingFee = totalProductPrice >= 100000 ? 0 : 3000;

  // 상품금액 + 배송비
  const finalPrice = totalProductPrice + shippingFee;

  return (
    <>
      <Header
        // title={''}
        leftChild={
          <div onClick={() => nav('/list')} style={{ cursor: 'pointer' }}>
            <img
              src="/images/arrow_white.svg"
              alt="뒤로 가기"
              style={{ width: '36px', height: '36px', marginLeft: '14px' }}
            />
          </div>
        }
        // rightChild={<Button text={''} />}
      />

      <section className="cart">
        <header className="cart-header">
          <h2>장바구니</h2>
          <h3>현재 {cartItems.length}개의 상품이 담겨있습니다.</h3>
        </header>

        {/* map안에서는 { }를 쓰면 안됌. 아니면 return을 쓰던가 */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-total">
          <div className="cart-total-info">
            <p>상품금액</p>
            <p className="price">{totalProductPrice.toLocaleString()}원</p>
          </div>
          <div className="cart-total-info">
            <p>배송비</p>
            <p className="price"> {shippingFee.toLocaleString()}원</p>
          </div>

          <div className="cart-total-info">
            <p>총금액</p>
            <p className="price">{finalPrice.toLocaleString()}원</p>
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
