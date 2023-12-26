import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { ReviewSchema} from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function CreateReview() {

    const {productId} = useParams();
    const initialValues= {
        comment:"",
        rating:0,
    };

    const onSubmit = async (review) => {
        console.log(review)
        const token = localStorage.getItem("userToken");

        console.log(token)
        try{
            
            const token = localStorage.getItem("userToken");
         const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/products/${productId}/review`,review,{headers:{Authorization:`Tariq__${token}`}});
         console.log(data)
         if (data.message == 'success'){
            toast.success('Review created successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
         }
        } catch(error){
            console.log(error)
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
    
  return (
    
    <div className=' container'>
        <h1>Adding Review</h1>
        <form onSubmit={formik.handleSubmit} >
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>Add</button>
        </form>
    </div>

  )
}
