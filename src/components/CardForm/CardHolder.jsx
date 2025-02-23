import React, { useState } from 'react';

const CardHolder = () => {
  const [value, setValue] = useState(''); //제어되는 컴포넌트에 전달되는 value는 undefined나 null이 되어서는 안됩니다. 아래의 firstName 필드처럼 초기값을 비워두어야 하는 경우 State 변수를 빈 문자열('')로 초기화 하세요.

  const handleChangeValue = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <form>
      <label htmlFor="">
        <p>카드소유자이름 0/30</p>
        <input
          type="text"
          name="cardHolder"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요"
          value={value}
          onChange={handleChangeValue}
        />
      </label>
    </form>
  );
};

export default CardHolder;
