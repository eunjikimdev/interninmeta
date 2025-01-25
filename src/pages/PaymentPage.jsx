import React, { useState } from 'react';
import CardForm from '../components/CardForm/CardForm';

const PaymentPage = () => {
  const [cardData, setcardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
    securityCode: '',
    pinNumber: '',
  });
  return (
    <>
      <CardForm />
    </>
  );
};

export default PaymentPage;
