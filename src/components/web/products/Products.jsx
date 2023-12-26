import axios from 'axios'
import React, {useEffect, useState} from 'react'
import  './products.css';
import {Link} from 'react-router-dom';


export default function Products() {

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true)

	const getProducts = async () => {
		try {
			const {data} = await axios.get(`${
				import.meta.env.VITE_API_URL
			}/products?page=${currentPage}`);
			setTotalPages(data.page);
			setProducts(data.products)
			setIsLoading(false)
			console.log(totalPages)
			console.log(data)
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false)
		}

	}
	useEffect(() => {
		console.log(currentPage)
		getProducts();
	}, [currentPage]);

	const handlePagination = (pageNum) => { // console.log(currentPage)
		if (currentPage >= 1) {
			setCurrentPage((currentPage) => {
				return currentPage + pageNum;
			});

		}

	};

	if(isLoading){
		return <h2>Loading ... </h2>
		}

	return (

<>

<div className=' container mt-5 d-flex flex-column'>
<h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Our Products:</h1>
	<div className='row'>
		{
		products ?. map((product) =>
	
		
		
		<div className="col-md-4 col-sm-12 mb-3" key={product._id}>
				   <div className="card h-100 w-100">

					

					 <div className="card-body mb-2 p-2 justify-content-between">
						<div className=' d-flex justify-content-center'>
						<img src={product.mainImage.secure_url} className='img-fluid w-50 mb-2 mt-3 product-img border-bottom'/>	
					</div>
						<div className=' body-color rounded-2 p-2 mb-2'>
							<div className='d-flex justify-content-between flex-row mb-1'>
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
				</div>
			
		
		)
	} </div>
</div>
<div className=' d-flex justify-content-center'>
	<button onClick={
			() => handlePagination(-1)
		}
		disabled={
			currentPage === 1
	} className='btn fw-bold mb-3 p-2 border btn btn-custom me-4'>
		Previous Page
	</button>
	<button onClick={
			() => handlePagination(1)
		}
		disabled={
			currentPage === totalPages
	} className='btn  fw-bold mb-3 p-2 border btn btn-custom'>
		Next Page
	</button>
</div>
</>


// 		<div className="container">
//   <div className="row">
//     <div className="col-4">
//       <div className="card">
//         <img src="product1.jpg" alt="Product 1" />
//         <div className="card-body">
//           <h3 className="card-title">Product Title 1</h3>
//           <p className="card-description">Description of Product 1 goes here. You can add more details if needed.</p>
//           <p className="price">$19.99</p>
//         </div>
//       </div>
//     </div>
// 	<div className="col-4">
//       <div className="card">
//         <img src="product1.jpg" alt="Product 1" />
//         <div className="card-body">
//           <h3 className="card-title">Product Title 1</h3>
//           <p className="card-description">Description of Product 1 goes here. You can add more details if needed.</p>
//           <p className="price">$19.99</p>
//         </div>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="card">
//         <img src="product2.jpg" alt="Product 2" />
//         <div className="card-body">
//           <h3 className="card-title">Product Title 2</h3>
//           <p className="card-description">Description of Product 2 goes here. You can add more details if needed.</p>
//           <p className="price">$29.99</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

	)
}
