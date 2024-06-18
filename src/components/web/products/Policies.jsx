import React from 'react'
import './details.css'
function Policies() {
  return (
    <div className="policies mt-3">
    <div className="policy-item">
      <FaShippingFast size={20} color="#ad8c74" className="me-2" />
      <span>Free Shipping</span>
    </div>
    <div className="policy-item">
      <FaUndoAlt size={20} color="#ad8c74" className="me-2" />
      <span>Return Policy</span>
    </div>
    <div className="policy-item">
      <FaLock size={20} color="#ad8c74" className="me-2" />
      <span>Shopping Security</span>
    </div>
  </div>
  )
}

export default Policies