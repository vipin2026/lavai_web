import React from 'react';
import { motion } from 'framer-motion';

export default function Utils() {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center">
      <div className='w-[90%] max-w-5xl'>
      <h2 className="text-2xl font-bold text-center mb-4 text-black">Utilities (Refer to Blaze.io)</h2>
        {/* Introduction Section */}
        {/* <motion.div
          className="service-card bg-white rounded-lg  shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > */}
        
          <p className="mb-6 text-white text-2xl text-center"> Utilities companies often face unique challenges when marketing their services due to specific industry requirements.</p>
        {/* </motion.div> */}

        {/* Cold Calling Strategy Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Cold Calling Strategy Development</h3>
          <p className="text-gray-600">Implement targeted cold-calling campaigns focusing on key decision-makers within utilities, enhancing direct outreach effectiveness.</p>
        </motion.div>

        {/* SEO Optimization Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">SEO Optimization for Local and Industry-Specific Search</h3>
          <p className="text-gray-600">Optimize your website for local SEO by showcasing expertise in utilities, ensuring visibility to a targeted audience.</p>
        </motion.div>

        {/* Advanced Email Marketing Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Advanced Email Marketing</h3>
          <p className="text-gray-600">Develop segmented email campaigns for residential, commercial, and government sectors, increasing relevancy and engagement.</p>
        </motion.div>

        {/* Social Media Analytics & Campaigns Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Social Media Analytics & Campaigns</h3>
          <p className="text-gray-600">Analyze social media performance and optimize platforms like LinkedIn and Twitter to engage with decision-makers in utilities sectors, such as water and electricity management.</p>
        </motion.div>

        {/* Marketing Plan Enhancement Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Marketing Plan Enhancement</h3>
          <p className="text-gray-600">Review and enhance your existing marketing plan by identifying areas of improvement and growth opportunities.</p>
        </motion.div>

      </div>
    </div>
  );
}
