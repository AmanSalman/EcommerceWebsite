import React from 'react'
import { useFormik } from 'formik';
import { OrderSchema } from '../validation/validate';
import Input from '../../pages/Input';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';;

export default function CreateOrder() {
    
    const initialValues = 
     {
        couponName: '',
        address: '',
        phone: '',
      }

      const onSubmit = async (order) => {
        const token = localStorage.getItem("userToken");
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,order,
        {headers:{Authorization:`Tariq__${token}`}})   
          toast.success('sent successfully', {
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
      const formik = useFormik({
        initialValues:initialValues,
        onSubmit,
        validationSchema:OrderSchema,
      });


      const inputs = [
        {
            id:'couponName',
            type:'text',
            name:'couponName',
            title:'coupon',
            value:formik.values.couponName,
        },
        {
            id:'address',
            type:'text',
            name:'address',
            title:'user address',
            value:formik.values.address,
        },
        {
            id:'phone',
            type:'text',
            name:'phone',
            title:'user phone',
            value:formik.values.phone,
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
    <div className='container d-flex  text-center'>
        <div className='w-75'>
        <h1 className=' bordercolor mb-4 pb-1 ourProducts fw-bold'>Finish the Order:</h1>
    <form onSubmit={formik.handleSubmit} className=' d-flex flex-column align-items-center gap-1' encType='multipart/form-data'>
    {renderInputs}
    <button type='submit' className=' rounded-3 text-decoration-none  fw-bold mb-3 p-2 border btn btn-custom  width-btn px-5' disabled={!formik.isValid} >Send</button>
       </form> 
       
       </div>
</div> 

  )
}
