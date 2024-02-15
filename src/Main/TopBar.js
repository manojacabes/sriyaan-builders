import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import './style.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="logo">Your Logo</div>
      <div className="options">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/other-option">Other Option</NavLink>
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default TopBar;
