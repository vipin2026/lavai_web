import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation(); // Get the current location
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
  const dropdownRef = useRef(null); // Reference for the dropdown

  // Services list for the dropdown
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
    // Close dropdown when the path changes
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left Side: Logo and Company Name */}
      <div className="flex items-center">
        {/* <div className='mr-3 bg-black w-18'> */}
        <p className='text-2xl p-2 text-blue-500 font-bold'>LAVAI</p>

        {/* </div> */}
        {/* <img src="/images/logo1.jpg" alt="Logo" className="w-24 h-10 mr-3" /> */}
        {/* <span className="text-xl font-bold">Lav.AI</span> */}
      </div>


      <div className="flex space-x-6 relative">

        <Link to="/" className="hover:text-yellow-400">Home</Link>

        <Link to="/services" className="hover:text-yellow-400">Services</Link>

        <Link to="/experience" className="hover:text-yellow-400">Past Experience</Link>


        <Link to="/about" className="hover:text-yellow-400">About Us</Link>


        {/* Dropdown for "Vipin" */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
            className="hover:text-yellow-400 focus:outline-none"
          >
            Why Lavai?
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/ /g, '-')}`} // Generate dynamic routes
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 border-b border-gray-600 last:border-b-0"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Login Button */}
        {/* {location.pathname !== '/login' && ( */}
        <Link to="/login" className="bg-green-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Login</Link>
        {/* )} */}
      </div>
    </div>
  );
};

export default Topbar;
