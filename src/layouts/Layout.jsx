import React from 'react'
import Navbar from '../components/web/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/web/footer/Footer'
import Login from '../components/web/login/Login.jsx'

export default function Layout({user,setUser}) {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
