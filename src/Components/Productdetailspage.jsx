import React from 'react';
import alldata from './Data/Alldata';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductDetailContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 20px 0;

  padding: 20px;
`;

const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
  background-color:white;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 400px;
  height: auto;
  background-color:white;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  background-color:white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductName = styled.h2`
  font-weight: bold;
  font-size: 24px;
  background-color:white;
  margin: 10px 0;
  background-color: white;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: red;
  background-color:white;
  margin: 10px 0;
  background-color: white;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  background-color:white;
  background-color: white;
`;

const Productdetailspage = () => {
  const { id } = useParams();
  const product = alldata.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetailContainer>
      <ProductImageContainer>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>₹{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfoContainer>
    </ProductDetailContainer>
  );
};

export default Productdetailspage;
