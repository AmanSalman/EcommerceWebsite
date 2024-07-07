import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { LoginSchema, registerSchema } from '../validation/validate.js';
import axios from "axios";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';
import Loginimg from '../../../assets/NewUp/Login.jpg'
import './Login.css'
import Loader from '../Loader/Loader.jsx';

export default function Login() {
    const [loading, setisloading] = useState(false)
    const initialValues= {
        email:'',
        password:'',
    };
    const navigate = useNavigate();

    let {user,setUser} = useContext(UserContext);
    if(user){
        navigate(-1);
    }
    const onSubmit = async (user) => {
        try {
            setisloading(true)
             const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,user);
             console.log(data.message)
             if (data.message == 'success'){
                localStorage.setItem("userToken", data.token);
                setUser(data.token)
                toast.success('Login successfully');
                navigate('/');
             }
             setisloading(false);
            
        } catch (error) {
            toast.error('Error while logging in, try again later')
            setisloading(false);
        } finally {
            setisloading(false);
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
     onChange={formik.handleChange} 
     errors={formik.errors}
     onBlur={formik.handleBlur} 
     touched={formik.touched}/>
    )

    if(loading){
        return <Loader/>
    }
    
  return (
    
    <div className='container register-contanier'>
         <h1 className='bordercolor'>Login:</h1>
        <form className='Form-Register' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        {renderInputs}
        <button type='submit' className="button-23 mb-3" role="button" disabled={!formik.isValid}>Log in</button>
        <Link to='/sendcode' className='forgetpass-link'>Forget Password?</Link>
        <span style={{fontSize:'1rem'}}>You don't have an account?<Link to='/register'> Register</Link></span>
        
        
        </form>
         {/* <div className="contentWrapper">
            <div className="LoginImgWrapper">
                <img src={Loginimg} />
            </div>
            <div className="formWrapper">

            </div>

         </div> */}

    </div> 

  )
}
