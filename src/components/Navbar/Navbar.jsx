import React, { useState } from 'react';
import '../../styles/navbar.css';

// Import all images and icons
import GraphIcon from '../../assets/icons/Navbar/Graph.png';
import CalendarIcon from '../../assets/icons/Navbar/Calender.png';
import DropdownArrow from '../../assets/icons/Navbar/Drop-down.png';
import BlinkitLogo from '../../assets/images/Navbar/Blinkit.png';
import ZeptoLogo from '../../assets/images/Navbar/Zepto.png';
import InstamartLogo from '../../assets/images/Navbar/Instamart.png';

const Navbar = () => {
  const [isGraphEnabled, setIsGraphEnabled] = useState(true);
  const [selectedDateRange, setSelectedDateRange] = useState('custom');
  const [activePlatform, setActivePlatform] = useState('blinkit');

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Left Section - Title */}
        <div className="navbar-left">
          <h4 className="navbar-title">Quick Commerce</h4>
        </div>

        {/* Right Section - Controls */}
        <div className="navbar-right">
          {/* Graph Toggle */}
          <div className="graph-toggle">
            <img src={GraphIcon} alt="Graph" className="graph-icon" />
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={isGraphEnabled}
                onChange={() => setIsGraphEnabled(!isGraphEnabled)}
              />
              <span className="slider"></span>
            </label>
          </div>

          {/* Date Range Selector */}
          <div className="date-range-selector">
            <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
            <div className="date-range-text">Aug 01, 2024 - Aug 03, 2024</div>
            <img src={DropdownArrow} alt="Dropdown" className="dropdown-arrow" />
          </div>
        </div>
      </div>
      
      <div className="navbar-divider"></div>
      
      <div className="platform-switcher-container">
      <div 
  className={`platform-switcher ${activePlatform ? 'has-active' : ''}`}
>
  <button 
    className={`platform-button ${activePlatform === 'blinkit' ? 'active' : ''}`}
    onClick={() => setActivePlatform('blinkit')}
  >
    <img src={BlinkitLogo} alt="Blinkit" className="platform-logo" />
    Blinkit
  </button>
  <button 
    className={`platform-button ${activePlatform === 'zepto' ? 'active' : ''}`}
    onClick={() => setActivePlatform('zepto')}
  >
    <img src={ZeptoLogo} alt="Zepto" className="platform-logo" />
    Zepto
  </button>
  <button 
    className={`platform-button ${activePlatform === 'instamart' ? 'active' : ''}`}
    onClick={() => setActivePlatform('instamart')}
  >
    <img src={InstamartLogo} alt="Instamart" className="platform-logo" />
    Instamart
  </button>
</div>
      </div>
      </div>
  );
};

export default Navbar;