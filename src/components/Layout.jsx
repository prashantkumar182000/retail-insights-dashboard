import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import SalesMetrics from './DashboardBody/SalesMetrics';
import SKUTable from './DashboardBody/SKUTable';
import CityTable from './DashboardBody/CityTable';
import '../styles/layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="dashboard-body">
          <SalesMetrics />
          <SKUTable />
          <CityTable />
        </div>
      </div>
    </div>
  );
};

export default Layout;