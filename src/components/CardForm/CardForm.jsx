import React from 'react';
import './CardForm.css';
import Cardpreview from './Cardpreview';
import CardNumber from './CardNumber';
import ExpiryDate from './ExpiryDate';
import CardHolder from './CardHolder';
import SecurityCode from './SecurityCode';
import PinNumber from './PinNumber';
import FinishButton from './FinishButton';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
  const nav = useNavigate();
  return (
    <div className="cardForm">
      <Cardpreview />
      <CardNumber />
      <ExpiryDate />
      <CardHolder />
      <SecurityCode />
      <PinNumber />
      <Button text={'결제하기'} type={'Finish'} onClick={() => nav('/cart')} />
    </div>
  );
};

export default CardForm;
