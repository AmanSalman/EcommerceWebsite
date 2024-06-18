import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useQuery} from 'react-query'
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay
} from 'swiper/modules';
import { Link, useParams } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Categories'
import Loader from '../Loader/Loader';

export default function CategoriesProducts() {

    const {categoryId} = useParams();
	const {categoryName} = useParams();
	console.log(categoryName)
	const getProducts = async () => {
		const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
		console.log(data.products)
		return data.products;
	}
	const {data, isLoading} = useQuery('categories_Products', getProducts);
	if (isLoading) {
		return <Loader/>
	}
	// const [categories, setCategories] = useState([])
	// const [isLoading, setIsLoading] = useState(true)
	// const getCategories = async ()=>{
	// try{
	//     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
	//     setCategories(data.categories)import Categories from './../../dashboard/categories/Categories';

	//     setIsLoading(false)
	// } catch(error){
	//     console.log(error)
	// } finally {
	//     setIsLoading(false)
	// }

	// }
	// useEffect(()=>{
	// getCategories();
	// }, [])

	// if(isLoading){
	// return <h2>Loading ... </h2>
	// }

	return (

		<div className='container mt-5 border'>
			<h1 className=' bordercolor mb-4 pb-1 ourProducts'>{categoryName}:</h1>
            <div className='row'>
                {
				data.length? data?.map((product) => 

				<div className="col-md-4 mb-3" key={product._id}>
				   <div className="card h-100 w-100">
					<div className=' d-flex justify-content-center'>
						<img src={product.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom'/>	
					</div>
				
					 <div className="card-body  mb-2 p-2">
						<div className='d-flex justify-content-between flex-row body-color rounded-2 p-2 mb-2'>

					   <h3 className="card-title">{product.name}</h3>
					  {/* <p className="card-description"></p> */}
					   <p className="price d-inline-block body-color">${product.price}</p>
						</div>
						<div className='d-flex flex-column align-items-center'>
					 <Link to={
					`/Review/${
						product._id
					}`
				}
				className='text-decoration-none fw-bold btn border btn-custom w-50 mb-2'>Create Review</Link>

<Link className=' text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  w-50' to={`/product/${product._id}`}>More Details</Link>
					 </div>
					
					 </div>
					
			   </div>
				</div>

                ):<h2>No data found</h2>
			} 
            </div>
				

		</div>

	// <div className="container">
	// <div className="row">
	// {
	// data?.categories.length ? data?.categories.map(
	//     (Category)=>
	//     <div className="col-lg-4" key={Category._id}>
	//       <img src={Category.image.secure_url}/>
	// <h2>{Category.name}</h2>
	// </div>
	// ):'no data found'
	// }


	// </div>
	// </div>

	)

}
