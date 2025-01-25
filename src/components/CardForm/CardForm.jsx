import React from 'react';
import './CardForm.css';
import Cardpreview from './Cardpreview';
import CardNumber from './CardNumber';
import ExpiryDate from './ExpiryDate';
import CardHolder from './CardHolder';
import SecurityCode from './SecurityCode';
import PinNumber from './PinNumber';
import FinishButton from './FinishButton';

const CardForm = () => {
  return (
    <div className="cardForm">
      <Cardpreview />
      <CardNumber />
      <ExpiryDate />
      <CardHolder />
      <SecurityCode />
      <PinNumber />
      <FinishButton />
    </div>
  );
};

export default CardForm;
