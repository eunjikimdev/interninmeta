import React from 'react';

const CardNumber = () => {
  return (
    <form>
      <p>카드번호</p>
      <input type="number" name="cardNumber" placeholder="0000-0000" />
    </form>
  );
};

export default CardNumber;
