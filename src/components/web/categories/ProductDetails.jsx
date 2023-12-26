import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartFeatures';
import {Link} from 'react-router-dom';
import './details.css'
import photo from './photos/user-3296.png'
export default function ProductDetails() {

    const {ProductId} = useParams();
    const {addToCart} = useContext(CartContext)
    const getDetails = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${ProductId}`);
        console.log(data.product)

        return data.product;
    }

    
    const addTocart = async (ProductId) =>{
        addToCart(ProductId);
    }

    const {data,isLoading} = useQuery('Product_details' , getDetails);

    if(isLoading){
        return <h2>Loading...</h2>
    }
  return (
    <>
    
    <div className='  mb-2 productdetails'>
 <div className='container d-flex justify-content-center'>
      <div className=' d-flex justify-content-center '>
      <img src={data.mainImage.secure_url} className='h-50 me-2' alt="Product Image" />
       <div className='border border-black p-4'> 
      
      <h1 className='borderPink'>About Our Product:</h1>
      <h2 classname="product-title">{data.name}</h2>
      <p className='border-color p-2'> <span className=' text-dark'>Product Description :</span> <br />
 {data.description}</p>

    <p className=' border text-black border-black rounded-1 p-1 mb-2'>${data.price}</p>
    <button className='text-decoration-none fw-bold btn border btn-custom  mb-2 width-btn' onClick={()=>addTocart(data._id)}>Add to cart</button>
      </div>

     
      </div>
    </div>
    </div>

    <div className=' container'>
<h1 className=' bordercolor mb-4 pb-1 ourProducts'>Our Clients Opinions:</h1>
<div className='row'>

{
  data.reviews.map((review)=>
  <div className=' col-md-12 border border-2 p-2 border-black mb-2' key={review._id}>
    <div className=''>
    <div className=' img-fluid'>
    <img src={photo} className='me-2' />
    <span>{review.createdBy.userName}</span>
    
    </div>
    
    <p> {review.rating} ☆ </p>
      <p>{review.comment}</p>
    </div>
  </div>
  )
}
</div>
    </div>

   

    </>


   


//     <div className='container d-flex'>
//     <div classname="product-image">
//       <img src={data.mainImage.secure_url} className='h-50' alt="Product Image" />
//     </div>

//     <div classname="product-details">
    //   <h1 classname="product-title">{data.name}</h1>
    //   <p classname="description-text">{data.description}</p>
    // <p classname="product-price">${data.price}</p>
    // <button className='btn btn-outline-info buy-button' onClick={()=>addTocart(data._id)}>Add to cart</button>
//     </div>    
// </div>


//    <div className="container d-flex justify-content-between">
//     <img src={data.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom product-image'/>
//   <div className="product-details">
//     <h1 className="product-title">{data.name}</h1>
//     <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis nec est rhoncus finibus. Curabitur eu hendrerit urna. Integer id arcu ut lacus ullamcorper auctor. Proin laoreet, ligula id tristique suscipit, elit ex vulputate arcu, ac sodales mauris nunc non ex.</p>
//     <p className="price">${data.price}</p>
//     <button className='btn btn-outline-info buy-button' onClick={()=>addTocart(data._id)}>Add to cart</button>
//   </div>
// </div>




    // <div className="col-4 mb-3">
	// 			   <div className="card h-100 w-100">
	// 				<div className=' d-flex justify-content-center'>
	// 					<img src={data.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom'/>	
	// 				</div>
				
	// 				 <div className="card-body  mb-2 p-2">
	// 					<div className='d-flex justify-content-between flex-row body-color rounded-2 p-2 mb-2'>

	// 				   <h3 className="card-title">{data.name}</h3>
	// 				  {/* <p className="card-description"></p> */}
	// 				   <p className="price d-inline-block body-color">${data.price}</p>
	// 					</div>
	// 					<div className='d-flex flex-column align-items-center'>
	// 				 <Link to={
	// 				`/Review/${
	// 					data._id
	// 				}`
	// 			}
	// 			className='text-decoration-none fw-bold btn border btn-custom w-50 mb-2'>Create Review</Link>
    //              <button className='btn btn-outline-info' onClick={()=>addTocart(data._id)}>Add to cart</button>
	// 				 </div>
					
	// 				 </div>
					
	// 		   </div>
	// 			</div>
    // <div className='container mt-5 '>
    //     <div className=' d-flex align-items-center flex-column border p-5 '>
    //    <img className=' img-fluid w-25' src={data.mainImage.secure_url}/>
    //     <h4 >{data.name}</h4>
    //     <h5 className='text-success'>Price : {data.price}</h5>
    //     <button className='btn btn-outline-info' onClick={()=>addTocart(data._id)}>Add to cart</button>
    //     </div>
    // </div>
  )
}
