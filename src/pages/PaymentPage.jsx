import React, { useState } from 'react';
import CardForm from '../components/CardForm/CardForm';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const nav = useNavigate();

  const [cardData, setcardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
    securityCode: '',
    pinNumber: '',
  });

  const [value, setValue] = useState(''); //제어되는 컴포넌트에 전달되는 value는 undefined나 null이 되어서는 안됩니다. 아래의 firstName 필드처럼 초기값을 비워두어야 하는 경우 State 변수를 빈 문자열('')로 초기화 하세요.

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  // };

  // const handleChangeValue = (e) => {
  //   setValue(e.target.value);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Header
        type={'WHITE'}
        title={'카드추가'}
        leftChild={<Button text={'<'} type={'BACK'} onClick={() => nav(-1)} />}
        rightChild={<Button text={'X'} type={'BACK'} onClick={() => nav(-1)} />}
      />
      {/* <CardForm /> */}
      <div
        className="cardPreview"
        style={{
          width: '213px',
          height: '133px',
          backgroundColor: 'red',
          borderRadius: '5px',
        }}
      ></div>
      <form className="CardNumber">
        <p>카드번호</p>
        <input
          type="number"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleChange}
          placeholder="0000-0000"
        />
      </form>
      <form className="ExpiryDate">
        <label htmlFor="">
          <p>만료일</p>
          <input
            type="number"
            name="expiryDate"
            placeholder="MM/YY"
            style={{ width: '137px' }}
          />
        </label>
      </form>
      <form className="CardHolder">
        <label htmlFor="">
          <p>카드소유자이름 0/30</p>
          <input
            type="text"
            name="cardHolder"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요"
            value={cardData.cardHolder}
            onChange={handleChange}
          />
        </label>
      </form>
      <form className="SecurityCode">
        <label htmlFor="">
          <p>보안코드(CVC/CVV)</p>
          <div className="flex">
            <input
              type="number"
              name="securityCode"
              style={{ width: '84px' }}
            />
            <div
              className="questionMrk"
              style={{
                width: '27px',
                height: '27px',
                border: '1px solid #969696',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#969696',
              }}
            >
              ?
            </div>
          </div>
        </label>
      </form>
      <form className="PinNumber">
        <label htmlFor="">
          <p>카드 비밀번호</p>
          <input type="number" name="pinNumber" />
        </label>
      </form>
      <Button text={'작성완료'} type={'Finish'} onClick={() => nav('/card')} />
    </>
  );
};
export default PaymentPage;
