import React, { useState } from 'react';
import '../../styles/sidebar.css';

// Import all images and icons
import Logo1 from '../../assets/images/Sidebar/Logo1.png';
import Logo3 from '../../assets/images/Sidebar/Logo2.png';
import Logo2 from '../../assets/images/Sidebar/Logo3.png';
import PlusIcon from '../../assets/images/Sidebar/plus.png';
import OverviewIcon from '../../assets/icons/Sidebar/Overview.png';
import ChannelsIcon from '../../assets/icons/Sidebar/Channels.png';
import CreativesIcon from '../../assets/icons/Sidebar/Creatives.png';
import HelpIcon from '../../assets/icons/Sidebar/Help.png';
import SettingsIcon from '../../assets/icons/Sidebar/Settings.png';
import Selector from '../../assets/icons/Sidebar/Selector.png';
import DropdownIcon from '../../assets/icons/Sidebar/Drop-down.png';
import CollapseIcon from '../../assets/icons/Sidebar/Collapse.png';
import BrandIcon from '../../assets/images/Sidebar/SS-green.png';
import BrandIcon2 from '../../assets/images/Sidebar/SS-purple.png'; 
import UserIcon from '../../assets/images/Sidebar/People.png';

const Sidebar = () => {
  const [isChannelsOpen, setIsChannelsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('overview');
  const [activeSubLink, setActiveSubLink] = useState(null);

  const handleNavClick = (link) => {
    setActiveLink(link);
    if (link !== 'channels') {
      setIsChannelsOpen(false);
    }
  };

  const handleSubNavClick = (subLink) => {
    setActiveSubLink(subLink);
    setActiveLink('channels');
  };

  // Empty function for non-functional collapse button
  const handleCollapseClick = () => {};

  return (
    <div className="sidebar">
      {/* Left Column (Brands) */}
      <div className="left-column">
        <div className="brand-logos">
          <img src={Logo1} alt="Brand Logo 1" className="logo-img" />
          <img src={Logo2} alt="Brand Logo 2" className="logo-img" />
          <img src={Logo3} alt="Brand Logo 3" className="logo-img" />
          <img src={PlusIcon} alt="Add Brand" className="plus-icon" />
        </div>
      </div>

      {/* Right Column (Navigation) */}
      <div className="right-column">
        {/* Top Header Section */}
        <div className="top-header">
          <div className="brand-selector">
            <img src={BrandIcon} alt="Brand SS" className="brand-ss-icon" />
            <div className="brand-name">Test_brand</div>
            <img src={Selector} alt="Selector" className="selector-icon" />
          </div>
          <button
            className="collapse-btn"
            onClick={handleCollapseClick} // Non-functional button
          >
            <img src={CollapseIcon} alt="Collapse" className="collapse-icon" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <button
            className={`nav-link ${activeLink === 'overview' ? 'active' : ''}`}
            onClick={() => handleNavClick('overview')}
          >
            <img src={OverviewIcon} alt="Overview" className="nav-icon" />
            <span>Overview</span>
          </button>

          <div className="dropdown">
            <button
              className={`nav-link ${activeLink === 'channels' ? 'active' : ''}`}
              onClick={() => {
                setIsChannelsOpen(!isChannelsOpen);
                handleNavClick('channels');
              }}
            >
              <img src={ChannelsIcon} alt="Channels" className="nav-icon" />
              <span>Channels</span>
              <img
                src={DropdownIcon}
                alt="Toggle"
                className={`dropdown-icon ${isChannelsOpen ? 'open' : ''}`}
              />
            </button>
            
            {isChannelsOpen && (
              <div className="submenu">
                <button
                  className={`submenu-link ${activeSubLink === 'meta-ads' ? 'active' : ''}`}
                  onClick={() => handleSubNavClick('meta-ads')}
                >
                  Meta Ads
                </button>
                <button
                  className={`submenu-link ${activeSubLink === 'google-ads' ? 'active' : ''}`}
                  onClick={() => handleSubNavClick('google-ads')}
                >
                  Google Ads
                </button>
                <button
                  className={`submenu-link ${activeSubLink === 'quick-commerce' ? 'active' : ''}`}
                  onClick={() => handleSubNavClick('quick-commerce')}
                >
                  Quick Commerce
                </button>
              </div>
            )}
          </div>

          <button
            className={`nav-link ${activeLink === 'creatives' ? 'active' : ''}`}
            onClick={() => handleNavClick('creatives')}
          >
            <img src={CreativesIcon} alt="Creatives" className="nav-icon" />
            <span>Creatives</span>
          </button>
        </nav>

        {/* Bottom Links */}
        <div className="bottom-links">
          <button
            className={`nav-link ${activeLink === 'help' ? 'active' : ''}`}
            onClick={() => handleNavClick('help')}
          >
            <img src={HelpIcon} alt="Help" className="nav-icon" />
            <span>Help</span>
          </button>
          <button
            className={`nav-link settings-link ${activeLink === 'settings' ? 'active' : ''}`}
            onClick={() => handleNavClick('settings')}
          >
            <img src={SettingsIcon} alt="Settings" className="nav-icon" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* User Icons */}
      <div className="user-icons">
        <img src={UserIcon} alt="User" className="user-icon" />
        <img src={BrandIcon2} alt="SS" className="ss-icon" />
      </div>
    </div>
  );
};

export default Sidebar;