import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function ClearCart() {

    const navigate = useNavigate();
    const clearCart = async ()=>{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,{},
        {headers:{Authorization:`Tariq__${token}`}})
         if (data.message == 'success'){
            toast.success('cart Cleared successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
         }
         navigate('/cart')
       
        return data;
      
    }

     const {data,isLoading} = useQuery("ClearCart",clearCart);

    if(isLoading){
        return <h1>Clearing Cart...</h1>
    }

  return (
    <>
    </>
  )
}
