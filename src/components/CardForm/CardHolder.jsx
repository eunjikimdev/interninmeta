import React from 'react';

const CardHolder = () => {
  return (
    <form>
      <label htmlFor="">
        <p>카드소유자이름 0/30</p>
        <input
          type="text"
          name="cardHolder"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        />
      </label>
    </form>
  );
};

export default CardHolder;
