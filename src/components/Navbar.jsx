import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">XPENCE</h2>
      </div>

      <div className="navbar-center">
        <h3>All Accounts</h3>
      </div>

      <div className="navbar-right">
        <img
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <span className="profile-name">Yves Honore ▾</span>
      </div>
    </nav>
  );
}

export default Navbar;
