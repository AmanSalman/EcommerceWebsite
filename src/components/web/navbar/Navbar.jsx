import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../context/CartFeatures';
import { UserContext } from '../context/User';
import logo from './NavPhotos/aman-shop-high-resolution-logo-transparent.png'
import './navbar.css'
import { RiShoppingCart2Fill, RiUser3Fill } from '@remixicon/react';
import { FaHeart } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
export default function Navbar() {;
  let {user,setUser,userData,setUserData} = useContext(UserContext);
  const {cartCount} = useContext(CartContext);
  const navigate = useNavigate();
  const logout = ()=> {
    localStorage.removeItem("userToken");
    setUser(null)
	setUserData(null)
    navigate('/');
  }
	return (
		<nav className="navbar navbarColor navbar-expand-lg navbar-light py-0 mb-2">
			<div className="container">
				<a className="navbar-brand nav__logo " href="#">Lumière</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-5">

						<li className="nav-item">
							<a className="nav-link" href="/home">Home</a>
						</li>


						<li className="nav-item">
							<a className="nav-link" href="/categories">Categories</a>
						</li>


						<li className="nav-item">
							<Link className="nav-link" to='/products'>Products</Link>
						</li>

						{
						// user? <li className="nav-item position-relative">
						// 	{/* <span className='count position-absolute text-danger fw-bolder'>{cartCount}</span> */}
						// 	<Link className="nav-link" to="/cart">Cart {cartCount}</Link>
						// </li>:null
					}
					 </ul>
					<ul className="d-flex list-inline gap-1 align-items-baseline">
						<li className="nav-item dropdown">
							<a className="dropdown-toggle text-decoration-none listdrop" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<RiUser3Fill color='black' />
							</a>
							<ul className="dropdown-menu ">
								{
								user==null ? <>
									<li>
										<Link className="dropdown-item" to="/register">register</Link>
									</li>
									<li><hr className="dropdown-divider"/></li>
									<li>
										<Link className="dropdown-item" to="/login">login</Link>
									</li>
								</> :
								 <>
									<li>
										<Link className="dropdown-item " to="/profile">Profile</Link>
									</li>
									<li><hr className="dropdown-divider"/></li>
									<li>
										<Link className="dropdown-item " onClick={logout}>logout</Link>
									</li>
								</>
							} </ul>
						</li>
	
						
						 <li className="nav-item position-relative">
							{user?
							<div className='d-flex gap-2 align-items-baseline'>
							<div>
							<Link to="/" > <FaHeart color='black' fontSize={'1.3rem'}/> </Link>
							</div>
							<Link to="/cart"> <BsCart4 color='black' fontSize={'1.3rem'}/> </Link>
							</div>
							:
							 <Link to="/login"> <RiShoppingCart2Fill color='black'/> </Link>
							}
							</li>
							
	
					</ul>

				</div>
			</div>
		</nav>

	)
}
