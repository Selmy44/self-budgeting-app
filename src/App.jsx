import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import Settings from './pages/Settings';
import MobileMoney from './pages/MobileMoney';
import EquityBank from './pages/EquityBank';
import Cash from './pages/Cash';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/MobileMoney" element={<MobileMoney />} />
          <Route path="/EquityBank" element={<EquityBank />} />
          <Route path="/Cash" element={<Cash />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
