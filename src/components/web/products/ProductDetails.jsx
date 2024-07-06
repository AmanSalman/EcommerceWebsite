// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartFeatures";
// import { Link } from "react-router-dom";
// import "./details.css";
// import Loader from './../Loader/Loader';
// import photo from "./photos/user-3296.png";
// export default function ProductDetails() {
//   const { ProductId } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const getDetails = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/product/${ProductId}`
//     );

//     console.log(data);
//     setMainImage(data.product.MainImage.secure_url);
//     return data.product;
//   };

//   const addTocart = async (ProductId) => {
//     addToCart(ProductId);
//   };

//   const { data, isLoading } = useQuery("Product_details", getDetails);
//   const [mainImage, setMainImage] = useState(null);

//   if (isLoading) {
//     return <Loader/>
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <nav aria-label="breadcrumb">
//           <ol class="breadcrumb">
//             <li class="breadcrumb-item active" aria-current="page">
//               <Link to={'/products'} className="main-color Link-text-deco">
//               Products
//               </Link>
//             </li>
//             <li className="breadcrumb-item main-color" aria-current="page">
//               Products Details
//             </li>
//             <li className="breadcrumb-item main-color" aria-current="page">
//               {data.name}
//             </li>
//           </ol>
//         </nav>

//         <div className="row">
//           <div className="col-md-6">
//             <img
//               src={mainImage}
//               className="w-100 img-fluid mb-3"
//               alt="Product Image"
//             />
//             <div className="d-flex flex-wrap">
//               <img
//                 src={data.MainImage.secure_url}
//                 className="w-25 me-2 img-fluid"
//                 alt="Main Image"
//                 onClick={() => setMainImage(data.MainImage.secure_url)}
//                 style={{ cursor: "pointer" }}
//               />
//               {data.subImage.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image.secure_url}
//                   className="w-25 me-2 img-fluid"
//                   alt={`Sub Image ${index}`}
//                   onClick={() => setMainImage(image.secure_url)}
//                   style={{ cursor: "pointer" }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="p-4">
//               <h2 className="product-title">{data.name}</h2>
//               <p className="p-2">
//                 {data.description}
//               </p>
//               <p className="text-black p-1">
//                 ${data.FinalPrice}
//               </p>
//               <button
//                 className="button-23 text-decoration-none">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className=' container'>
// <h1 className=' bordercolor mb-4 pb-1 ourProducts'>Our Clients Opinions:</h1>
// <div className='row'>

// {
//   data.reviews.map((review)=>
//   <div className=' col-md-12 border border-2 p-2 border-black mb-2' key={review._id}>
//     <div className=''>
//     <div className=' img-fluid'>
//     <img src={photo} className='me-2' />
//     <span>{review.createdBy.userName}</span>
    
//     </div>
    
//     <p> {review.rating} ☆ </p>
//       <p>{review.comment}</p>
//     </div>
//   </div>
//   )
// }
// </div>
//     </div> */}
//     </>

//     //     <div className='container d-flex'>
//     //     <div classname="product-image">
//     //       <img src={data.mainImage.secure_url} className='h-50' alt="Product Image" />
//     //     </div>

//     //     <div classname="product-details">
//     //   <h1 classname="product-title">{data.name}</h1>
//     //   <p classname="description-text">{data.description}</p>
//     // <p classname="product-price">${data.price}</p>
//     // <button className='btn btn-outline-info buy-button' onClick={()=>addTocart(data._id)}>Add to cart</button>
//     //     </div>
//     // </div>

//     //    <div className="container d-flex justify-content-between">
//     //     <img src={data.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom product-image'/>
//     //   <div className="product-details">
//     //     <h1 className="product-title">{data.name}</h1>
//     //     <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis nec est rhoncus finibus. Curabitur eu hendrerit urna. Integer id arcu ut lacus ullamcorper auctor. Proin laoreet, ligula id tristique suscipit, elit ex vulputate arcu, ac sodales mauris nunc non ex.</p>
//     //     <p className="price">${data.price}</p>
//     //     <button className='btn btn-outline-info buy-button' onClick={()=>addTocart(data._id)}>Add to cart</button>
//     //   </div>
//     // </div>

//     // <div className="col-4 mb-3">
//     // 			   <div className="card h-100 w-100">
//     // 				<div className=' d-flex justify-content-center'>
//     // 					<img src={data.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom'/>
//     // 				</div>

//     // 				 <div className="card-body  mb-2 p-2">
//     // 					<div className='d-flex justify-content-between flex-row body-color rounded-2 p-2 mb-2'>

//     // 				   <h3 className="card-title">{data.name}</h3>
//     // 				  {/* <p className="card-description"></p> */}
//     // 				   <p className="price d-inline-block body-color">${data.price}</p>
//     // 					</div>
//     // 					<div className='d-flex flex-column align-items-center'>
//     // 				 <Link to={
//     // 				`/Review/${
//     // 					data._id
//     // 				}`
//     // 			}
//     // 			className='text-decoration-none fw-bold btn border btn-custom w-50 mb-2'>Create Review</Link>
//     //              <button className='btn btn-outline-info' onClick={()=>addTocart(data._id)}>Add to cart</button>
//     // 				 </div>

//     // 				 </div>

//     // 		   </div>
//     // 			</div>
//     // <div className='container mt-5 '>
//     //     <div className=' d-flex align-items-center flex-column border p-5 '>
//     //    <img className=' img-fluid w-25' src={data.mainImage.secure_url}/>
//     //     <h4 >{data.name}</h4>
//     //     <h5 className='text-success'>Price : {data.price}</h5>
//     //     <button className='btn btn-outline-info' onClick={()=>addTocart(data._id)}>Add to cart</button>
//     //     </div>
//     // </div>
//   );
// }
// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartFeatures";
// import { Link } from "react-router-dom";
// import { CiHeart } from "react-icons/ci"; // Importing the CiHeart icon
// import "./details.css";
// import Loader from './../Loader/Loader';
// import photo from "./photos/user-3296.png";

// export default function ProductDetails() {
//   const { ProductId } = useParams();
//   const { addToCart, addToWishlist } = useContext(CartContext);
//   const [mainImage, setMainImage] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("Red");
//   const [selectedSize, setSelectedSize] = useState("M");

//   const getDetails = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/product/${ProductId}`
//     );
//     setMainImage(data.product.MainImage.secure_url);
//     return data.product;
//   };

//   const { data, isLoading } = useQuery("Product_details", getDetails);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <div className="container mt-5">
//       <nav aria-label="breadcrumb">
//         <ol className="breadcrumb">
//           <li className="breadcrumb-item">
//             <Link to="/products" className="main-color Link-text-deco">
//               Products
//             </Link>
//           </li>
//           <li className="breadcrumb-item main-color">
//             Products Details
//           </li>
//           <li className="breadcrumb-item main-color">
//             {data.name}
//           </li>
//         </ol>
//       </nav>

//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={mainImage}
//             className="w-100 img-fluid mb-3"
//             alt="Product Image"
//           />
//           <div className="d-flex flex-wrap">
//             <img
//               src={data.MainImage.secure_url}
//               className="w-25 me-2 img-fluid"
//               alt="Main Image"
//               onClick={() => setMainImage(data.MainImage.secure_url)}
//               style={{ cursor: "pointer" }}
//             />
//             {data.subImage.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.secure_url}
//                 className="w-25 me-2 img-fluid"
//                 alt={`Sub Image ${index}`}
//                 onClick={() => setMainImage(image.secure_url)}
//                 style={{ cursor: "pointer" }}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="p-4">
//             <h2 className="product-title">{data.name}</h2>
//             <p className="p-2">{data.description}</p>

//             <div className="price-info">
//               <p className="final-price">₪{data.FinalPrice}</p>
//               <p className="old-price"><del>₪{data.price}</del></p>
//               <p className="discount"> - {data.discount}% off</p>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Color:</label>
//               <div className="color-options">
//                 {["Red", "Blue", "Green"].map((color) => (
//                   <div
//                     key={color}
//                     className={`color-ball ${color.toLowerCase()} ${selectedColor === color ? "active" : ""}`}
//                     onClick={() => setSelectedColor(color)}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Size:</label>
//               <div className="size-options">
//                 {["S", "M", "L"].map((size) => (
//                   <div
//                     key={size}
//                     className={`size-ball ${selectedSize === size ? "active" : ""}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="d-flex gap-3">
//               <button
//                 className="button-23 text-decoration-none"
//                 onClick={() => addToCart(data._id)}
//               >
//                 Add to Cart
//               </button>
//               <CiHeart
//                 size={32}
//                 className="wishlist-icon"
//                 onClick={() => addToWishlist(data._id)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="container mt-4">
//         <h1 className="bordercolor mb-4 pb-1 ourProducts">Our Clients Opinions:</h1>
//         <div className="row">
//           {data.reviews.map((review) => (
//             <div className="col-md-12 border border-2 p-2 border-black mb-2" key={review._id}>
//               <div className="d-flex align-items-center">
//                 <img src={photo} className="me-2" alt="User" />
//                 <span>{review.createdBy.userName}</span>
//               </div>
//               <p>{review.rating} ☆</p>
//               <p>{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// }


import axios from "axios";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartFeatures";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci"; // Importing the CiHeart icon
import "./details.css";
import Loader from './../Loader/Loader';
import photo from "./photos/user-3296.png";
import { FaLock, FaShippingFast, FaUndoAlt } from "react-icons/fa";

export default function ProductDetails() {
  const { ProductId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");


  const getDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/product/${ProductId}`
    );
    const subImagesWithMain = [data.product.MainImage, ...data.product.subImage];
    setMainImage(data.product.MainImage.secure_url);

    console.log({ ...data.product, subImage: subImagesWithMain })
    return { ...data.product, subImage: subImagesWithMain };
  };

  const { data, isLoading } = useQuery("Product_details", getDetails);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>

    {/* <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/products" className="main-color Link-text-deco">
              Products
            </Link>
          </li>
          <li className="breadcrumb-item main-color">
            Products Details
          </li>
          <li className="breadcrumb-item main-color active">
            {data.name}
          </li>
        </ol>
      </nav>

      <div className="row mt-5 flex-wrap">
        <div className="col-md-6">
          <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
          <img
              src={mainImage}
              className="w-50 img-fluid mb-3"
              alt="Product Image"
            />
            <div className="d-flex justify-content-center">
            {data.subImage.map((image, index) => (
              <img
                key={index}
                src={image.secure_url}
                className={`w-25 me-2 img-fluid ${mainImage === image.secure_url ? "active border border-black p-2" : ""}`}
                alt={`Sub Image ${index}`}
                onClick={() => setMainImage(image.secure_url)}
                style={{ cursor: "pointer" }}
              />
            ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <h2 className="product-title">{data.name}</h2>
            <p className="p-2">{data.description}</p>

            <div className="price-info">
              <p className="final-price">₪{data.FinalPrice}</p>
              <p className="old-price"><del>₪{data.price}</del></p>
              <p className="discount"> - {data.discount}% off</p>
            </div>

            <div className="mb-3">
              <label className="form-label">Color:</label>
              <div className="color-options">
                {["Red", "Blue", "Green"].map((color) => (
                  <div
                    key={color}
                    className={`color-ball ${color.toLowerCase()} ${selectedColor === color ? "active" : ""}`}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Size:</label>
              <div className="size-options">
                {["S", "M", "L"].map((size) => (
                  <div
                    key={size}
                    className={`size-ball ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-between align-items-center">
              <button
                className="button-23 text-decoration-none"
                onClick={() => addToCart(data._id)}
              >
                Add to Cart
              </button>
              <CiHeart
                size={40}
                className="wishlist-icon"
                onClick={() => addToWishlist(data._id)}
              />
            </div>
            <div className="polices mt-3">
            <div className="d-flex align-items-center flex-column">
              <FaShippingFast size={20} color="#ad8c74"  className="me-2" />
              <span>Free Shipping</span>
          </div>
            <div className="d-flex align-items-center flex-column">
              <FaUndoAlt size={20} color="#ad8c74"  className="me-2" />
              <span>Return Policy</span>
          </div>
            <div className="d-flex align-items-center flex-column">
              <FaLock size={20} color="#ad8c74" className="me-2" />
              <span>Shopping Security</span>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div> */}


<div className="container mt-5">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/products" className="main-color text-decoration-none">
          Products
        </Link>
      </li>
      <li className="breadcrumb-item main-color">
        Products Details
      </li>
      <li className="breadcrumb-item main-color active">
        {data.name}
      </li>
    </ol>
  </nav>

  <div className="grid-container mt-5">
    <div className="grid-item">
      <div className="image-container">
        <img
          src={mainImage}
          className="main-image mb-3"
          alt="Product Image"
        />
        <div className="sub-image-container">
          {data.subImage.map((image, index) => (
            <img
              key={index}
              src={image.secure_url}
              className={`sub-image ${mainImage === image.secure_url ? "active border border-black p-2" : ""}`}
              alt={`Sub Image ${index}`}
              onClick={() => setMainImage(image.secure_url)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="grid-item">
      <div className="details">
        <h2 className="product-title">{data.name}</h2>
        <p className="description">{data.description}</p>

        <div className="price-info">
          <p className="final-price">₪{data.FinalPrice}</p>
          <p className="old-price"><del>₪{data.price}</del></p>
          <p className="discount"> - {data.discount}% off</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Color:</label>
          <div className="color-options">
            {["Red", "Blue", "Green"].map((color) => (
              <div
                key={color}
                className={`color-ball ${color.toLowerCase()} ${selectedColor === color ? "active" : ""}`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Size:</label>
          <div className="size-options">
            {["S", "M", "L"].map((size) => (
              <div
                key={size}
                className={`size-ball ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <button
            className="button-23 text-decoration-none"
            onClick={() => addToCart(data._id)}
          >
            Add to Cart
          </button>
          <CiHeart
            size={40}
            className="wishlist-icon"
            onClick={() => addToWishlist(data._id)}
          />
        </div>
       
      </div>
    </div>
  </div>
</div>


    </>
   
  );
}
