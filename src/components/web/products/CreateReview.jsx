import React, { useState } from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { ReviewSchema} from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';

export default function CreateReview() {
    const [Loading, setisLoading] = useState(false)
    const {productId} = useParams();
    const initialValues= {
        comment:"",
        rating:0,
    };

    const onSubmit = async (review) => {
        try{
        setisLoading(true)
        const token = localStorage.getItem("userToken");
         const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/product/${productId}/review`,review,{headers:{Authorization:`AmanGRAD__${token}`}});
         console.log(data)
         if (data.message == 'success'){
            toast.success('Review created successfully');
         }
        } catch(error){
            if(error.response.data.message == 'you have already reviewed this product'){
                setisLoading(false)
                toast.error('You have already reviewed this product');
                return;
            } else {
                toast.error('Failed to create review, try again later')
            }
        } finally {
            setisLoading(false)
        }
    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:ReviewSchema
    });

    const inputs = [
        {
            id:'comment',
            type:'text',
            name:'comment',
            title:'user comment',
            value:formik.values.comment,
        },
        {
            id:'rating',
            type:'text',
            name:'rating',
            title:'user rating',
            value:formik.values.rating,
        },
    ]

    
    const renderInputs = inputs.map ((input,index)=>
    <Input type={input.type}
     id={input.id}
      name={input.name} 
      title={input.title}
       value={input.value}  
       key={index}
     onChange={formik.handleChange} 
     errors={formik.errors}
     onBlur={formik.handleBlur} 
     touched={formik.touched}/>
    )

    if(Loading){
        return <Loader/>
    }
    
  return (
    
    <div className='container register-contanier'>
        <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Adding Review:</h1>
        <form onSubmit={formik.handleSubmit} className=' d-flex justify-content-center align-items-center flex-column Form-Register' >
        {renderInputs}
        <button type='submit' disabled={!formik.isValid} className='rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5'>Add</button>
        </form>
    </div>

  )
}
