import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

export default function Order() {
    
    const getOrders = async ()=>{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
        {headers:{Authorization:`Tariq__${token}`}}) 
        return data.orders;
    }

    const {data,isLoading} = useQuery("order details",getOrders);
    if(isLoading){
        return <h1>Loading ... </h1>
    }
  return (
    <div className=' container mt-3'>
        <h1>Orders Details:</h1>
        <div>
            {
               data?.map((order,index)=>

                 <div key={index} className='border p-3'>
                    <h2>Phone: {order.phoneNumber}</h2>
                    <h3>Address : {order.address}</h3>
                    <h4>final Price: {order.finalPrice} $</h4>
                    <span className=' fw-bold text-danger'>Status: {order.status}</span>
                 </div>
               ) 
            }
        </div>
    </div>

  )
}
