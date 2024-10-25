import React from 'react';
import { motion } from 'framer-motion';

export default function Healthcare() {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center">
      <div className='w-[90%] max-w-5xl'>

        {/* Introduction Section */}
        {/* <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > */}
          <h2 className="text-2xl font-bold text-center mb-4 text-white">Healthcare Marketing Strategy</h2>
          <p className="mb-4 text-white text-center text-2xl"><strong>Introduction:</strong> Marketing in healthcare requires navigating strict privacy regulations while effectively reaching patients and professionals.</p>
        {/* </motion.div> */}

        {/* Patient-Centric SEO and Content */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Patient-Centric SEO and Content</h3>
          <p className="text-gray-600">Develop content tailored to patients searching for specific medical services to improve online visibility.</p>
        </motion.div>

        {/* HIPAA-Compliant Marketing Solutions */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">HIPAA-Compliant Marketing Solutions</h3>
          <p className="text-gray-600">Create email marketing campaigns that adhere to HIPAA guidelines to ensure patient privacy.</p>
        </motion.div>

        {/* Medical Professional Outreach on LinkedIn */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Medical Professional Outreach on LinkedIn</h3>
          <p className="text-gray-600">Utilize LinkedIn to connect with healthcare administrators and professionals for outreach and engagement.</p>
        </motion.div>

        {/* Telemedicine Promotion */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Telemedicine Promotion</h3>
          <p className="text-gray-600">Develop campaigns to promote telemedicine services and healthcare innovations to reach patients digitally.</p>
        </motion.div>

        {/* Google Ads and PPC for Healthcare */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Google Ads and PPC for Healthcare</h3>
          <p className="text-gray-600">Run targeted Google Ads campaigns to capture leads from patients seeking immediate medical assistance.</p>
        </motion.div>

        {/* Healthcare Data and Analytics */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Healthcare Data and Analytics</h3>
          <p className="text-gray-600">Leverage data analytics to track patient interactions, identify trends, and deliver personalized marketing solutions.</p>
        </motion.div>

        {/* Content Marketing for Thought Leadership */}
        <motion.div
          className="service-card bg-white rounded-lg p-6 shadow-2xl border-2 border-green-300"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">Content Marketing for Thought Leadership</h3>
          <p className="text-gray-600">Publish whitepapers, case studies, and blog posts on healthcare trends to position your brand as a thought leader.</p>
        </motion.div>

      </div>
    </div>
  );
}
