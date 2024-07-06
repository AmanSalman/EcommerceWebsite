import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader';
export default function ClearCart() {
const [loading, setisloading]= useState(true)
    const navigate = useNavigate();
    const clearCart = async ()=>{
      try {
        setisloading(true);
          const token = localStorage.getItem("userToken");
          const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/cart/`,{},
          {headers:{Authorization:`AmanGRAD__${token}`}})
           if (data.message == 'success'){
              toast.success('cart Cleared successfully')
           }
           navigate('/cart')
        
      } catch (error) {
        setisloading(false)
        toast.error('Error while clearing cart')
      }finally {
        setisloading(false);
      }
    }

    useEffect(()=>{
       clearCart();
    },[])

    if(loading){
        return <Loader/>
    }

  return (
    <>
    </>
  )
}
