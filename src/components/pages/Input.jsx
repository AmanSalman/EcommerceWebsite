import React from 'react'
import './input.css'

export default function Input({type='text' , id, name, title ,value, onChange,errors,onBlur,touched}) {
  return (
    <div className='input-wrapper mb-3'>
        <label htmlFor={id} className='me-3 p-2 input-label' > {title} :</label>
        <input type={type} name={name} className="form-control me-3 " id={id} value={value} onChange={onChange} onBlur={onBlur}/>
        {touched[name]&&errors[name]&& <p className=' text text-danger'> {errors[name]}</p> }
    </div>
  )
}

