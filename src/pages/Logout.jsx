import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pages.css';

function Logout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked with:', { email, password });
    // TODO: Connect to backend and redirect to dashboard
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-center">
        <h1 className="brand brand-center">
          <span className="brand-yellow">X</span>PENCE
        </h1>
        <div className="login-card">
          <h2>Welcome to XPENCE</h2>
          <p className="sub-text">Login to continue</p>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
          <p className="forgot">Forgot password?</p>
          <hr />
          <p className="create-account">New? <span>Create Account</span></p>
        </div>
      </div>
    </div>
  );
}

export default Logout;
