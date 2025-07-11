import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => localStorage.getItem('sidebarOpen') === 'true'
  );
  const location = useLocation();

  // Close on route change (mobile only)
  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Navbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} isOpen={sidebarOpen} />

      <div className="layout-body">
        <Sidebar isOpen={sidebarOpen} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
