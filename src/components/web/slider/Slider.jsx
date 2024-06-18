// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import url1 from './s6.webp';
// import url2 from './s8.webp';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const SliderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 85vh;
//   overflow: hidden;
//   background: #000;
//   position: relative;
// `;

// const ImageContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #000;
//   animation: ${fadeIn} 1s ease-in-out;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const TextOverlay = styled.div`
//   position: absolute;
//   top: 35%;
//   left: 26%;
//   transform: translateX(-50%);
//   color: #fff;
//   font-size: 1.5em;
//   text-align: center;
//   z-index: 10;
//   padding: 20px 40px;
//   border-radius: 10px;

//   h1 {
//     margin: 0;
//     font-size: 2em;
//     letter-spacing: 10px;
//     color:#85161D;
//   }

//   h2 {
//     margin: .5rem 0 1.6rem 0;
//     font-size: 1.5em;
//     color:#4A3430;
    
//   }
//   }
// `;

// const SliderInput = styled.input`
//   -webkit-appearance: none;
//   display: none;
//   appearance: none;
//   width: 80%;
//   height: 6px;
//   background: #ddd;
//   outline: none;
//   opacity: 0.7;
//   position: absolute;
//   bottom: 20px;
//   transition: opacity 0.2s;
//   &:hover {
//     opacity: 1;
//   }
//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     appearance: none;
//     width: 25px;
//     height: 25px;
//     background: #4CAF50;
//     cursor: pointer;
//   }
//   &::-moz-range-thumb {
//     width: 25px;
//     height: 25px;
//     background: #4CAF50;
//     cursor: pointer;
//   }
// `;

// const Slider = () => {
//   const [value, setValue] = useState(0);

//   const images = [
//     {
//       url: url1,
//       text: ['Hot Collection', 'Glossy Lipstick'],
//     },
//     {
//       url: url2,
//       text: ['Summer Sale', 'Limited Time Offer'],
//     },
//     {
//       url: url1,
//       text: ['New Arrivals', 'Check Out Now'],
//     },
//   ];

//   useEffect(() => {
//     // const interval = setInterval(() => {
//     //   setValue((prevValue) => (prevValue + 1) % images.length);
//     // }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [images.length]);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <SliderContainer>
//       <TextOverlay>
//         <h1>{images[value].text[0]}</h1>
//         <h2>{images[value].text[1]}</h2>
//         <button className='button-23'>Shop Now</button>
//       </TextOverlay>
//       <ImageContainer key={value}>
//         <img src={images[value].url} alt={`Slide ${value}`} />
//       </ImageContainer>
//       <SliderInput
//         type="range"
//         min="0"
//         max={images.length - 1}
//         value={value}
//         onChange={handleChange}
//       />
//     </SliderContainer>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import url1 from './s6.webp';
import url2 from './s8.webp';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SliderContainer = styled.div`

@media(max-width: 321px) {
   height: 37vh;
}
@media(min-width: 322px) and (max-width: 520px) {
   height: 30vh;
}
   @media(min-width: 521px) and (max-width: 950px){
       height: 45vh;
   }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  overflow: hidden;
  background: #000;
  position: relative;
`;

const ImageContainer = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  animation: ${fadeIn} 1s ease-in-out;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextOverlay = styled.div`
@media(max-width: 321px) {
   padding: 5px 10px;
    top: 25%;
    h1 {
      font-size: .7em !important;
      letter-spacing: 3px !important;
      }
      
      h2 {
        font-size: .6em !important;
        margin-bottom:0rem !important;
    }

    button{
    
    font-size: .4em !important;
    padding: .2rem !important;}
}
@media(min-width: 322px) and (max-width: 520px){
    padding: 5px 10px;
    top: 25%;
    h1 {
      font-size: .7em !important;
      letter-spacing: 3px !important;
      }
      
      h2 {
        font-size: .6em !important;
        margin-bottom:0rem !important;
    }

    button{
    
    font-size: .4em !important;
    padding: .25rem !important;}
  }

   position: absolute;
  top: 35%;
  left: 26%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  z-index: 10;
  padding: 20px 40px;
  border-radius: 10px;

  h1 {
    margin: 0;
    font-size: 2em;
    letter-spacing: 10px;
    color:#4A3430;
    }
    
    h2 {
      margin: .5rem 0 1.6rem 0;
      font-size: 1.5em;
      color:#FFFFFF;
    
  }
  }
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  display: none;
  appearance: none;
  width: 80%;
  height: 6px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  position: absolute;
  bottom: 20px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }
`;

const Slider = () => {
  const [value, setValue] = useState(0);

  const images = [
    {
      url: url1,
      text: ['Hot Collection', 'Glossy Lipstick'],
    },
    {
      url: url2,
      text: ['Summer Sale', 'Limited Time Offer'],
    },
    {
      url: url1,
      text: ['New Arrivals', 'Check Out Now'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <TextOverlay>
        <h1>{images[value].text[0]}</h1>
        <h2>{images[value].text[1]}</h2>
        <Link className='button-23' to={'/products'}>Shop Now</Link>
      </TextOverlay>
      <ImageContainer key={value}>
        <img src={images[value].url} alt={`Slide ${value}`} />
      </ImageContainer>
      <SliderInput
        type="range"
        min="0"
        max={images.length - 1}
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  );
};

export default Slider;
