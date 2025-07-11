import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import Settings from './pages/Settings';
import MobileMoney from './pages/MobileMoney';
import EquityBank from './pages/EquityBank';
import Cash from './pages/Cash';
import Profile from './pages/Profile';
import EditPicture from './pages/EditPicture';
import ChangePassword from './pages/ChangePassword';
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-picture" element={<EditPicture />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
