import React from 'react';

const ExpiryDate = () => {
  return (
    <form>
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
  );
};

export default ExpiryDate;
