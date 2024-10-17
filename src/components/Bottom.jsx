import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScheduleCall = () => {
    navigate('/contact'); // Navigate to ContactUs page
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Contact Detail */}
      <div>
        <p className="text-lg">
          You can contact us at: <strong>contact@Lav.AI.com</strong>
        </p>
      </div>

      {/* Schedule a Call Button */}
      <div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 animate-move"
          onClick={handleScheduleCall} // Add onClick handler
        >
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
