import axios from "axios";
import { createContext,useEffect,useState } from "react";

export let  UserContext = createContext();

export default function UserContextProvider ({children}){
    const [user, setUser] = useState(null);
    const [userData,setUserData] = useState(null);

    const getUserContext = async ()=>{
        if(user){
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
            {headers:{Authorization:`Tariq__${user}`}});
             setUserData(data.user);
            
        } 
    }

    useEffect(()=>{
        getUserContext();
    },[user])

    return <UserContext.Provider value={{user,setUser,userData,setUserData}}>
        {children}
    </UserContext.Provider>
}