import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">XPENCE</div>
      <ul className="navbar__links">
        <li><NavLink to="/" className="nav-link">Dashboard</NavLink></li>
        <li><NavLink to="/transactions" className="nav-link">Transactions</NavLink></li>
        <li><NavLink to="/income" className="nav-link">Income</NavLink></li>
        <li><NavLink to="/expenses" className="nav-link">Expenses</NavLink></li>
        <li><NavLink to="/settings" className="nav-link">Settings</NavLink></li>
        <li><NavLink to="/login" className="nav-link nav-login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
