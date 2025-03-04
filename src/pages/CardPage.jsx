import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CardPage = () => {
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
      <p>새로운 카드를 등록해주세요</p>

      <div
        className="registeredCard"
        style={{
          width: '213px',
          height: '133px',
          backgroundColor: 'red',
          borderRadius: '5px',
        }}
      ></div>
      <Button
        text={'위 카드로 결제하기'}
        type={'Finish'}
        onClick={() => nav('/paymentComplete')}
      />
      <div
        className="emptyCard"
        style={{
          width: '213px',
          height: '133px',
          backgroundColor: 'grey',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => nav('/payment')}
      ></div>
    </>
  );
};

export default CardPage;
