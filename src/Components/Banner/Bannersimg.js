import React from 'react';
import styled from 'styled-components';
const Banner=styled.div`
padding:2rem 0px;
img {
    width: 100%; 
    height: auto; 
  }

`
const Bannersimg = ({ imgSrc }) => {
  return (
    <Banner>
    
   
    <img src={imgSrc} alt="Banner" />
    </Banner>
  );
}

export default Bannersimg;
