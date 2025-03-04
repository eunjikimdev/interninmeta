import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';

const PaymentComplete = () => {
  const nav = useNavigate();
  return (
    <>
      <Header />
      <h1>결제 완료!</h1>
      <h4>총 3개의 상품을 구매하셨습니다.</h4>

      <h3>총 결제금액</h3>
      <h2>98,000원</h2>
      <Button
        text={'상품목록보기'}
        type={'Finish'}
        onClick={() => nav('/list')}
      />
    </>
  );
};

export default PaymentComplete;
