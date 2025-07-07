import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="brand_yellow">X</span> <span className='brand_white'>PENCE</span>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/income"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expenses"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Expenses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
