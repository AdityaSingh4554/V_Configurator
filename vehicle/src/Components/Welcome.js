import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Welcome.css';

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email; // Retrieve the email from the passed state

  const [segment, setSegment] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [variant, setVariant] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the selected details to the VehicleDetails page
    navigate('/vehicle-details', {
      state: { segment, manufacturer, variant, quantity }, // Pass state data to the next page
    });
  };

  return (
    <div className="welcome">
      <h2>Welcome to Vehicle Configurator</h2>
      {email && <p>Welcome, {email}!</p>} {/* Display user's email */}

      <form onSubmit={handleSubmit} className="welcome-form">
        <div className="form-group">
          <label htmlFor="segment">Segment:</label>
          <select
            id="segment"
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          >
            <option value="">Select Segment</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Truck">Truck</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer:</label>
          <select
            id="manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="">Select Manufacturer</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="variant">Variant:</label>
          <select
            id="variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="">Select Variant</option>
            <option value="Base">Base</option>
            <option value="Mid">Mid</option>
            <option value="Top">Top</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="">Select Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Welcome;
