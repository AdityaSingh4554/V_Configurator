import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './VehicleDetails.css';

const VehicleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { segment, manufacturer, variant, quantity } = location.state || {};

  const handleConfirmOrder = () => {
    alert('Order Confirmed!');
   
  };

  const handleConfigure = () => {
    navigate('/configure');
  };

  const handleModify = () => {
    navigate('/welcome');
  };

  return (
    <div className="vehicle-details-container">
      <h2>Vehicle Details</h2>
      <div className="vehicle-details">
        <div className="vehicle-image">
        
          <img src="path_to_image.jpg" alt="Vehicle" />
        </div>
        <div className="vehicle-info">
          <p><strong>Segment:</strong> {segment}</p>
          <p><strong>Manufacturer:</strong> {manufacturer}</p>
          <p><strong>Variant:</strong> {variant}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          {/* You can add more dynamic details here if available */}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleConfirmOrder} className="btn-confirm-order">
          Confirm Order
        </button>
        <button onClick={handleConfigure} className="btn-configure">
          Configure
        </button>
        <button onClick={handleModify} className="btn-modify">
          Modify Details
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;
