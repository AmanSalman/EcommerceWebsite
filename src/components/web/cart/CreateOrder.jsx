import React, { useState } from 'react';
import { useFormik } from 'formik';
import { OrderSchema } from '../validation/validate';
import Input from '../../pages/Input';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components'; // Import styled from styled-components
import './order.css';
import '../register/Style.css';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

// Styled component for SummarySection
const SummarySection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 640px) {
  width: 85%;
}
`;

export default function CreateOrder() {
  const [loading, setloading] = useState(false)
  const initialValues = {
    couponId: '',
    Address: '',
    phone: '',
  };

  const onSubmit = async (order) => {
    const token = localStorage.getItem('userToken');
   const FilterOrder = Object.fromEntries(
      Object.entries(order).filter(([key, value]) => {
        // Filter criteria: value should not be empty
        return value !== undefined && value !== null && value !== '';
      })
    );
    console.log(FilterOrder)
    try {
      setloading(true)
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`, FilterOrder, {
        headers: { Authorization: `AmanGRAD__${token}` },
      });
      console.log(data)
      toast.success('Order sent successfully');
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Failed to send order');
      setloading(false)
    } finally {
      setloading(false)
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: OrderSchema,
  });

  const inputs = [
    {
      id: 'couponId',
      type: 'text',
      name: 'couponId',
      title: 'Coupon',
      value: formik.values.couponId,
      placeholder: 'Coupon Name',
    },
    {
      id: 'Address',
      type: 'text',
      name: 'Address',
      title: 'Address',
      value: formik.values.Address,
      placeholder: 'Address',
    },
    {
      id: 'phone',
      type: 'text',
      name: 'phone',
      title: 'Phone',
      value: formik.values.phone,
      placeholder: 'Phone',
    },
  ];

  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      id={input.id}
      name={input.name}
      title={input.title}
      value={input.value}
      key={index}
      placeholder={input.placeholder}
      onChange={formik.handleChange}
      errors={formik.errors}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));

  if(loading){
    return <Loader/>
  }

  return (
    <>
    <div className='order-finish container'>

    <nav aria-label="breadcrumb">
                <ol className="breadcrumb container w-50-custom mt-5">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/cart">Cart</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Finish Order</li>
                </ol>
            </nav>
    </div>
      <SummarySection> 
    <div className="d-flex order-div justify-content-center align-items-center">
      <div className="Creat-Order">
        <h1 className="bordercolor mb-4 pb-1 ourProducts">Finish the Order:</h1>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column align-items-center gap-1" encType="multipart/form-data">
          {renderInputs}
          <button type="submit" className="button-23 px-5" disabled={!formik.isValid}>
            Send
          </button>
        </form>
      </div>
    </div>
      </SummarySection>
    </>
  );
}
