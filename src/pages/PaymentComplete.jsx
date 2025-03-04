import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { useContext } from 'react';
import ContextData from '../components/context/ContextData';
import './PaymentComplete.css';

const PaymentComplete = () => {
  const nav = useNavigate();
  const { cartItems } = useContext(ContextData);
  return (
    <>
      <Header />
      <div className="paymentComplete-container">
        <h1>결제 완료!</h1>
        <h3>총 {cartItems.length}개의 상품을 구매하셨습니다.</h3>

        <h4>총 결제금액</h4>
        {/* <h2>{finalPrice.toLocaleString()}원</h2> */}
        <h2>32000원</h2>
        <Button
          text={'상품목록보기'}
          type={'Finish'}
          onClick={() => nav('/list')}
        />
      </div>
    </>
  );
};

export default PaymentComplete;
