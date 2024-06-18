import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { registerSchema } from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import './Style.css'

export default function Register() {


    const initialValues= {
        username:'',
        email:'',
        password:'',
    };

    const onSubmit = async (users) => {
         const formData = new FormData();
         formData.append("userName",users.username);
         formData.append("email",users.email);
         formData.append("password",users.password);
        //  for(let data of formData.entries()){
        //     console.log(data)
        //  }

         const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`,formData);
         if (data.message == 'success'){
            toast.success('Account created successfully, please verify your email to login', {
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

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
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
            id:'username',
            type:'text',
            name:'username',
            title:'username',
            value:formik.values.userName,
        },
        {
            id:'email',
            type:'email',
            name:'email',
            title:'email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'password',
            value:formik.values.password,
        },
    ]

    
    const renderInputs = inputs.map ((input,index)=>
    <Input type={input.type}
     id={input.id}
      name={input.name} 
      title={input.title}
       value={input.value}  
       key={index}
     onChange={input.onchange|| formik.handleChange} 
     errors={formik.errors}
     onBlur={formik.handleBlur} 
     touched={formik.touched}/>
    )
    
  return (
    
    <div className='container register-contanier'>
         <h1 className='bordercolor'>Registeration</h1>
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='Form-Register'>
        {renderInputs}
        <button type='submit' className="button-23 mb-3" role="button" disabled={!formik.isValid}>Register</button>
        </form>
    </div>

  )
}



