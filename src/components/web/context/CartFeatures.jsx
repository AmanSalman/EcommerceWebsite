import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext(null);

export function CartContextProvider ({children}){

    let [cartCount,setCount] = useState(0);
    
    const addToCart = async (ProductId)=>{
        try {

            const token = localStorage.getItem("userToken");
            console.log(token)
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId:ProductId},
            {headers:{Authorization:`AmanGRAD__${token}`}} 
            )
            if (data.message == 'success'){
                toast.success('added successfully');
             }
             setCount(cartCount+1)
             return data;
           
        } 
        
        
        catch(error) {

            console.log(error)
        }
        
    }

    const getCartContext = async ()=>{
        try{
             const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
        {headers:{Authorization:`AmanGRAD__${token}`}})
        setCount(data.count)
        return data;
        } catch (error){
            console.log(error)
        }
        
    }
    
    const removeItemContext = async (ProductId)=>{
        try{

            console.log(ProductId)
            const token = localStorage.getItem("userToken");
            console.log(token)
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/cart/${ProductId}`,{},
        {headers:{Authorization:`AmanGRAD__${token}`}} )
        console.log(data)
        return data;
        } catch (error){
            console.log(error)
        }
        
    }
   
    return <CartContext.Provider value={{addToCart, getCartContext, removeItemContext,cartCount ,setCount}}>
        {children}
    </CartContext.Provider>;
}