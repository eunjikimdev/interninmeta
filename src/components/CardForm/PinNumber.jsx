import React from 'react';

const PinNumber = () => {
  return (
    <form>
      <label htmlFor="">
        <p>카드 비밀번호</p>
        <input type="number" name="pinNumber" />
      </label>
    </form>
  );
};

export default PinNumber;
