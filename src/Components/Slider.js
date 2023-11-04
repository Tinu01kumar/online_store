import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  max-width: 100%;
`;

const CustomCarousel = styled(Carousel)`
  .carousel .control-dots {
    display: none; 
  }
  
  .carousel .slide {
    &::before {
      display: none; 
    }
  }
  
`;

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const images = [image1, image2, image3, image4, image5]; // Add more images here

  return (
    <CarouselContainer>
      <CustomCarousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={currentImageIndex}
        onChange={handleThumbnailClick}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </CustomCarousel>
    </CarouselContainer>
  );
};

export default ImageCarousel;
