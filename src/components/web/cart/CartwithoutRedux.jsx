// // import React, { useContext } from 'react'
// // import './Cart.css'
// // import axios from 'axios'
// // import { CartContext } from '../context/CartFeatures'
// // import { useQuery } from 'react-query';
// // import { Link } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // function Cart() {
// // 	const navigate = useNavigate();
// // 	let {cartCount} = useContext(CartContext);
// //     const {getCartContext,removeItemContext} = useContext(CartContext);
	


// //     const getCart = async ()=>{
// //         const res = await getCartContext();
// // 				console.log(res)
// //         return res;
// //     }
// // const {data,isLoading} = useQuery("Cart", getCart);
// //     const removeItem = async (ProductId)=>{
// //         const res = await removeItemContext(ProductId);
// //         return res;
// //     }

// // 	const increaseQty = async (productid)=>{
// // 		const token = localStorage.getItem("userToken");
// //         const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,{productId:productid},
// //         {headers:{Authorization:`Tariq__${token}`}})
// // 		return data;
// // 	}

// // 	const decreaseQty = async (productid)=>{
// // 		const token = localStorage.getItem("userToken");
// //         const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,{productId:productid},
// //         {headers:{Authorization:`Tariq__${token}`}})
// // 		return data;
// // 	}

// // 	// const clearCart = async ()=>{
// //     //     const token = localStorage.getItem("userToken");
// //     //     const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,{},
// //     //     {headers:{Authorization:`Tariq__${token}`}})
// //     //     console.log(data) 
// //     //      if (data.message == 'success'){
// //     //         toast.success('cart Cleared successfully', {
// //     //             position: "top-right",
// //     //             autoClose: false,
// //     //             hideProgressBar: false,
// //     //             closeOnClick: true,
// //     //             pauseOnHover: true,
// //     //             draggable: true,
// //     //             progress: undefined,
// //     //             theme: "light",
// //     //             });
// //     //      }
// //     //      navigate('/cart')
       
// //     //     return data;
      
// //     // }


// // 	if (isLoading) {
// // 		return <p>Loading ... </p>
// // 	}

// // 	return (
// // 		<div className="cart">
			
// // 			<div className="container">
// // 			<h1 className=' bordercolor  pb-1 ourProducts'>My Cart:</h1>

// // 				<div className="row">
// // 					<div className="cart-items row">

// // 						<div className="products col-sm-12 " id="products">
// // 							<div className="item custom-pink">
// // 								<div className="product-info">
// // 									<h2>Product</h2>
// // 								</div>
// // 								<div className="quantity ">
// // 									<h2>Quantity</h2>
// // 								</div>
// // 								<div className="price ">
// // 									<h2>Price</h2>
// // 								</div>
// // 								<div className="subtotal">
// // 									<h2>Subtotal</h2>
// // 								</div>
								
// // 							</div>


// //                             {
// //                               data?.products && data.products.length > 0? (
// //                                 data.products.map(
// //                                     (product)=>
// //                                     <div className="item" key={product._id}>
// // 								<div className="product-info">
// // 									<img className='img-fluid' src={product.details.mainImage.secure_url}/>
// // 									<div className="product-details">
// // 										<h2>{product.details.name}</h2>
										
// // 										<Link href="#" onClick={()=>removeItem(product.details._id)}>
// // 											<svg xmlns="http://www.w3.org/2000/svg"
// // 												width={24}
// // 												height={25}
// // 												viewBox="0 0 24 25"
// // 												fill="none">
// // 												<path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z" fill="#6C7275"/>
// // 											</svg>
// // 											remove
// // 										</Link>
// // 									</div>
// // 								</div>
// // 								<div className="quantity">
// // 									<button onClick={()=>decreaseQty(product.details._id)} className='me-2' >
// // 										<svg xmlns="http://www.w3.org/2000/svg"
// // 											width={16}
// // 											height={17}
// // 											viewBox="0 0 16 17"
// // 											fill="none">
// // 											<path d="M3.22852 8.5H12.5618" stroke="#121212" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
// // 										</svg>
// // 									</button>
// // 									<span>{product.quantity}</span>
// // 									<button onClick={()=>increaseQty(product.details._id)} className=' ms-2'>
// // 										<svg xmlns="http://www.w3.org/2000/svg"
// // 											width={16}
// // 											height={17}
// // 											viewBox="0 0 16 17"
// // 											fill="none">
// // 											<path fillRule="evenodd" clipRule="evenodd" d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z" fill="#121212"/>
// // 										</svg>
// // 									</button>
// // 								</div>
// // 								<div className="price">${product.details.price}</div>
// // 								<div className="subtotal price">${product.quantity*product.details.price}</div>
								

// // 							</div>
                               
// //                               )
// //                               ): <h2 className='CartEmpty'>"the cart is empty"</h2> 
// //                             }
// // 							{
// // 							cartCount>=1?<div className='d-flex justify-content-center'>
// // 							<Link className='btn fw-bold mb-3 p-2 border btn btn-custom w-25' to='/clearcart'> Clear </Link>	
// // 							{/* <button onClick={clearCart} className='btn btn-outline-info border w-25'>Clear Cart</button> */}
// // 							</div>: <></>
// // 							}
							
// // 						</div>

// // {
// // 	cartCount>0?
// // 		<div className="cart-summary col-sm-12 ms-2">
// // 							<h2>Cart summary</h2>
// // 							<div className="summery-items">
// // 								<div className="summary-item">
// // 									<div className="form-group">
// // 										<input type="radio"/>
// // 										<label>Free shipping</label>
// // 									</div>
// // 									<span>$0.00</span>
// // 								</div>
// // 								<div className="summary-item">
// // 									<div className="form-group">
// // 										<input type="radio"/>
// // 										<label>Express shipping</label>
// // 									</div>
// // 									<span>+$15.00</span>
// // 								</div>
// // 								<div className="summary-item">
// // 									<div className="form-group">
// // 										<input type="radio"/>
// // 										<label>Pick Up</label>
// // 									</div>
// // 									<span>%21.00</span>
// // 								</div>
								
// // 								<div className="checkout m-auto">
// // 									<Link to='/CreateOrder' className='btn fw-bold mb-3 p-2 border btn btn-customCart'>Check out</Link>
// // 								</div>
// // 							</div>
// // 						</div> :<p></p>
// // }

					

// // 					</div>


				
// // 				</div>
// // 			</div>
// // 		</div>
// // 	)
// // }

// // export default Cart
// import React, { useContext, useEffect, useState } from 'react';
// import './Cart.css';
// import axios from 'axios';
// import { CartContext } from '../context/CartFeatures';
// import { useQuery } from 'react-query';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import Loader from '../Loader/Loader';

// function Cart() {
//     const navigate = useNavigate();
//     const { getCartContext, removeItemContext } = useContext(CartContext);
// 		const [countCart, setcount] = useState(0)
//     const [productsData, setProductsData] = useState([]);

//     const getCart = async () => {
//         const res = await getCartContext();
// 				setcount(res.cart.products.length)
//         return res;
//     };

//     const { data, isLoading } = useQuery("Cart", getCart);

//     useEffect(() => {
//         const fetchProductDetails = async () => {
//             if (data?.cart?.products) {
//                 const productsWithDetails = [];
//                 for (const cartItem of data.cart.products) {
//                     try {
//                         const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/${cartItem.productId}`);
//                         const productWithDetail = {
//                             ...cartItem,
//                             details: response.data.product // Assuming your API response has the product details under `product`
//                         };
//                         productsWithDetails.push(productWithDetail);
//                     } catch (error) {
//                         console.error('Error fetching product details:', error);
//                     }
//                 }
//                 setProductsData(productsWithDetails);
//             }
//         };

//         fetchProductDetails();
//     }, [data]);

//     const removeItem = async (productId) => {
//         const res = await removeItemContext(productId);
// 				if(res) {
// 					toast.success('Item removed successfully')
// 				}
//         return res;
//     };

//     const increaseQty = async (productId) => {
//         const token = localStorage.getItem("userToken");
//         const { data } = await axios.setProductsData(`${import.meta.env.VITE_API_URL}/cart/UpdateQty/${productId}`, { 
//             "quantity":1,
//             "operator":"+"
//          }, {
//             headers: { Authorization: `AmanGRAD__${token}` }
//         });
//         return data;
//     };

//     const decreaseQty = async (productId) => {
//         const token = localStorage.getItem("userToken");
//         const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cart/UpdateQty/${productId}`, { 
//             "quantity":1,
//             "operator":"-"
//          }, {
//             headers: { Authorization: `AmanGRAD__${token}` }
//         });
//         console.log(data)
//         return data;
//     };

//     if (isLoading) {
//         return <Loader/>
//     }

//     return (
//         <div className="cart">
//             <div className="container">
//                 <h1 className='bordercolor cart-title'>My Cart: <p>~ {countCart} items ~ </p> </h1>
// 						    <div className="row">
//                     <div className="cart-items row">
//                         {
//                             countCart > 0 &&
//                         <div className="products col-sm-12" id="products">
//                             <div className="item">
//                                 <div className="product-info">
//                                     <h2>Product</h2>
//                                 </div>
//                                 <div className="quantity">
//                                     <h2>Quantity</h2>
//                                 </div>
//                                 <div className="price">
//                                     <h2>Price</h2>
//                                 </div>
//                                 <div className="subtotal">
//                                     <h2>Subtotal</h2>
//                                 </div>
//                             </div>

//                             {
//                                 productsData.length > 0 ? (
//                                     productsData.map((product) => (
//                                         <div className="item" key={product._id}>
//                                             <div className="product-info">
//                                                 <img className='img-fluid' src={product.details.MainImage.secure_url} alt={product.details.name} />
//                                                 <div className="product-details">
//                                                     <h2>{product.details.name}</h2>
//                                                     <button onClick={() => removeItem(product._id)} className=' text-danger'>
//                                                         Remove
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                             <div className="quantity d-flex align-items-baseline">
//                                                 <button onClick={() => decreaseQty(product._id)} className='me-2 buttonchangeQTY'>
//                                                     <svg xmlns="http://www.w3.org/2000/svg"
//                                                         width={16}
//                                                         height={17}
//                                                         viewBox="0 0 16 17"
//                                                         fill="none">
//                                                         <path d="M3.22852 8.5H12.5618" stroke="#121212" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
//                                                     </svg>
//                                                 </button>
//                                                 <span>{product.quantity}</span>
//                                                 <button onClick={() => increaseQty(product._id)} className='ms-2 buttonchangeQTY'>
//                                                     <svg xmlns="http://www.w3.org/2000/svg"
//                                                         width={16}
//                                                         height={17}
//                                                         viewBox="0 0 16 17"
//                                                         fill="none">
//                                                         <path fillRule="evenodd" clipRule="evenodd" d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z" fill="#121212" />
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                             <div className="price">${product.details.price}</div>
//                                             <div className="subtotal price">${product.quantity * product.details.price}</div>
//                                         </div>
//                                     ))
//                                 ) : <h2 className='CartEmpty'>The cart is empty</h2>
//                             }

//                             {countCart >= 1 &&
//                                 <div className='d-flex justify-content-center'>
//                                     <Link className='button-23 w-25' to='/clearcart'>Clear</Link>
//                                 </div>
//                             }
//                         </div>

//                         }
//                         </div>
//                         </div>
//                         </div>
//                         <ToastContainer />
//         </div>
//     );
// }

// export default Cart;
//                         // {countCart > 0 &&
//                         //     <div className="cart-summary col-sm-12 ms-2">
//                         //         <h2>Cart summary</h2>
//                         //         <div className="summery-items">
//                         //             <div className="summary-item">
//                         //                 <div className="form-group">
//                         //                     <input type="radio" id="free-shipping" name="shipping" />
//                         //                     <label htmlFor="free-shipping">Free shipping</label>
//                         //                 </div>
//                         //                 <span>$0.00</span>
//                         //             </div>
//                         //             <div className="summary-item">
//                         //                 <div className="form-group">
//                         //                     <input type="radio" id="express-shipping" name="shipping" />
//                         //                     <label htmlFor="express-shipping">Express shipping</label>
//                         //                 </div>
//                         //                 <span>$10.00</span>
//                         //             </div>
//                         //             <div className="summary-item total">
//                         //                 <h3>Total</h3>
//                         //                 <span>$</span>
//                         //             </div>
//                         //         </div>
//                         //         <div className="checkout-btn d-flex justify-content-center">
//                         //             <button className="button-23 w-25" >Proceed to Checkout</button>
//                         //         </div>
//                         //     </div>
//                         // }

// import React, { useState, useEffect, useContext } from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { CartContext } from '../context/CartFeatures';
// import { useNavigate } from 'react-router-dom';

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
//   const [countCart, setCount] = useState(0);
//   const [productsData, setProductsData] = useState([]);

//   const getCart = async () => {
//     const res = await getCartContext();
//     setCount(res.cart.products.length);
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
//               details: response.data.product, // Assuming your API response has the product details under `product`
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

//   const handleIncreaseQuantity = async (productId) => {
//     const updatedProducts = productsData.map((product) =>
//       product.productId === productId
//         ? { ...product, quantity: product.quantity + 1 }
//         : product
//     );
//     setProductsData(updatedProducts);
//     await updateItemQuantityContext(productId, updatedProducts.find(product => product.productId === productId).quantity);
//   };

//   const handleDecreaseQuantity = async (productId) => {
//     const updatedProducts = productsData.map((product) =>
//       product.productId === productId && product.quantity > 1
//         ? { ...product, quantity: product.quantity - 1 }
//         : product
//     );
//     setProductsData(updatedProducts);
//     await updateItemQuantityContext(productId, updatedProducts.find(product => product.productId === productId).quantity);
//   };

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
//             productsData.map((product) => (
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
//                     <button onClick={() => handleDecreaseQuantity(product.productId)}>-</button>
//                     <span>{product.quantity}</span>
//                     <button onClick={() => handleIncreaseQuantity(product.productId)}>+</button>
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

import React, { useState, useEffect, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CartContext } from '../context/CartFeatures.jsx';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx'
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
`;

const ProductsSection = styled.div`
  flex: 2;
  padding: 20px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SummarySection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemCount = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #555;
`;

const CouponInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  img {
    width: 50px;
    height: 50px;
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
`;

const Cart = () => {
  const navigate = useNavigate();
  const { getCartContext, removeItemContext, updateItemQuantityContext } = useContext(CartContext);
  const [countCart, setCountCart] = useState(0);
  const [productsData, setProductsData] = useState([]);

  const getCart = async () => {
    const res = await getCartContext();
    setCountCart(res.cart.products.length);
    return res;
  };

  const { data, isLoading } = useQuery("Cart", getCart);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (data?.cart?.products) {
        const productsWithDetails = [];
        for (const cartItem of data.cart.products) {
          try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/${cartItem.productId}`);
            const productWithDetail = {
              ...cartItem,
              details: response.data.product, // Assuming your API response has the product details under `product`
            };
            productsWithDetails.push(productWithDetail);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        }
        setProductsData(productsWithDetails);
      }
    };

    fetchProductDetails();
  }, [data]);

  const handleUpdateQuantity = async (productId, quantityChange, operator) => {
    const productToUpdate = productsData.find(product => product.productId === productId);

    let updatedQuantity;
      if (operator === '-') {
      updatedQuantity = productToUpdate.quantity - quantityChange;
      if (updatedQuantity < 1) {
        updatedQuantity = 1; 
        return;
      }
    }

    await updateItemQuantityContext(productId, quantityChange, operator);
  };

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <GlobalStyle />
      <CartContainer>
        {/* Left side: Products */}
        <ProductsSection>
          <Title>
            Products <ItemCount>({countCart} items)</ItemCount>
          </Title>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            productsData.map(product => (
              <ProductItem key={product.productId}>
                <img src={product.details.MainImage.secure_url} alt={product.details.name} />
                <div className="details">
                  <h4>{product.details.name}</h4>
                  <p>Price: ${product.details.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="actions">
                  <button onClick={() => removeItemContext(product.productId)}>Remove</button>
                  <div className="quantity-controls">
                    <button onClick={() => handleUpdateQuantity(product.productId, 1, '-')}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(product.productId, 1, '+')}>+</button>
                  </div>
                </div>
              </ProductItem>
            ))
          )}
        </ProductsSection>

        {/* Right side: Summary and Coupon */}
        <SummarySection>
          <Title>Summary</Title>
          {/* Summary details will go here */}
          
          <h3>Coupon</h3>
          <CouponInput type="text" placeholder="Enter coupon code" />
        </SummarySection>
      </CartContainer>
    </>
  );
};

export default Cart;
