import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalNavbar.css';

const HorizontalNavbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default HorizontalNavbar;
