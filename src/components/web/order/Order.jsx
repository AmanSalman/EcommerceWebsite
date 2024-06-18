import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import './order.css'
import Loader from '../Loader/Loader';

export default function Order() {
    
    const getOrders = async ()=>{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
        {headers:{Authorization:`Tariq__${token}`}}) 
        return data.orders;
    }

    const {data,isLoading} = useQuery("order details",getOrders);
    if(isLoading){
        return <Loader/>
    }
  return (
    <div className=' container mt-3'>
      <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Orders Details:</h1>
        <div>
            {
               data?.map((order,index)=>

                 <div key={index} className='border border-color p-3 order'>
                    <h2>Phone: {order.phoneNumber}</h2>
                    <h3>Address : {order.address}</h3>
                    <h4>final Price: {order.finalPrice} $</h4>
                    <span className=' fw-bold status text-danger'>Status: {order.status}</span>
                 </div>
               ) 
            }
        </div>
    </div>

  )
}
