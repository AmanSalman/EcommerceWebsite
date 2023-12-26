import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { registerSchema, restSchema } from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function ForgetPassword() {


    const navigate = useNavigate();
    const initialValues= {
        email:'',
        password:'',
        code:'',
    };

    const onSubmit = async (users) => {
         const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,users);
         if (data.message == 'success'){
            toast.success('Password Changed successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/home')
         }

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:restSchema
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
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },
        {
            id:'code',
            type:'code',
            name:'code',
            title:'user code',
            value:formik.values.code,
        }
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
      <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>change password</h1>
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className=' d-flex justify-content-center align-items-center flex-column'>
        {renderInputs}
        <button type='submit' className='rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5' disabled={!formik.isValid}>change</button>
        </form>
    </div>

  )
}
