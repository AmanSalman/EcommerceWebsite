import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import { Link } from 'react-router-dom';
import photo from "./woman (1).png"
import Loader from '../Loader/Loader';
export default function UserInfo() {

    const {userData,isLoading} = useContext(UserContext);
    
    if(isLoading){
      return <Loader/>
    }
  return (
    <div className='mt-5 d-flex flex-column flex-wrap '> 
    <img className='mb-1 userphoto' src={photo}/>
    <h2>{userData?.userName}</h2>
    {/* src={userData?.image.secure_url} */}
       
       <Link to='/orderDetails' className='text-decoration-none fw-bold btn border btn-custom width-btn mb-2'>MY Orders</Link>
    </div>
  )
}
