import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext(null);

export function CartContextProvider ({children}){

    let [cartCount,setCount] = useState(0);
    
    const addToCart = async (ProductId)=>{
        try {
            const token = localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId:ProductId,quantity:1},
            {headers:{Authorization:`Tariq__${token}`}} 
            )
            if (data.message == 'success'){
                toast.success('added successfully', {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
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
        {headers:{Authorization:`Tariq__${token}`}})
        setCount(data.count)
        return data;
        } catch (error){
            console.log(error)
        }
        
    }
    
    const removeItemContext = async (ProductId)=>{
        try{
             const token = localStorage.getItem("userToken");
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId:ProductId},
        {headers:{Authorization:`Tariq__${token}`}} )
        return data;
        } catch (error){
            console.log(error)
        }
        
    }
   
    return <CartContext.Provider value={{addToCart, getCartContext, removeItemContext,cartCount ,setCount}}>
        {children}
    </CartContext.Provider>;
}