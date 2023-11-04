import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.currentPage === props.pageNumber ? 'red' : 'white'};
  color: ${(props) => (props.currentPage === props.pageNumber ? 'white' : 'black')};
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

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          currentPage={currentPage}
          pageNumber={pageNumber}
        >
          {pageNumber}
        </PaginationButton>
  ))}
    </PaginationContainer>
  );
};

export default Pagination;
