import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import Loader from '../Loader/Loader';

export default function UserContact() {

    const {userData,isLoading} = useContext(UserContext);
    
    if(isLoading){
      return <Loader/>
    }
  return (
    <h2 className='text email mt-5'>User Email: <br/> {userData?.email}</h2>

  )
}
