import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const lavai = [
    'Account-Based Marketing (ABM)',
    'Content Marketing',
    'Digital Marketing Strategies',
    'Email Marketing',
    'Lead Nurturing and Management',
    'Data Analytics and Insights',
    'Brand Development and Management',
    'Event Marketing and Webinars',
    'Partnerships and Alliances',
    'Technology Utilization',
    'Training and Support',
    'Localization and Compliance',
    'Innovative Marketing Techniques',
  ];

  const services = {
    Channels: ['WhatsApp', 'Email'],
    Orchestration: ['Journey Orchestration', 'Experimentation'],
    Vertical: ['Utilities', 'Financial Services', 'Public Sector', 'Healthcare'],
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
      setIsServicesDropdownOpen(false);
    }
  };

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white">
      <div className="flex items-center">
        <p className='sm:text-2xl md:text-2xl text-sm p-2 text-blue-500 font-bold'>LAVAI</p>
      </div>

      <div className="flex items-center md:space-x-6 sm:space-x-6 space-x-2 ml-auto relative mr-4">
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-yellow-400"
        >
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <div className="absolute top-12 right-0 bg-gray-800 w-48 rounded-lg shadow-lg z-50 p-4">
    <Link to="/" className="block text-sm text-white-600 hover:text-yellow-400 py-2">Home</Link>
    
    {/* Services Dropdown for Mobile */}
    <div className="relative">
      <button
        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
        className="block text-sm text-white-600 hover:text-yellow-400 py-2"
      >
        Services
      </button>
      {isServicesDropdownOpen && (
        <div className="bg-white-700 rounded-lg p-2 mt-1">
          <p className="text-xs font-bold text-[#616c7d]">CHANNELS</p>
          {services.Channels.map((channel, index) => (
            <Link
              key={index}
              to={`/services/channels/${channel.toLowerCase().replace(/ /g, '-')}`}
              className="block text-sm text-gray-400 hover:text-purple-600 mt-1"
            >
              {channel}
            </Link>
          ))}
          <p className="text-xs font-bold text-[#616c7d] mt-2">ORCHESTRATION</p>
          {services.Orchestration.map((item, index) => (
            <Link
              key={index}
              to={`/services/orchestration/${item.toLowerCase().replace(/ /g, '-')}`}
              className="block text-sm text-gray-400 hover:text-purple-600 mt-1"
            >
              {item}
            </Link>
          ))}
          <p className="text-xs font-bold text-[#616c7d] mt-2">VERTICAL</p>
          {services.Vertical.map((item, index) => (
            <Link
              key={index}
              to={`/services/vertical/${item.toLowerCase().replace(/ /g, '-')}`}
              className="block text-sm text-gray-400 hover:text-purple-600 mt-1"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>

    {/* Why Lavai Dropdown for Mobile */}
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="block text-sm text-white-600 hover:text-yellow-400 py-2"
      >
        Why Lavai?
      </button>
      {isDropdownOpen && (
        <div className="bg-white-700 rounded-lg p-2 mt-1">
          {lavai.map((service, index) => (
            <Link
              key={index}
              to={`/lavai/${service.toLowerCase().replace(/ /g, '-')}`}
              className="block text-sm text-gray-400 hover:text-purple-600 mt-1"
            >
              {service}
            </Link>
          ))}
        </div>
      )}
    </div>

    <Link to="/experience" className="block text-sm text-white-600 hover:text-yellow-400 py-2">Past Experience</Link>
    <Link to="/about" className="block text-sm text-white-600 hover:text-yellow-400 py-2">About Us</Link>
    <Link to="/login" className="block text-sm font-bold py-2 text-white rounded">Login</Link>
  </div>
)}


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:space-x-6 sm:space-x-6 space-x-2">
          <Link to="/" className="text-[8px] sm:text-[8px] lg:text-sm hover:text-yellow-400">Home</Link>
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="text-[8px] sm:text-[8px] lg:text-sm hover:text-yellow-400 focus:outline-none"
            >
              Services
            </button>
            {isServicesDropdownOpen && (
              <div
                className="absolute left-0 mt-3 bg-gray-200 border border-gray-300 rounded-lg shadow-lg z-50 p-6 w-[400px]"
                ref={servicesDropdownRef}
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-base font-bold text-[#616c7d]">CHANNELS</p>
                    {services.Channels.map((channel, index) => (
                      <Link
                        key={index}
                        to={`/services/channels/${channel.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:underline mt-2"
                      >
                        {channel}
                      </Link>
                    ))}
                  </div>
                  <div className='mr-4 -ml-6'>
                    <p className="text-base font-bold text-[#616c7d]">ORCHESTRATION</p>
                    {services.Orchestration.map((item, index) => (
                      <Link
                        key={index}
                        to={`/services/orchestration/${item.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:underline mt-2"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#616c7d]">VERTICAL</p>
                    {services.Vertical.map((item, index) => (
                      <Link
                        key={index}
                        to={`/services/vertical/${item.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:underline mt-2"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/experience" className="text-[8px] sm:text-[8px] lg:text-sm hover:text-yellow-400">Past Experience</Link>
          <Link to="/about" className="text-[8px] sm:text-[8px] lg:text-sm hover:text-yellow-400">About Us</Link>

          <div className="relative -mt-2.5 md:mt-0" ref={dropdownRef}>
<button
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  className="text-[4px] sm:text-[8px]  lg:text-sm hover:text-yellow-400 focus:outline-none"
>
  Why Lavai?
</button>
{isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
      {lavai.map((service, index) => (
        <Link
          key={index}
          to={`/lavai/${service.toLowerCase().replace(/ /g, '-')}`}
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 border-b border-gray-600 last:border-b-0"
          onClick={() => setIsDropdownOpen(false)}
        >
          {service}
        </Link>
      ))}
    </div>
  </div>
)}
</div>

          <Link to="/login" className="text-[8px] sm:text-[8px] lg:text-sm bg-green-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;