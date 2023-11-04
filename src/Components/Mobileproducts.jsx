import React, { useState } from 'react';
import styled from 'styled-components';
import alldata from './Data/Allmobileproduct';

import { Link } from 'react-router-dom';

const Mainsection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 0px 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin: 10px 0;
  background-color: white;
`;

const ProductInfo = styled.div`
  margin-top: 10px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  background-color: white;
`;

const SortForm = styled.form`
  margin: 1px: 10px;
  background-color: white;
`;

const SortOptions = styled.select`
  margin-right: 10px;
  padding: 5px;
  border: none;
  border-bottom: 2px solid red;
  font-size: 0.8rem;
`;

const Sortingsection = styled.div`
  padding: 1rem;
  text-align: center;
  h1,
  select {
    background-color: white;
  }
  h1 {
    padding: 1rem;
  }
  select {
    border: none;
    border: 2px solid red;
    font-size: 0.9rem;
    option {
      background-color: white;
    }
  }
`;

const ItemsPerPage = 8; 

const Mobileproducts = () => {
  const [productType, setProductType] = useState('all');
  const [sortByPrice, setSortByPrice] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = alldata
    .filter((product) => productType === 'all' || product.type === productType)
    .sort((a, b) => {
      if (sortByPrice === 'lowToHigh') {
        return a.price - b.price;
      } else if (sortByPrice === 'highToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / ItemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Sortingsection>
        <h1>Mobile</h1>
        <SortForm>
          <SortOptions
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="samsung">Samsung</option>
            <option value="realme">Realme</option>
            <option value="iphone">Iphone</option>
            <option value="vivo">vivo</option>
            <option value="xiaomi">xiamoi</option>
            <option value="Nokia">Nokia</option>
          </SortOptions>
          <SortOptions
            value={sortByPrice}
            onChange={(e) => setSortByPrice(e.target.value)}
          >
            <option value="default">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High To Low</option>
          </SortOptions>
        </SortForm>
      </Sortingsection>

      <Mainsection>
        {currentItems.map((product) => (
          <StyledLink to={`/product/${product.id}`} key={product.id}>
            <ProductCard>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductInfo>
                <ProductPrice>₹{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          </StyledLink>
        ))}
      </Mainsection>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationButton
          key={number}
          onClick={() => onPageChange(number)}
          currentPage={currentPage}
        >
          {number}
        </PaginationButton>
   ) )}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.currentPage === props.children ? 'red' : 'white'};
  color: ${(props) => (props.currentPage === props.children ? 'white' : 'black')};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: red;
    color: white;
  }
`;

export default Mobileproducts;
