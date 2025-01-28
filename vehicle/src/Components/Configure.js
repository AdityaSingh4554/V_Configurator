import React, { useState } from 'react';
import './Configure.css';

const Configure = () => {
  const [interior, setInterior] = useState('');
  const [exterior, setExterior] = useState('');
  const [accessories, setAccessories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Configuration:', { interior, exterior, accessories });
  };

  return (
    <div className="configure-container">
      <div className="features-section">
        <h2>Standard Features</h2>
        <div className="image-placeholder">
          <img src="c2.jpg" alt="Car" />
        </div>
        <ul>
          <li>Power Windows</li>
          <li>Leather Seats</li>
          <li>Touchscreen Display</li>
          <li>Backup Camera</li>
          <li>Bluetooth Connectivity</li>
        </ul>
      </div>

      <div className="configuration-section">
        <h2>Configure Your Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="interior">Interior:</label>
            <select
              id="interior"
              value={interior}
              onChange={(e) => setInterior(e.target.value)}
            >
              <option value="">Select Interior</option>
              <option value="Leather">Leather</option>
              <option value="Fabric">Fabric</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exterior">Exterior:</label>
            <select
              id="exterior"
              value={exterior}
              onChange={(e) => setExterior(e.target.value)}
            >
              <option value="">Select Exterior</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="accessories">Accessories:</label>
            <select
              id="accessories"
              value={accessories}
              onChange={(e) => setAccessories(e.target.value)}
            >
              <option value="">Select Accessories</option>
              <option value="Sunroof">Sunroof</option>
              <option value="Spoilers">Spoilers</option>
              <option value="Alloy Wheels">Alloy Wheels</option>
            </select>
          </div>

          <div className="buttons">
            <button type="button" className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-confirm">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Configure;
