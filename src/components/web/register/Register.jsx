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

    const onSubmit = async (user) => {
        try {
            
            console.log(user)
             const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`,user);
             console.log(data)
             if (data.message == 'success'){
                toast.success('Account created successfully, please verify your email to login')
             }
        } catch (error) {
            console.error(error)
        }

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
    });

    const inputs = [
        {
            id:'username',
            type:'text',
            name:'username',
            title:'username',
            value:formik.values.username,
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



