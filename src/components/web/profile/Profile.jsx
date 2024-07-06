// import React from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../context/User'
// import './Profile.css'
// import { Link, Outlet } from 'react-router-dom';
// import Loader from '../Loader/Loader';
// export default function Profile() {
//     const {userData,isLoading} = useContext(UserContext);
    
//     if(isLoading){
//       return <Loader/>
//     }
    
//   return (
//     <aside className='Profile d-flex'>

//       <div className='Profile-Links'>
//         <nav className='p-5 flex-column d-flex gap-2'>
//           <Link to='info' className=' text-decoration-none colorprofile'>Information</Link>
//           <Link to='userContact' className=' text-decoration-none colorprofile'>Contact</Link>
//         </nav>
//       </div>

//       <div className='user-info' >
//         <Outlet/>
//       </div>

//       <div className='user-contact'>
//       <div className='container d-flex flex-column align-items-center mt-4' key={userData._id}>
//     {
//         <>
//         <h2 className=' border p-2'> {userData.username}</h2>
//         <p className=' border p-2 text-danger'>Email : {userData.email}</p>

//         </>
        
//     }
//     </div>
//       </div>

     
//     </aside>
   
//   )
// }
// Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import './Profile.css';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Profile() {
    const { userData, isLoading } = useContext(UserContext);
    
    if (isLoading) {
        return <Loader />;
    }
    
    return (
        <aside className='Profile'>
            <div className='Profile-Links'>
                <nav className='p-5 flex-column d-flex gap-2'>
                    <Link to='info' className='text-decoration-none colorprofile'>Contact</Link>
                    <Link to='userContact' className='text-decoration-none colorprofile'>Information</Link>
                </nav>
            </div>
            <div className='user-info'>
                <Outlet />
            </div>
            {/* <div className='user-contact'>
                <div className='container d-flex flex-column align-items-center mt-4' key={userData._id}>
                    <h2 className='border p-2'>{userData.username}</h2>
                    <p className='border p-2 text-danger'>Email: {userData.email}</p>
                </div>
            </div> */}
        </aside>
    );
}