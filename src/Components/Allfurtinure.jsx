import React, { useState } from 'react';
import styled from 'styled-components';
import alldata from './Data/Allfurtinureproducts'; // Make sure to import your data
import Pagination from './Pagination'; // Import the Pagination component
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

const ProductDescription = styled.div`
  color: #555;
  background-color: white;
`;

const SortForm = styled.form`
  margin: 1px 10px;
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

const Allfurtinure = () => {
  const [productType, setProductType] = useState('all');
  const [sortByPrice, setSortByPrice] = useState('default');

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <Sortingsection>
        <h1>Furniture</h1>
        <SortForm>
          <SortOptions
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="table">Table</option>
            <option value="wooden">Wooden</option>
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

export default Allfurtinure;
