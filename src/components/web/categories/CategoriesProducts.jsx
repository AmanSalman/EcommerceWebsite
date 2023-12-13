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

export default function CategoriesProducts() {

    const {categoryId} = useParams();
	const getProducts = async () => {
		const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
		return data.products;
	}
	const {data, isLoading} = useQuery('categories_Products', getProducts);
	if (isLoading) {
		return <p>Loading ...
		</p>
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
            <div className='row p-5'>
                {
				data.length? data?.map((Product) => 
                <div className='col-lg-4 d-flex align-items-center flex-column border' key={Product._id}>
					<img className=' img-fluid w-50 mb-2 mt-3' src={Product.mainImage.secure_url}/>
					<Link className=' text-decoration-none text-success d-flex justify-content-center fw-bold mb-3 p-2 border ' to={`/product/${Product._id}`}>{Product.name}</Link>
					</div>):<h2>No data found</h2>
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
