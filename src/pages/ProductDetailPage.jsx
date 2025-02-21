import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import ContextData from '../components/context/ContextData';

const ProductDetailPage = () => {
  const { products } = useContext(ContextData);
  const nav = useNavigate();

  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>상품을 찾을 수 없습니다!</p>;

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
      <div className="product-image-div">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <h4>{product.price}</h4>
        <div className="amount">
          <button className="amount-btn">-</button>
          <p className="amount-num">01</p>
          <button className="amount-btn">+</button>
        </div>
        <Button
          text={'장바구니 담기'}
          type={'Finish'}
          onClick={() => nav('/cart')}
        />
      </div>
      <div className="otherProduct">
        <h3>관련상품</h3>
        <h4>{product.name}의 다른 신발은 어떠신가요?</h4>
        <div>
          <div className="product-image-div">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
