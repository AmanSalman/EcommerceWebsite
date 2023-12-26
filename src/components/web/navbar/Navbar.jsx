import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../context/CartFeatures';
import { UserContext } from '../context/User';
import logo from './NavPhotos/aman-shop-high-resolution-logo-transparent.png'
import './navbar.css'
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
		<nav className="navbar navbarColor navbar-expand-lg navbar-light py-0">
			<div className="container">
				<a className="navbar-brand " href="#">Ashop</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto mb-2 mb-lg-0">

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
						user? <li className="nav-item position-relative">
							{/* <span className='count position-absolute text-danger fw-bolder'>{cartCount}</span> */}
							<Link className="nav-link" to="/cart">Cart {cartCount}</Link>
						</li>:null
					}
					 </ul>
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								{userData!=null?userData.userName:'Account'} 
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
					</ul>

				</div>
			</div>
		</nav>

	)
}
