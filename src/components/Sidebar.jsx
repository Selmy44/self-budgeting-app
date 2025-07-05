import React from 'react';
import '../styles/Components.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-accounts-header">
          <span className="section-title">MY ACCOUNTS</span>
          <button className="add-account-btn">+</button>
        </div>
        <ul className="account-list">
          <li className="active">All Accounts</li>
          <li>Mobile Money</li>
          <li>Equity Bank</li>
          <li>Cash</li>
        </ul>
        <div className="sidebar-divider" />
        <ul className="sidebar-section-bottom" style={{ marginTop: '2px', marginBottom: '0' }}>
          <li>
            <span className="sidebar-icon" role="img" aria-label="preferences">⚙️</span>
            Preferences
            <span className="sidebar-arrow">{'›'}</span>
          </li>
          <li>
            <span className="sidebar-icon" role="img" aria-label="profile">👤</span>
            My profile
            <span className="sidebar-arrow">{'›'}</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-logout">
        <a href="#" className="logout-link">
          Logout
        </a>
        <span className="logout-icon" role="img" aria-label="logout">
          {/* Use a right arrow out icon for clarity */}
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 15l5-5-5-5M18 10H7M7 19a2 2 0 01-2-2V3a2 2 0 012-2h4" stroke="#5F27CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
