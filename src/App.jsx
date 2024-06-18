// import React from 'react';
// import * as ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { routercos } from './layouts/Routes.jsx';

// export default function App() {
//   return (
//     <RouterProvider router={routercos}/>
//   )
// }

import { RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Register from "./components/web/register/Register.jsx";
import Login from "./components/web/login/Login.jsx";
import Home from "./components/web/home/Home.jsx";
import Categories from "./components/web/categories/Categories.jsx";
import DashboardLayout from "../src/layouts/DashboardLayouts.jsx"
import HomeDashboard from './components/dashboard/home/Home.jsx';
import CategoriesDashboard from './components/dashboard/categories/Categories.jsx'
import { createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import CategoriesProducts from "./components/web/categories/CategoriesProducts.jsx";
import ProductDetails from "./components/web/products/ProductDetails.jsx";
import { CartContext, CartContextProvider } from "./components/web/context/CartFeatures.jsx";
import Cart from "./components/web/cart/Cart.jsx";
import ProtectedRoute from "./components/web/protectedRoute/ProtectedRoute.jsx";
import { useContext } from "react";
import { UserContext } from "./components/web/context/User.jsx";
import Profile from "./components/web/profile/Profile.jsx";
import SendCode from "./components/web/login/SendCode.jsx";
import ForgetPassword from "./components/web/login/ForgetPassword.jsx";
import ClearCart from "./components/web/cart/ClearCart.jsx";
import CreateOrder from "./components/web/cart/CreateOrder.jsx";
import Order from "./components/web/order/Order.jsx";
import Products from "./components/web/products/Products.jsx";
import CreateReview from "./components/web/products/CreateReview.jsx";
import UserInfo from "./components/web/profile/UserInfo.jsx";
import UserContact from "./components/web/profile/UserContact.jsx";
export default function App() {


  let {cartCount,setCount,getCartContext} = useContext(CartContext);

  let {setUser} = useContext(UserContext);

  useEffect(()=>{
    if(localStorage.getItem("userToken")!=null){
      setUser(localStorage.getItem("userToken"))
      setCount(getCartContext().count)
    }
  },[])
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:<Login />
          },
          {
            path:'sendcode',
            element:<SendCode/>
          },
          {
            path:'forgetpassword',
            element:<ForgetPassword/>
          },
          {
            path:'home',
            element:<Home />
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'products',
            element:<Products/>
          },
          {
            path:'profile',

            element:<ProtectedRoute>
              <Profile/>
            </ProtectedRoute>,
            children:[
              {
                path:'info',
                element:<UserInfo/>
              },
              {
                path:'userContact',
                element:<UserContact/>
              }
            ]
          },
          {
            path:'Review/:productId',
            element:<CreateReview/>
          },

          {
            path:'/categories/products/:categoryName/:categoryId',
            element:<CategoriesProducts/>
          },
          {
            path:'/product/:ProductId',
            element:<ProductDetails/>
          },
          {
            path:'cart',
            element:
            <ProtectedRoute>
               <Cart/>
            </ProtectedRoute>
           
          },
          {
            path:'clearcart',
            element:<ClearCart/>
          },
          {
            path:'CreateOrder',
            element:<CreateOrder/>
          },
          {
            path:'/orderDetails',
            element:<Order/>
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout />,
        children:[{
        path:'home',
        element:<HomeDashboard />
      }
      ,{
        path:'categories',
        element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
  
  
    }
  ]);
 
  return (
    
      <RouterProvider router={router} />

    
  )
}
