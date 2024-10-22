import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
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

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white">
      <div className="flex items-center ">
        <p className='sm:text-2xl md:text-2xl text-sm p-2 text-blue-500 font-bold'>LAVAI</p>
      </div>

      <div className="flex items-center md:space-x-6 sm:space-x-6 space-x-2 ml-auto relative mr-4">
        <Link to="/" className="text-[6px] sm:text-[8px] lg:text-sm hover:text-yellow-400">Home</Link>
        <Link to="/services" className="text-[6px] sm:text-[8px] lg:text-sm hover:text-yellow-400">Services</Link>
        <Link to="/experience" className="text-[6px] sm:text-[8px] lg:text-sm hover:text-yellow-400">Past Experience</Link>
        <Link to="/about" className="text-[6px] sm:text-[8px] lg:text-sm hover:text-yellow-400">About Us</Link>

        <div className="relative -mt-2.5 md:mt-0" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-[6px] sm:text-[8px]  lg:text-sm hover:text-yellow-400 focus:outline-none"
          >
            Why Lavai?
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
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

        <Link to="/login" className="text-[6px] sm:text-[8px] lg:text-sm bg-green-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
