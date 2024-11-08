import React from 'react';

export default function Expertise() {
    return (
        <div className="relative h-[900px] overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col  justify-center items-center text-white">
            {/* Floating Background Elements */}
            <div className="absolute -top-10 -left-20 w-40 h-40 bg-pink-500 rounded-full opacity-30 animate-bounce" />
            <div className="absolute -bottom-16 -right-20 w-56 h-56 bg-yellow-500 rounded-full opacity-30 animate-pulse" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20" />

            {/* Content Container */}
            <div className="relative z-10 p-8 rounded-lg bg-white bg-opacity-20 shadow-lg backdrop-blur-lg max-w-5xl text-center">
                <h1 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg animate-pulse">
                    Our Expertise
                </h1>

                {/* Expertise Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold text-yellow-400 mb-2">Social Media Strategy</h2>
                        <p>We craft engaging content that resonates with your audience. Our custom packages leverage platforms like LinkedIn to boost engagement and enhance your brand image.</p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold text-yellow-400 mb-2">SEO Optimization</h2>
                        <p>Our SEO strategies are tailored to improve your website’s visibility, driving organic traffic and increasing brand awareness to help you reach your audience effectively.</p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold text-yellow-400 mb-2">Lead Generation</h2>
                        <p>We use targeted, data-driven insights to identify high-potential leads, ensuring efficient and effective strategies that maximize your ROI.</p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold text-yellow-400 mb-2">Webinars & Events</h2>
                        <p>Our team organizes expertly curated webinars and events that showcase your strengths, with comprehensive support in promotion and post-event analytics.</p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold text-yellow-400 mb-2">SMS & WhatsApp Marketing</h2>
                        <p>Personalized SMS campaigns and real-time WhatsApp messaging help you connect with your audience and drive meaningful interactions.</p>
                    </div>
                </div>

                {/* Contact Us Button */}
                <div className="mt-10">
                    <a href="#contact" className="px-8 py-3 text-lg font-bold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg">
                        Contact Us
                    </a>
                </div>
            </div>

        
        </div>
    );
}
