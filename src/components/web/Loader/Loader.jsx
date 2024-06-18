import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='overlay'>
      <div className='loader-container'>
        <span className='loader'></span>
      </div>
    </div>
  );
}

export default Loader;
