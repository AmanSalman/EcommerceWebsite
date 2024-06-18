import React from 'react'
import Navbar from '../components/web/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/web/footer/Footer'

export default function Layout({user,setUser}) {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
