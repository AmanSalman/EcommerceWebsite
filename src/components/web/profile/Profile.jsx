import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/User'
import './Profile.css'
import { Link } from 'react-router-dom';
export default function Profile() {
    const {userData} = useContext(UserContext);
    
    
  return (
    <aside className='Profile d-flex flex-column align-items-center text-center p-3'>
      <div className='user-info' >
        <h2>{userData?.userName}</h2>
        <img src={userData?.image.secure_url}/>
      </div>

      <div className='user-contact'>
        <h2 className='text'>{userData?.email}</h2>
      </div>

      <div className='order_info'>
        <Link to='/orderDetails' className='border p-2 text-decoration-none'>MY Orders</Link>
      </div>
    </aside>
    // <div className='container d-flex flex-column align-items-center mt-4' key={userData._id}>
    // {
    //     <>
        

    //     <img src={userData.image.secure_url} className=' img-fluid w-25 border p-2 mb-3' />
    //     <h2 className=' border p-2'> {userData.userName}</h2>
    //     <p className=' border p-2 text-danger'>Email : {userData.email}</p>

    //     </>
        
    // }
    // </div>
  )
}
