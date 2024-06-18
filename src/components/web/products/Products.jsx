// // import axios from 'axios'
// // import React, {useEffect, useState} from 'react'
// // import  './products.css';
// // import {Link} from 'react-router-dom';
// // import Loader from '../Loader/Loader';


// // export default function Products() {

// // 	const [currentPage, setCurrentPage] = useState(1);
// // 	const [totalPages, setTotalPages] = useState(0);
// // 	const [products, setProducts] = useState([]);
// // 	const [isLoading, setIsLoading] = useState(true)

// // 	const getProducts = async () => {
// // 		try {
// // 			const {data} = await axios.get(`${
// // 				import.meta.env.VITE_API_URL
// // 			}/product?page=${currentPage}&limit=${3}`);
// // 			setTotalPages(data.page);
// // 			setProducts(data.products)
// // 			setIsLoading(false)
// // 			console.log(totalPages)
// // 			console.log(data)
// // 		} catch (error) {
// // 			console.log(error);
// // 		} finally {
// // 			setIsLoading(false)
// // 		}

// // 	}
// // 	useEffect(() => {
// // 		console.log(currentPage)
// // 		getProducts();
// // 	}, [currentPage]);

// // 	const handlePagination = (pageNum) => { // console.log(currentPage)
// // 		if (currentPage >= 1) {
// // 			setCurrentPage((currentPage) => {
// // 				return currentPage + pageNum;
// // 			});

// // 		}

// // 	};

// // 	if(isLoading){
// // 		return <Loader/>
// // 		}

// // 	return (

// // <>

// // <div className=' container mt-5 d-flex flex-column'>
// // <h1 className=' bordercolor'>Our Products:</h1>
// // 	<div className='row'>
// // 		{
// // 		products ?. map((product) =>
	
		
		
// // 		<div className="col-md-4 col-sm-12 mb-3" key={product._id}>
// // 			<Link className=' text-decoration-none' to={`/product/${product._id}`}>
			
// // 				   <div className="card h-100 w-100">
// // 					 <div className="card-body mb-2 p-2 justify-content-between">
// // 						<div className=' d-flex justify-content-center'>
// // 						<img src={product.MainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom'/>
// // 						{product.discount && 
// //                           <span className='discount-label'>
// //                              {product.discount}%
// //                           </span>}	
// // 					</div>
// // 								<h3 className="card-title text-uppercase">{product.name}</h3>
// // 					  {/* <p className="card-description">{product.description}</p> */}
// // 						<div className='rounded-2 p-2 mb-2'>
// // 							<div className='d-flex justify-content-between flex-row mb-1'>
// // 					   <p className="price d-inline-block">${product.price}</p>
// // 							</div>
					   
// // 					   <div className='d-flex flex-column align-items-center'>
// // 					 {/* <Link to={
// // 					`/Review/${
// // 						product._id
// // 					}`
// // 				}
// // 				className='text-decoration-none fw-bold btn border btn-custom w-50 mb-2'>Create Review</Link> */}

// // <Link className='button-23 w-100 add-to-cart' >Add to cart</Link>
// // 					 </div>
// // 						</div>
						
					
// // 					 </div>
					
// // 			   </div>
			
// // 			</Link>
// // 				</div>
			
		
// // 		)
// // 	} </div>
// // </div>
// // <div className=' d-flex justify-content-center'>
// // 	<button onClick={
// // 			() => handlePagination(-1)
// // 		}
// // 		disabled={
// // 			currentPage === 1
// // 	} className='btn mb-3 p-2 border btn btn-custom me-4'>
// // 		Previous Page
// // 	</button>
// // 	<button onClick={
// // 			() => handlePagination(1)
// // 		}
// // 		disabled={
// // 			currentPage === totalPages
// // 	} className='btn mb-3 p-2 border btn btn-custom'>
// // 		Next Page
// // 	</button>
// // </div>
// // </>


// // // 		<div className="container">
// // //   <div className="row">
// // //     <div className="col-4">
// // //       <div className="card">
// // //         <img src="product1.jpg" alt="Product 1" />
// // //         <div className="card-body">
// // //           <h3 className="card-title">Product Title 1</h3>
// // //           <p className="card-description">Description of Product 1 goes here. You can add more details if needed.</p>
// // //           <p className="price">$19.99</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // // 	<div className="col-4">
// // //       <div className="card">
// // //         <img src="product1.jpg" alt="Product 1" />
// // //         <div className="card-body">
// // //           <h3 className="card-title">Product Title 1</h3>
// // //           <p className="card-description">Description of Product 1 goes here. You can add more details if needed.</p>
// // //           <p className="price">$19.99</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     <div className="col-4">
// // //       <div className="card">
// // //         <img src="product2.jpg" alt="Product 2" />
// // //         <div className="card-body">
// // //           <h3 className="card-title">Product Title 2</h3>
// // //           <p className="card-description">Description of Product 2 goes here. You can add more details if needed.</p>
// // //           <p className="price">$29.99</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </div>

// // 	)
// // }
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './products.css';
// import { Link } from 'react-router-dom';
// import Loader from '../Loader/Loader';

// export default function Products() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const getProducts = async () => {
//     try {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}&limit=${6}`);
//       setTotalPages(data.page);
//       setProducts(data.products);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, [currentPage]);

//   const handlePagination = (pageNum) => {
//     if (currentPage >= 1) {
//       setCurrentPage((currentPage) => currentPage + pageNum);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <div className="container mt-5 d-flex flex-column">
//         <h1 className="bordercolor">Our Products:</h1>
//         <div className="row">
//           {products?.map((product) => (
//             <div className="col-md-4 col-sm-12 mb-3 position-relative" key={product._id}>
//               {product.discount && (
//                 <span className="discount-label">
//                   {product.discount}% OFF
//                 </span>
//               )}
//               <Link className="text-decoration-none" to={`/product/${product._id}`}>
//                 <div className="card h-100 shadow-sm">
//                   <img
//                     src={product.MainImage.secure_url}
//                     className="card-img-top img-fluid product-img"
//                     alt={product.name}
//                   />
//                   <div className="card-body">
//                     <h3 className="card-title text-uppercase">{product.name}</h3>
//                     <p className="card-description">{product.description}</p>
//                     {product.discount ? (
//                       <div className="price-section">
//                         <p className="final-price">${product.FinalPrice}</p>
//                         <p className="old-price"><del>${product.price}</del></p>
//                       </div>
//                     ) : (
//                       <p className="price">${product.price}</p>
//                     )}
//                     <Link to={`/product/${product._id}`} className="btn btn-primary w-100 mt-3">
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="d-flex justify-content-center">
//         <button
//           onClick={() => handlePagination(-1)}
//           disabled={currentPage === 1}
//           className="btn mb-3 p-2 border btn-custom me-4"
//         >
//           Previous Page
//         </button>
//         <button
//           onClick={() => handlePagination(1)}
//           disabled={currentPage === totalPages}
//           className="btn mb-3 p-2 border btn-custom"
//         >
//           Next Page
//         </button>
//       </div>
//     </>
//   );
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import styled from 'styled-components';

// Styled components for card layout
const CardContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardColumn = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
`;

const Card = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
  perspective: 1200px;
  transition: ease all 0.5s;
  &:hover .cover {
    transform: rotateX(0deg) rotateY(-180deg);
  }
`;

const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
  transition: ease all 0.5s;
  &::before {
    content: '';
    position: absolute;
    border: 5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    transform-style: preserve-3d;
    transition: ease all 0.5s;
    transform: translateZ(0px);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    transition: ease all 0.3s;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h3`
  font-weight: 600;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  transform-style: preserve-3d;
  transition: ease all 0.5s;
  z-index: 3;
  font-size: 1.5em;
  transform: translateZ(0px);
`;

const Price = styled.p`
  font-weight: 200;
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  transform-style: preserve-3d;
  transition: ease all 0.5s;
  z-index: 4;
  font-size: 1.2em;
  transform: translateZ(0px);
`;

const DiscountLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #ff5f5f;
  color: white;
  padding: 5px 10px;
  font-size: 1.2em;
  font-weight: 600;
`;

const CardBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #ad8c74;
  transform-style: preserve-3d;
  transition: ease all 0.5s;
  transform: translateZ(-1px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  a {
    transform-style: preserve-3d;
    transition: ease transform 0.5s, ease background 0.5s;
    transform: translateZ(-1px) rotatey(-180deg);
    background: transparent;
    border: 1px solid white;
    font-weight: 200;
    font-size: 1em;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    &:hover {
      background-color: #e5dfda;
      color: #ad8c74;
    }
  }
`;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch products from API
  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}&limit=${6}`);
      setTotalPages(data.page);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Fetch products on component mount and when currentPage changes
  useEffect(() => {
    getProducts();
  }, [currentPage]);

  // Function to handle pagination
  const handlePagination = (pageNum) => {
    if (currentPage >= 1) {
      setCurrentPage((currentPage) => currentPage + pageNum);
    }
  };

  // Display loader while fetching data
  if (isLoading) {
    return <Loader />;
  }

  return (
    <CardContainer className="container mt-5 d-flex flex-column">
       <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/products" className="main-color text-decoration-none">
          Products 
        </Link>
      </li>
      <li className="breadcrumb-item main-color">
      </li>
    </ol>
  </nav>
      <h1 className="bordercolor">Our Products:</h1>
      <CardRow className="row">
        {products.map((product) => (
          <CardColumn key={product._id} className="col-md-4 col-sm-12 mb-3 position-relative">
            <Card>
              <Cover className="cover" style={{ backgroundImage: `url(${product.MainImage.secure_url})` }}>
                {product.discount && (
                  <DiscountLabel>{product.discount}% OFF</DiscountLabel>
                )}
                <Title>{product.name}</Title>
                <Price>${product.price}</Price>
                <CardBack className="card-back">
                  <Link to={`/product/${product._id}`}>View Details</Link>
                  <Link to={`/addtocart`}>Add To Cart</Link>
                </CardBack>
              </Cover>
            </Card>
          </CardColumn>
        ))}
      </CardRow>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => handlePagination(-1)}
          disabled={currentPage === 1}
          className="mb-3 p-2 button-23 me-4"
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePagination(1)}
          disabled={currentPage === totalPages}
          className="mb-3 p-2 button-23"
        >
          Next Page
        </button>
      </div>
    </CardContainer>
  );
}
