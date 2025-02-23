import React, { useState } from 'react';
import CardForm from '../components/CardForm/CardForm';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardData, setcardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
    securityCode: '',
    pinNumber: '',
  });

  const nav = useNavigate();
  return (
    <>
      <Header
        type={'WHITE'}
        title={'보유카드'}
        // leftChild={<Button text={'<'} type={'BACK'} />}
        rightChild={
          <Button text={'X'} type={'BACK'} onClick={() => nav('/cart')} />
        }
      />
      <CardForm />
    </>
  );
};

export default PaymentPage;
