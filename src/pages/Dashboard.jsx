import React from 'react';
import SummaryCard from '../components/SummaryCard';
import Charts from '../components/Charts';
import '../styles/Pages.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="summary-grid">
        <SummaryCard title="Total Income" amount="2450" bgColor="#1ABC9C" />
        <SummaryCard title="Total Expenses" amount="1850" bgColor="#E74C3C" />
        <SummaryCard title="Remaining Balance" amount="600" bgColor="#3498DB" />
        <SummaryCard title="Monthly Budget" amount="2000" bgColor="#F39C12" />
      </div>

      <Charts />
    </div>
  );
}

export default Dashboard;
