import React, { useState } from 'react';

export default function Options() {
    // State to track the current slide (default to 0 which is Slide 1)
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of images
    const slides = [
        '/images/Slide1.PNG',
        '/images/Slide2.PNG',
        '/images/Slide3.PNG',
        '/images/Slide4.PNG'
    ];

    // Handlers to change the slide based on the clicked option
    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-blue-800 to-purple-600">
                {/* Top options */}
                <div className="flex justify-between items-center space-x-10 bg-gradient-to-r from-blue-800 to-purple-600 p-4">
                    <div 
                        className="flex-1 text-center p-2 bg-[#a7f2cf] rounded-md text-2xl font-bold cursor-pointer"
                        onClick={() => showSlide(0)} // Show Slide 1
                    >
                        Financial Services
                    </div>
                    <div 
                        className="flex-1 text-center p-2 bg-[#f77272] rounded-md text-2xl font-bold cursor-pointer"
                        onClick={() => showSlide(1)} // Show Slide 2
                    >
                        Public Sector
                    </div>
                    <div 
                        className="flex-1 text-center p-2 bg-[#fce68b] rounded-md text-2xl font-bold cursor-pointer"
                        onClick={() => showSlide(2)} // Show Slide 3
                    >
                        Utilities
                    </div>
                    <div 
                        className="flex-1 text-center p-2 bg-[#ffcccc] rounded-md text-2xl font-bold cursor-pointer"
                        onClick={() => showSlide(3)} // Show Slide 4
                    >
                        Healthcare
                    </div>
                </div>

                {/* Images section: Show the current slide */}
                <div className="h-screen flex justify-center items-center ">
                    <img 
                        src={slides[currentSlide]} 
                        alt={`Slide ${currentSlide + 1}`} 
                        className="w-[80%] h-[82%] object-fit rounded-[20px]" 
                    />
                </div>
            </div>
        </>
    );
}
