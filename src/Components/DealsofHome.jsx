import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Main = styled.div`
  div, h1 {
    background-color: white;
  }
`;

const Button = styled.button`
  background-color: #FF9130;
  border-radius: 8px;
  padding: 0px 12px;
  border: none;
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: "#FF9130"
    color: black;
  }
  
  
    
  
`;

const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

const Picture = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    flex: 1;
    max-width: calc(50% - 20px);
    margin: 10px;
    text-align: center;

    img {
      max-width: 100%;
      height: 200px; /* Set the fixed height for all images */
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  p {
    margin: 5px;
    background-color: white;
  }
`;

const DealsofHome = ({ data = [] }) => {

 const x=data[0].type;

 
  return (
    <Main>
      <Header>
        <h1>Deals of the day</h1>
        <Button ><Link style={{textDecoration:"none" , backgroundColor:"#FF9130" , color:"black"}} to={`/${x}` }     >View all</Link></Button>
      </Header>

      <Picture>
        {data.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </Picture>
    </Main>
  );
};

export default DealsofHome;
