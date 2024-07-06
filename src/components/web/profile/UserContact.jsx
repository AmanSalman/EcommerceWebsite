// import React, { useContext } from 'react'
// import { UserContext } from '../context/User';
// import Loader from '../Loader/Loader';

// export default function UserContact() {

//     const {userData,isLoading} = useContext(UserContext);
    
//     if(isLoading){
//       return <Loader/>
//     }
//   return (
//     <h2 className='text email mt-5'>User Email: <br/> {userData?.email}</h2>

//   )
// }
// UserContact.js
import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import Loader from '../Loader/Loader';
import photo from './woman (1).png';

export default function UserContact() {
    const { userData, isLoading } = useContext(UserContext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="container mt-3">
            <div className="card border-0 shadow-sm d-flex flex-row flex-wrap">
                <div className="card-body">
                    <h2 className="card-title fw-bold mb-4">User Information</h2>
                    <div className="row mb-3">
                        <div className="col-md-3">Username :</div>
                        <div className="col-md-9">{userData.username}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-3">Email :</div>
                        <div className="col-md-9">{userData.email}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-3">Status :</div>
                        <div className="col-md-9">{userData.status}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-3">Role :</div>
                        <div className="col-md-9">{userData.role}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-9">{new Date(userData.createdAt).toLocaleString()}</div>
                    </div>
                </div>
                <img className='mb-1 userphoto' src={photo} alt='User' />
            </div>
        </div>
    );
}
