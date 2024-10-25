import React from 'react';
import { motion } from 'framer-motion';

export default function FinancialServices() {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center">
      <div className='w-[90%] max-w-5xl'>
        
        {/* Introduction Section */}
        {/* <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > */}
          <h2 className="text-2xl font-bold text-center mb-4 text-white">Financial Services Marketing Strategy</h2>
          <p className="mb-4 text-white text-center text-2xl"> Financial services companies face highly competitive markets, requiring precise, customized marketing strategies.</p>
        {/* </motion.div> */}

        {/* Email Customization with Personalization at Scale */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Email Customization with Personalization at Scale</h3>
          <p className="text-gray-600">Implement hyper-personalized email campaigns using dynamic content to engage each client effectively.</p>
        </motion.div>

        {/* LinkedIn Analytics and Targeting */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">LinkedIn Analytics and Targeting</h3>
          <p className="text-gray-600">Use advanced LinkedIn tools to identify and engage decision-makers in financial services.</p>
        </motion.div>

        {/* Lead Qualification and Analysis */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Lead Qualification and Analysis</h3>
          <p className="text-gray-600">Implement data-driven lead qualification systems to focus on high-value clients.</p>
        </motion.div>

        {/* Content Marketing for Authority Building */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Content Marketing for Authority Building</h3>
          <p className="text-gray-600">Create financial industry-specific content like whitepapers, eBooks, and case studies to build authority.</p>
        </motion.div>

        {/* Retargeting Campaigns for Financial Clients */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Retargeting Campaigns for Financial Clients</h3>
          <p className="text-gray-600">Develop precise retargeting strategies aimed at re-engaging financial clients.</p>
        </motion.div>

        {/* SEO & SEM Strategies for Financial Keywords */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">SEO & SEM Strategies for Financial Keywords</h3>
          <p className="text-gray-600">Optimize your site and ads for financial keywords to capture high-intent search traffic.</p>
        </motion.div>

        {/* Regulatory Compliance Marketing */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Regulatory Compliance Marketing</h3>
          <p className="text-gray-600">Create marketing materials that adhere to regulations like FINRA, FCA, or SEC guidelines.</p>
        </motion.div>

        {/* Multi-Channel Engagement Strategy */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-blue-300"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Multi-Channel Engagement Strategy</h3>
          <p className="text-gray-600">Engage financial executives through a mix of email, social media, and direct mail for effective multi-channel reach.</p>
        </motion.div>

      </div>
    </div>
  );
}
