import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/dashboard/footer/Footer'

export default function DashboardLayouts() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
