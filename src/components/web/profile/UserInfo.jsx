// UserInfo.js
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/User';
import Loader from '../Loader/Loader';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function UserInfo() {
  const { userData} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [orders,setOrders] = useState([])
  const getOrders = async ()=>{
    try {
      setLoading(true);
      const token = localStorage.getItem("userToken");
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
      {headers:{Authorization:`AmanGRAD__${token}`}}) 
      setOrders(data.orders)
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
      toast.error(error.data.message)
    }finally{
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    getOrders();
  },[])
  if (loading) {
    return <Loader />;
  }

  return (
    <div className='mt-3 d-flex flex-column flex-wrap userInfo'>
      <h1 className='orders'>Orders:</h1>
      <h2>{userData?.userName}</h2>

      <div className="accordion" id="accordionExample">
        {orders?.map((order, index) => {
          const collapseId = `collapse${index}`;
          const headingId = `heading${index}`;
          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  Order #{index + 1}
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className='border border-color p-3 '>
                    <p>Phone : {order.phone}</p>
                    <p>Address : {order.address}</p>
                    <p>Final Price : {order.finalPrice}$</p>
                    <span className='status text-danger'>Status : {order.status}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
