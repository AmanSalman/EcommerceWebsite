import React from 'react';
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/web/home/Home';
import Layout from './Layout';
import Categories from '../components/web/categories/Categories';
import DashboardLayouts from './DashboardLayouts';
import HomeDash from '../components/dashboard/home/Home.jsx';
import CategoriesDash from '../components/dashboard/categories/Categories';
import Register from '../components/web/register/Register.jsx';
import Login from '../components/web/login/Login.jsx';

export const routercos = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'categories',
                element:<Categories/>
            }
            ,

            {
                path:'login',
                element:<Login/>
            },
            {
                path: "*",
				element: <h2>page not found - web</h2>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayouts/>,
        children:[
            {
                path:'home',
                element:<HomeDash/>
            },
            {
                path:'categories',
                element:<CategoriesDash/>
            },
            {
                path: "*",
				element: <h2>page not found - dash</h2>
            }
        ]
    }
]);
