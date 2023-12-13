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

import './Categories'

export default function Categories() {

	const getCategories = async () => {
		const {data} = await axios.get(`${
			import.meta.env.VITE_API_URL
		}/categories`);
		return data;
	}
	const {data, isLoading} = useQuery('web_categories', getCategories);
	if (isLoading) {
		return <p>Loading ...
		</p>
	}
	return (

		<div className='container mt-5'>


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
					<img src={
						Category.image.secure_url
					}/>
					<Link className=' text-decoration-none text-success d-flex justify-content-center fw-bold pb-5' to={`/categories/products/${Category._id}`}>{Category.name}</Link>
					</SwiperSlide>)
			} </Swiper>

		</div>

	)

}
