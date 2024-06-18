import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Import your product images
import img1 from './Product/img2.jpg';
import img2 from './Product/13.jpg';
import img3 from './Product/11.jpg';
import img4 from './Product/3.jpg';
import img5 from './Product/7.jpg';
import img6 from './Product/9.jpg';
import img7 from './Product/12.jpg';
import img8 from './Product/P2.jpg';
import img9 from './Product/16.jpg';
import img10 from './Product/14.jpg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Define keyframe animation for fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for the slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ProductContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const ProductCard = styled.div`
  flex: 0 0 auto;
  width: 250px;
  height: 450px;
  margin-right: 40px;
  position: relative;
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 334px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DiscountTag = styled.span`
  position: absolute;
  background: beige;
  padding: 8px;
  border-radius: 10px;
  color: #c79467;
  right: 10px;
  top: 6px;
  text-transform: capitalize;
`;

const CardButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 30%;
  transform: translateX(-50%);
  padding: 5px;
  width: 50%;
  text-transform: uppercase;
  border: none;
  outline: none;
  background: beige;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0;
  font-size: 12px;
  font-weight: normal;
  color: #c79467;

  &:hover {
    background: #896c52;
    color: #fff;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 10px;
`;

const ProductBrand = styled.h2`
  text-transform: uppercase;
  color: #ad8c74;
`;

const ProductShortDescription = styled.p`
  width: 100%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  opacity: 0.5;
  text-transform: capitalize;
  margin: 5px 0;
  color: #b29f8e;
`;

const Price = styled.span`
  font-weight: 900;
  font-size: 20px;
  color: #ad8c74;
`;

const ActualPrice = styled.span`
  margin-left: 20px;
  opacity: 0.5;
  text-decoration: line-through;
  color: #ad8c74;
`;

const PreButton = styled.button`
  border: none;
  width: 5vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  cursor: pointer;
  z-index: 1;

  img {
    opacity: 0.2;
  }

  &:hover img {
    opacity: 1;
  }
`;

const NextButton = styled.button`
  border: none;
  width: 5vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  cursor: pointer;
  z-index: 1;

  img {
    opacity: 0.2;
  }

  &:hover img {
    opacity: 1;
  }
`;

// Product data
const products = [
  { id: 1, image: img1, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 2, image: img2, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 3, image: img3, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 4, image: img4, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 5, image: img5, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 6, image: img6, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 7, image: img7, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 8, image: img8, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 9, image: img9, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' },
  { id: 10, image: img10, discount: '50% off', brand: 'brand', shortDesc: 'a short line about the cloth..', price: '$20', actualPrice: '$40' }
];

const Speical = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === products.length - 1 ? 0 : currentSlide + 1);
    }, 3000);
 
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === products.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? products.length - 1 : currentSlide - 1);
  };

  return (
    <SliderContainer>
      <PreButton onClick={prevSlide}><MdKeyboardArrowLeft fontSize={'2rem'} /></PreButton>
      <NextButton onClick={nextSlide}><MdKeyboardArrowRight fontSize={'2rem'} /></NextButton>
      <ProductContainer style={{ transform: `translateX(-${currentSlide * 290}px)` }}>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage>
              <DiscountTag>{product.discount}</DiscountTag>
              <img src={product.image} className="product-thumb" alt="" />
              <CardButton>add to wishlist</CardButton>
            </ProductImage>
            <ProductInfo>
              <ProductBrand>{product.brand}</ProductBrand>
              <ProductShortDescription>{product.shortDesc}</ProductShortDescription>
              <Price>{product.price}</Price>
              <ActualPrice>{product.actualPrice}</ActualPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductContainer>
    </SliderContainer>
  );
};

export default Speical;
