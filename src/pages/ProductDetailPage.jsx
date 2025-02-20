import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        title={'상품상세페이지'}
        leftChild={
          <Button text={'<'} type={'whiteType'} onClick={() => nav('/list')} />
        }
        rightChild={
          <Button text={'ㅁ'} type={'whiteType'} onClick={() => nav('/cart')} />
        }
      />
      <h1>내용 아직 없음</h1>
    </>
  );
};

export default ProductDetailPage;
