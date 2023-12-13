import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartFeatures';

export default function ProductDetails() {

    const {categoryId} = useParams();
    const {addToCart} = useContext(CartContext)
    const getDetails = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${categoryId}`);
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
    <div className='container mt-5 '>
        <div className=' d-flex align-items-center flex-column border p-5 '>
       <img className=' img-fluid w-25' src={data.mainImage.secure_url}/>
        <h4 >{data.name}</h4>
        <h5 className='text-success'>Price : {data.price}</h5>
        <button className='btn btn-outline-info' onClick={()=>addTocart(data._id)}>Add to cart</button>
        </div>
    </div>
  )
}
