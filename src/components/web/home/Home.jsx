// import React from 'react'
// import photo from './360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg'
// import logo from './aman-shop-high-resolution-logo-transparent (1).png'
// import './home.css'
// import { Link } from 'react-router-dom';
// function Home() {

//   const containerStyle = {
//     position: 'relative',
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',

//     alignItems: 'center',
//     color: '#fff', // Text color on the background
//     backgroundImage: `url(${photo})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };


  
//   return (
//     <div style={containerStyle}>
//     <div  className='gradient-overlay'>
//     </div>

//     <div className='logostyling z-3 mb-4 pt-3'>
//        <img src={logo } className=' img-fluid' />
//     </div>
   
//     <h1 className=' z-3 text-center pb-3'>Welcome to Aman's Shop, Your one-stop-shop for style! Start exploring now.</h1>
//     <Link className=' z-3 btn btn-custom text-decoration-none  fw-bold mb-3 p-2 border ' to='/products'> Explore Our Products</Link>
//   </div>  )
// }

// export default Home


import React from 'react'
import Slider from './../slider/Slider';
import Speical from '../../pages/Speical.jsx';
import './home.css'

function Home() {
  return (
    <>
    <nav aria-label="breadcrumb">
                <ol className="breadcrumb w-50-custom container">
                    <li className="breadcrumb-item"> Home /</li>
                </ol>
            </nav>
    <Slider/>
    <div className="container m-home">
    <h1 className=' bordercolor ourProducts fw-bold'>Our Special Products:</h1>
    <Speical/>
    </div>
    </>
  )
}

export default Home