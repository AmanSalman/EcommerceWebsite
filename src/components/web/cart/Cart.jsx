// import React, { useState, useEffect, useContext } from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { CartContext } from '../context/CartFeatures.jsx';
// import { useNavigate } from 'react-router-dom';
// import Loader from '../Loader/Loader.jsx';
// import './Cart.css'

// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

//   body {
//     font-family: 'Dancing Script', cursive;
//   }
// `;

// const CartContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #f8f8f8;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   flex-wrap:wrap;
//   gap:1.5rem;
// `;

// const ProductsSection = styled.div`
//   flex: 2;
//   padding: 20px;
//   margin-right: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// `;

// const SummarySection = styled.div`
//   flex: 1;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ItemCount = styled.span`
// @media(min-width: 322px) and (max-width: 520px){
//     font-size:0.8em !important;
// }

//   font-size: 1.2em;
//   font-weight: bold;
//   color: #555;
// `;

// const CouponInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const ProductItem = styled.div`
// @media(min-width: 322px) and (max-width: 520px){
// img {
//     width: 100px !important;
//     height: 100px !important;
//   }
//     h4{
//     display:none;
//     }
// }
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;
//   border-bottom: 1px solid #ccc;

//   img {
//     width: 50px;
//     height: 50px;
//     object-fit: cover;
//     margin-right: 10px;
//   }

//   .details {
//     flex: 1;
//     display: flex;
//     flex-direction: column;

//     h4 {
//       margin: 0;
//     }
//   }

//   .actions {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     button {
//       background-color: #ff4d4d;
//       color: white;
//       border: none;
//       padding: 5px 10px;
//       cursor: pointer;
//       border-radius: 4px;
//       margin-top: 5px;

//       &:hover {
//         background-color: #ff1a1a;
//       }
//     }

//     .quantity-controls {
//       display: flex;
//       align-items: center;
//       margin-top: 10px;

//       button {
//         background-color: #007bff;
//         color: white;
//         border: none;
//         cursor: pointer;
//         border-radius: 4px;
//         margin: 0 5px;

//         &:hover {
//           background-color: #0056b3;
//         }
//       }

//       span {
//         margin: 0 5px;
//         font-weight: bold;
//       }
//     }
//   }
// `;

// const Cart = () => {
//   const navigate = useNavigate();
//   const { getCartContext, removeItemContext, updateItemQuantityContext } = useContext(CartContext);
//   const [countCart, setCountCart] = useState(0);
//   const [productsData, setProductsData] = useState([]);

//   const getCart = async () => {
//     const res = await getCartContext();
//     setCountCart(res.cart.products.length);
//     return res;
//   };

//   const { data, isLoading } = useQuery("Cart", getCart);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       if (data?.cart?.products) {
//         const productsWithDetails = [];
//         for (const cartItem of data.cart.products) {
//           try {
//             const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/${cartItem.productId}`);
//             const productWithDetail = {
//               ...cartItem,
//               details: response.data.product,
//             };
//             productsWithDetails.push(productWithDetail);
//           } catch (error) {
//             console.error('Error fetching product details:', error);
//           }
//         }
//         setProductsData(productsWithDetails);
//       }
//     };

//     fetchProductDetails();
//   }, [data]);

//   const handleUpdateQuantity = async (productId, quantityChange, operator) => {
//     const productToUpdate = productsData.find(product => product.productId === productId);

//     let updatedQuantity;
//     if (operator === '-') {
//       updatedQuantity = productToUpdate.quantity - quantityChange;
//       if (updatedQuantity < 1) {
//         updatedQuantity = 1; // Ensuring quantity doesn't go below 1
//       }
//     }

//     await updateItemQuantityContext(productId, quantityChange, operator);
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <CartContainer>
//         {/* Left side: Products */}
//         <ProductsSection>
//           <Title>
//             Products <ItemCount>({countCart} items)</ItemCount>
//           </Title>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             productsData.map(product => (
//               <ProductItem key={product.productId}>
//                 <img src={product.details.MainImage.secure_url} alt={product.details.name} />
//                 <div className="details">
//                   <h4>{product.details.name}</h4>
//                   <p>Price: ${product.details.price}</p>
//                   <p>Quantity: {product.quantity}</p>
//                 </div>
//                 <div className="actions">
//                   <button onClick={() => removeItemContext(product.productId)}>Remove</button>
//                   <div className="quantity-controls">
//                     <button onClick={() => handleUpdateQuantity(product.productId, 1, '-')}>-</button>
//                     <span>{product.quantity}</span>
//                     <button onClick={() => handleUpdateQuantity(product.productId, 1, '+')}>+</button>
//                   </div>
//                 </div>
//               </ProductItem>
//             ))
//           )}
//         </ProductsSection>

//         {/* Right side: Summary and Coupon */}
//         <SummarySection>
//           <Title>Summary</Title>
//           {/* Summary details will go here */}
//           <h3>Coupon</h3>
//           <CouponInput type="text" placeholder="Enter coupon code" />
//         </SummarySection>
//       </CartContainer>
//     </>
//   );
// };

// export default Cart;
import React, { useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { CartContext } from "../context/CartFeatures.jsx";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import { BsBoxes, BsCart4 } from "react-icons/bs";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

  body {
    font-family: 'Dancing Script', cursive;
  }
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  flex-direction: column;
  p {
    margin: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ProductsSection = styled.div`
  flex: 2;
  padding: 20px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    margin: auto;
    width: 100%;
  }
`;

const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: var(--color3);
`;

const ItemCount = styled.span`
  font-size: 1em;
  font-weight: bold;
  @media (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const CouponInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid var(--color3);
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1em;
  color: #333;

  &:focus {
    outline: none;
    border-color: var(--color2);
  }
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 5px;

      &:hover {
        background-color: #ff1a1a;
      }
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      margin-top: 10px;

      button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        margin: 0 5px;

        &:hover {
          background-color: #0056b3;
        }
      }

      span {
        margin: 0 5px;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    .details {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
`;

const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TotalPrice = styled.p`
  font-size: 1.4em;
  color: var(--color3);
`;

const ClearCartButton = styled (Link)`
  background-color:var(--color4);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color:var(--color3);
  }
`;

const Quantity = styled.p`
  color: var(--color2);
`;

const DiscountPrice = styled.p`
  font-size: 0.9em;
  text-decoration: line-through;
  color: #dddada;
`;

const FinalPrice = styled.p`
  color: red;
  font-size: 1em;
  font-weight: bold;
  margin-top: 10px;
`;

const MakeOrderButton = styled(Link)`
  background-color: var(--color4);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease-in-out;
  width: fit-content;
  margin: 1rem auto;
  text-align: center;
  &:hover {
    background-color: var(--color3);
  }
`;

const NoProductsMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #888;
  margin-top: 20px;
`;

const Cart = () => {
  const navigate = useNavigate();
  const { getCartContext, removeItemContext, updateItemQuantityContext, clearCartContext } = useContext(CartContext);
  const [countCart, setCountCart] = useState(0);
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setIsLoading] = useState(false);

  const getCart = async () => {
    setIsLoading(true);
    const res = await getCartContext();
    setCart(res.cart);
    setCountCart(res.cart.products.length);
    setIsLoading(false);
    return res;
  };

  const { data, isLoading } = useQuery("Cart", getCart);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (data?.cart?.products) {
        const productsWithDetails = [];
        let calculatedTotalPrice = 0;

        for (const cartItem of data.cart.products) {
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/product/${cartItem.productId}`
            );
            const productWithDetail = {
              ...cartItem,
              details: response.data.product,
            };
            productsWithDetails.push(productWithDetail);
            calculatedTotalPrice += response.data.product.FinalPrice * cartItem.quantity;
          } catch (error) {
            console.error("Error fetching product details:", error);
          }
        }

        setProductsData(productsWithDetails);
        setTotalPrice(calculatedTotalPrice);
      }
    };

    fetchProductDetails();
  }, [data]);

  const handleUpdateQuantity = async (productId, quantityChange, operator) => {
    const productToUpdate = productsData.find(
      (product) => product.productId === productId
    );

    let updatedQuantity;
    if (operator === "-") {
      updatedQuantity = productToUpdate.quantity - quantityChange;
      if (updatedQuantity < 1) {
        updatedQuantity = 1; // Ensuring quantity doesn't go below 1
      }
    }

    await updateItemQuantityContext(productId, quantityChange, operator);
    getCart();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />
      
      <CartContainer>
      <nav aria-label="breadcrumb">
                <ol className="breadcrumb container">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </nav>
        {/* Left side: Products */}
        <ProductsSection>
          <Title>
            <div>
              Cart | <BsCart4 color="black" /> :
            </div>

            <ItemCount>
              {countCart} <BsBoxes color="black" />
            </ItemCount>
          </Title>
          {productsData.length === 0 ? (
            <NoProductsMessage>No products in your cart.</NoProductsMessage>
          ) : (
            productsData.map((product) => (
              <ProductItem key={product.productId}>
                <img
                  src={product.details.MainImage.secure_url}
                  alt={product.details.name}
                />
                <div className="details">
                  <h4>{product.details.name}</h4>
                  {product.details.discount === 0 && (
                    <p>Price: ${product.details.price}</p>
                  )}
                  {product.details.discount !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: ".5rem",
                        alignItems: "baseline",
                      }}
                    >
                      <DiscountPrice>
                        $<del>{product.details.price}</del>
                      </DiscountPrice>
                      <FinalPrice> ${product.details.FinalPrice}</FinalPrice>
                    </div>
                  )}
                </div>
                <div className="actions">
                  <button onClick={() => removeItemContext(product.productId)}>
                    Remove
                  </button>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(product.productId, 1, "-")
                      }>
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(product.productId, 1, "+")
                      }>
                      +
                    </button>
                  </div>
                </div>
              </ProductItem>
            ))
          )}
          {productsData.length !== 0 && (
            <TotalPriceContainer>
              <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
              <ClearCartButton to={'/clearcart'}>Clear Cart</ClearCartButton>
            </TotalPriceContainer>
          )}
        </ProductsSection>

        {productsData.length !== 0 && (<SummarySection>
          <MakeOrderButton to="/CreateOrder">Make Order</MakeOrderButton>
        </SummarySection>)}
        
      </CartContainer>
    </>
  );
};

export default Cart;
