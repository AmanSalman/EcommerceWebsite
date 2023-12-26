import React, { useContext } from 'react'
import { UserContext } from '../context/User';

export default function UserContact() {

    const {userData,isLoading} = useContext(UserContext);
    
    if(isLoading){
      return <h2>Loading ...</h2>
    }
  return (
    <h2 className='text email mt-5'>User Email: <br/> {userData?.email}</h2>

  )
}
