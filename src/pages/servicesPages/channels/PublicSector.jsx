import React from 'react';
import { motion } from 'framer-motion';

export default function PublicSector() {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center">
      <div className='w-[90%] max-w-5xl'>
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Public Sector</h2>
        {/* Introduction Section */}
        {/* <motion.div
          className="service-card bg-white rounded-lg  shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > */}

        <p className="mb-6 text-white text-2xl text-center">Marketing in the public sector requires an understanding of government processes, regulations, and long sales cycles.</p>
        {/* </motion.div> */}

        {/* Cold Calling Strategy Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Government Tender Tracking</h3>
          <p className="text-gray-600"> We monitor and analyze government tenders to identify the most lucrative opportunities for your business.
          </p>
        </motion.div>

        {/* SEO Optimization Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">RFP Response Optimization</h3>
          <p className="text-gray-600">Improve the success rate of your responses to Requests for Proposals (RFPs).</p>
        </motion.div>

        {/* Advanced Email Marketing Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Compliance Marketing</h3>
          <p className="text-gray-600">We ensure all your marketing materials adhere to public sector regulations and compliance standards.</p>
        </motion.div>

        {/* Social Media Analytics & Campaigns Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Community Engagement Programs</h3>
          <p className="text-gray-600">Implement campaigns that foster community relations, helping build trust with public sector stakeholders.</p>
        </motion.div>

        {/* Marketing Plan Enhancement Section */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">LinkedIn & Government Relations Marketing</h3>
          <p className="text-gray-600">Strengthen your LinkedIn presence with content that appeals to public sector clients.</p>
        </motion.div>
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Educational Webinars and Workshops</h3>
          <p className="text-gray-600"> Organize virtual or in-person events focused on public sector trends and emerging technologies.</p>
        </motion.div>
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-purple-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Email Campaigns for Public Procurement Officers</h3>
          <p className="text-gray-600">Target procurement officers through personalized and relevant email campaigns.</p>
        </motion.div>

      </div>
    </div>
  );
}
