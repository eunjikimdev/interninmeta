import React, { useState, useContext, createContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import './CardPage.css';

const CardPage = () => {
  const nav = useNavigate();
  const CardContext = createContext();

  const [hasRegisteredCard, setHasRegisteredCard] = useState(true);
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
      <div className="cardPage">
        {hasRegisteredCard ? (
          <>
            <div className="registeredCard"></div>
            <Button
              text={'이 카드로 결제하기'}
              type={'Finish, payend'}
              onClick={() => nav('/paymentComplete')}
            />
          </>
        ) : (
          <>
            <p>새로운 카드를 등록해주세요</p>
          </>
        )}

        <div className="emptyCard" onClick={() => nav('/payment')}></div>
      </div>
    </>
  );
};

export default CardPage;
