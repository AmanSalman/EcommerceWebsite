
import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { CodeSchema, registerSchema } from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function SendCode() {


   const navigate =  useNavigate();

    const initialValues= {
        email:'',
    };

    const onSubmit = async (users) => {
         const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,users);
         if (data.message == 'success'){
            toast.success('Code sent, check your email', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
         }
         navigate('/forgetpassword')

         

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:CodeSchema
        // validate:values=>{
        //     let errors  = {};
        //     if (!values.userName){
        //         errors.userName = "username is required";
        //     }
        //     if(!values.email){
        //         errors.email = "email is required";
        //     }
        //     if(!values.password){
        //         errors.password = "password is required";
        //     }
        //     return errors;
        // }
    });

    const inputs = [
      
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
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
        <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Rest Password:</h1>
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className=' d-flex flex-column justify-content-center align-items-center'>
        {renderInputs}
        <button type='submit' className='rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5' disabled={!formik.isValid}>send me code</button>
        </form>
    </div>

  )
}
