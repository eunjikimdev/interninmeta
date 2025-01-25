import React from 'react';

const SecurityCode = () => {
  return (
    <form>
      <label htmlFor="">
        <p>보안코드(CVC/CVV)</p>
        <div className="flex">
          <input type="number" name="securityCode" style={{ width: '84px' }} />
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
  );
};

export default SecurityCode;
