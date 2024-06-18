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
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Categories.css'
import Loader from '../Loader/Loader';

export default function Categories() {

	const getCategories = async () => {
		const {data} = await axios.get(`${
			import.meta.env.VITE_API_URL
		}/category/active`);
		console.log(data)
		return data;
	}
	const {data, isLoading} = useQuery('web_categories', getCategories);
	if (isLoading) {
		return <Loader/>
	}
	return (

		<div className='container mt-5'>
			<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/products" className="main-color text-decoration-none">
          Categories 
        </Link>
      </li>
      <li className="breadcrumb-item main-color">
      </li>
    </ol>
  </nav>
			<h1 className=' bordercolor ourProducts fw-bold'>Our Categories:</h1>

			<Swiper // install Swiper modules
				modules={
					[
						Navigation,
						Pagination,
						Scrollbar,
						A11y,
						Autoplay
					]
				}
				spaceBetween={12}
				slidesPerView={3}
				loop={true}
				// autoplay={
				// 	{delay: 1000}
				// }
				navigation
				pagination={
					{clickable: true}
				}
				scrollbar={
					{draggable: true}
				}
				>

				{
				data ?. categories.map((Category) => <SwiperSlide key={
					Category._id
				}>
					
					<Link  to={`/categories/products/${Category.name}/${Category._id}`}><img src={
						Category.image.secure_url
					} className=' img-fluid' style={{borderRadius:'50%'}} /></Link>
					</SwiperSlide>)
			} </Swiper>

		</div>

	)

}
