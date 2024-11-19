import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardData = [
    {
        title: 'Close deals interact more be aware of your clients',
        content: 'Make sure you reach the target audience which you always wanted through your decision making and our support to boost revenue.'
    },
    {
        title: 'Progress your deals to a new level',
        content: 'Streamline stakeholder management, identifying risks early, and stay proactive with the next best actions to keep momentum strong inside and outside.'
    },
    {
        title: "Prioritize the best approach to reach your audience.",
        content: "We create and execute campaigns that keep you connected with leads, turning strategy into real results."
    },
    {
        title: "Data-Driven Marketing: Track, Test and Refine",
        content: "Track performance, refine strategies, and build stronger data-driven marketing for impactful results."
    },
];

const CardsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollableHeight = document.documentElement.scrollHeight - windowHeight;

        // Calculate scroll percentage
        const scrollPercentage = (scrollPosition / scrollableHeight) * 100;

        // Determine which card should be shown based on scroll percentage
        if (scrollPercentage >= 50 && scrollPercentage < 55) {
            setCurrentIndex(0);
        } else if (scrollPercentage >= 55 && scrollPercentage < 57) {
            setCurrentIndex(1);
        } else if (scrollPercentage >= 57 && scrollPercentage < 60) {
            setCurrentIndex(2);
        } else if (scrollPercentage >= 60 && scrollPercentage < 62) {
            setCurrentIndex(3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="h-[900px] relative overflow-hidden">
            {/* Fixed Background */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1]"
                style={{ backgroundImage: 'url(/images/theme.jpg)' }}
            />

            {/* Content */}
            <div className="h-screen flex items-center justify-center mt-32">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: currentIndex === index ? 1 : 0, y: currentIndex === index ? 0 : 50 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-[600px] h-[400px] bg-white shadow-lg rounded-[20px] p-8 text-center"
                        style={{ display: currentIndex === index ? 'block' : 'none' }}
                    >
                        <h2
                            className="text-4xl text-gray-900 font-bold mb-4"
                            style={{ fontFamily: 'Europa Grotesk SH' }}
                        >
                            {card.title}
                        </h2>
                        <p className="text-gray-700 text-lg font-medium">
                            {card.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CardsPage;
