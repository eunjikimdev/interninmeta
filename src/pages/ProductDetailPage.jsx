import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ContextData from '../components/context/ContextData';
import CartIcon from '../components/CartIcon';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { products, handleAddToCart } = useContext(ContextData);
  const nav = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === parseInt(id));

  //name 값을 현재 보고 있는 상품의 데이터에서 가져와야 함.(=product.name)
  const sameBrandProducts = products.filter(
    (item) => item.name === product.name && item.id !== product.id,
  );

  if (!product) return <p>상품을 찾을 수 없습니다!</p>;

  const handleAddCart = () => {
    // quantity만큼 반복해서 장바구니에 추가
    for (let i = 0; i < quantity; i++) {
      handleAddToCart(product);
    }
    // 장바구니 페이지로 이동
    // nav('/cart');
  };

  return (
    <>
      <Header
        // title={'상품상세페이지'}
        leftChild={
          <div onClick={() => nav('/list')} style={{ cursor: 'pointer' }}>
            <img
              src="/images/arrow_white.svg"
              alt="뒤로 가기"
              style={{ width: '36px', height: '36px', marginLeft: '14px' }}
            />
          </div>
        }
        rightChild={<CartIcon />}
      />
      <div className="productDetail">
        <div className="productPicutre-div">
          <img src={product.image} alt={product.name} className="product-img" />
        </div>
        <div className="product-description">
          <div className="product-info">
            <div className="row">
              <h1>{product.name}</h1>
              <div className="amount">
                <button
                  className="amount-btn"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <p className="amount-num">{String(quantity).padStart(2, 0)}</p>
                <button
                  className="amount-btn"
                  onClick={() => setQuantity((prev) => Math.max(1, prev + 1))}
                >
                  +
                </button>
              </div>
            </div>

            <h3 className="product-info-description">{product.description}</h3>
            <h4>{product.price.toLocaleString()}원</h4>
          </div>
        </div>
        <Button
          text={'장바구니 담기'}
          type={'Finish'}
          onClick={handleAddCart}
          className="cartButton"
        />

        <div className="otherProduct">
          <h4>관련 상품</h4>
          <h3>{product.name}의 다른 신발은 어떠신가요?</h3>
          <div className="otherproductList">
            {sameBrandProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => setQuantity(1)}
              >
                <img src={product.image} alt={product.name}></img>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
