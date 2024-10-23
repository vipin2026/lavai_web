import React from 'react';
import { motion } from 'framer-motion';

export default function Healthcare() {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center">
      {/* <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-200">Healthcare Marketing Strategy</h1> */}
      <div className='w-[90%] max-w-5xl'>

     
      <motion.div
        className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Healthcare</h2>
        <p className="mb-4 text-gray-600"><strong>Introduction:</strong> Marketing in healthcare requires navigating strict privacy regulations...</p>
        {/* Add more content as necessary */}
      </motion.div>
      </div>
    </div>
  );
}
