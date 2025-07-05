import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Pages.css';

function Transactions() {
  return (
    <div className="transactions-page">
      <Sidebar />
      <div className="transactions-main">
        <h1>All Accounts</h1>
        {/* We’ll add cards, filters, and table here next */}
      </div>
    </div>
  );
}

export default Transactions;
