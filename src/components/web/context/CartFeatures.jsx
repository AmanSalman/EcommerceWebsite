import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../Loader/Loader";
import { UserContext } from "./User";

export const CartContext = createContext(null);

export function CartContextProvider ({children}){

    const {user} = useContext(UserContext)
    let [cartCount,setCount] = useState(0);
    let [Loading, setLoading] = useState(false)

    const addToCart = async (ProductId)=>{
        try {
            setLoading(true)
            if(!user){
                toast.error("Login to add to cart")
                return;
            }
            const token = localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId:ProductId},
            {headers:{Authorization:`AmanGRAD__${token}`}} 
            )
            if (data.message == 'success'){
                toast.success('added successfully');
                setCount(cartCount + 1); 
            }
            return data;
           
        } catch(error) {
            console.log(error)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    const getCartContext = async ()=>{
        try {
            const token = localStorage.getItem("userToken");
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
            {headers:{Authorization:`AmanGRAD__${token}`}})
            setCount(data.cart.products.length);
            return data;
        } catch (error){
            console.log(error)
        }
    }
    
    const removeItemContext = async (ProductId)=>{
        try {
            setLoading(true)
            const token = localStorage.getItem("userToken");
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/cart/${ProductId}`, {},
            {headers:{Authorization:`AmanGRAD__${token}`}} 
            );
            setLoading(false)
            return data;
        } catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const updateItemQuantityContext = async (productId, quantity, operator) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("userToken");
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/cart/UpdateQty/${productId}`,
                { quantity, operator },
                { headers: { Authorization: `AmanGRAD__${token}` } }
            );
            console.log(data);
            setLoading(false)
            return data;
        } catch (error) {
            console.error('Error updating quantity:', error);
        }finally{
            setLoading(false);
        }
    };


    if(Loading){
        return <Loader/>
    }
    return (
        <CartContext.Provider value={{
            addToCart,
            getCartContext,
            removeItemContext,
            updateItemQuantityContext,
            cartCount,
            setCount
        }}>
            {children}
        </CartContext.Provider>
    );
}
