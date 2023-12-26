import React, { useContext } from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { LoginSchema, registerSchema } from '../validation/validate.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';


export default function Login() {
    const initialValues= {
        email:'',
        password:'',
    };
    const navigate = useNavigate();

    let {user,setUser} = useContext(UserContext);
    if(user){
        navigate(-1);
    }
    const onSubmit = async (users) => {
         const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,users);
         if (data.message == 'success'){
            localStorage.setItem("userToken", data.token);
            setUser(data.token)
            toast.success('Login successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/home');
         }

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:LoginSchema,
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
    
    <div className=' container '>
         <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Login:</h1>
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        {renderInputs}
        <button type='submit' className=' me-2  rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5' disabled={!formik.isValid}>Login</button>
        <Link to='/sendcode' className=' rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5'>Forget Password?</Link>
        
        </form>
    </div> 

  )
}
