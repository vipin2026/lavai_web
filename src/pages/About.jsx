import React from 'react';

export default function About() {
  return (
    <div className="relative overflow-hidden h-[90vh] bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col justify-center items-center text-white">
      {/* Floating Background Elements */}
      <div className="absolute -top-10 -left-20 w-40 h-40 bg-pink-500 rounded-full opacity-30 animate-bounce" />
      <div className="absolute -bottom-16 -right-20 w-56 h-56 bg-yellow-500 rounded-full opacity-30 animate-pulse" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-30" />

      {/* Content Container */}
      <div className="relative z-10 p-8 rounded-lg bg-white bg-opacity-20 shadow-lg backdrop-blur-lg max-w-4xl text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg animate-pulse">About Us</h1>
        <p className="text-lg mb-6 leading-relaxed text-white animate-fadeIn">
          At <span className="font-bold">LAVAI.com</span>, we are a flexible, results-driven agency with a dynamic team of talented graphic designers, veteran writers, and editors who specialize in tech, life sciences, finance, and other complex industries. Our chief strategist has crafted high-growth SEO and content marketing strategies for startups and enterprise brands alike.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-white animate-fadeIn">
          Whether you're building a content strategy from scratch or scaling your production, we deliver solutions tailored to your goals. Our global clients love that we work as an extension of their team, offering personalized, high-touch service.
        </p>
        <div className="mt-6">
          <a href="#contact" className="px-8 py-3 text-lg font-bold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg">
            Contact Us
          </a>
        </div>
      </div>

      {/* Animated Footer */}
      <footer className="absolute bottom-0 w-full p-4 bg-black bg-opacity-70 text-center">
        <p className="text-sm text-gray-300">© 2024 LAVAI.com. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
