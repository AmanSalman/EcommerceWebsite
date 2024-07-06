import React from 'react';
import './input.css';

export default function Input({type='text', id, name, title, value, onChange, errors, onBlur, touched, placeholder=''}) {
  return (
    <div className='input-wrapper mb-2'>
      <label htmlFor={id} className='input-label'>{title}:</label>
      <input 
        type={type} 
        name={name} 
        className="input-field" 
        id={id} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {touched[name] && errors[name] && <p className='error-message'>{errors[name]}</p>}
    </div>
  );
}
