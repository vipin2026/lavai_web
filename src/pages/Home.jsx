import React, { useEffect, useRef, useState } from 'react';
import BottomBar from '../components/Bottom';
import Rates from './HomePages/Rates';
import Cards from './HomePages/Cards';
import Diagram1 from './HomePages/Diagram1';
import Options from './HomePages/Options';




const words = ['YOU', 'DICTATE', 'WE', 'DELIVER'];
const companyNames = [
  { name: 'Gurukul Global School', logo: '/images/gugukul-logo-icon.png' },
  { name: 'Camp Himalayan', logo: '/images/logo-transparent.png' },
  { name: 'Rich Kids of India', logo: '/images/logo.png' },
  { name: 'The Trillionaire Life', logo: '/images/tl.png' },
  { name: 'Himalayan Nutrition', logo: '/images/LOGO_CDR.webp' },
  { name: 'KL Health Group', logo: '/images/kel-health-logo.svg' },
  { name: 'CVS Health', logo: '/images/CVS_Health_logo.svg' },
  { name: 'Watches.io', logo: '/images/watch.png' },
  { name: 'HDFC Bank', logo: '/images/hdfc.png' },
  { name: 'AXIS Bank', logo: '/images/axis.jpeg' },
];

export default function Home() {
  const [completed, setCompleted] = useState(false);
  const [isRatesVisible, setIsRatesVisible] = useState(false); // Track visibility of Rates section
  const ratesRef = useRef(null);

  // Trigger the word animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCompleted(true);
    }, words.length * 600); // Adjust time for completion based on word count

    return () => clearTimeout(timer);
  }, []);

  // Use Intersection Observer to detect when Rates is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRatesVisible(true); // When Rates is in view, trigger visibility
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the Rates component is visible
    );

    if (ratesRef.current) {
      observer.observe(ratesRef.current);
    }

    return () => {
      if (ratesRef.current) {
        observer.unobserve(ratesRef.current);
      }
    };
  }, []);

  return (
    <>
     <div className="min-h-screen  flex flex-col">
      <div className="relative flex flex-col items-center h-[90vh]   bg-gradient-to-r from-blue-800 to-purple-600 text-white">
        {/* Animated Words */}
        <div className='absolute left-0 md:mt-12 md:ml-8 ml-6 mt-8 '>
        <img src="/images/home.gif" alt="gif" className="h-[150px] w-[150px] md:h-[500px] md:w-[700px] sm:h-[40px] sm:w-[40px]" />
        </div>

        <div className='absolute flex flex-col items-center right-0 md:mr-40 md:mt-40 mt-16 mr-8 '>
          <h1 className="md:text-5xl text-sm font-bold text-center mb-6">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-in-out transform ${
                  completed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`, // Stagger the animation
                  color: `hsl(${(index * 90) % 360}, 100%, 80%)`, // Different colors for each word
                }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>

        {/* Continuous Sliding Banner */}
        <div className="absolute bottom-16 w-full overflow-hidden  ">
          <div className="bg-gradient-to-r from-blue-800 to-purple-600 p-4">
            <div className="flex space-x-10 animate-slide whitespace-nowrap ">
              {companyNames.map((company, index) => (
                <div key={index} className="flex items-center">
                  <img src={company.logo} alt={company.name} className="w-16 h-16 mr-2" />
                  <span className="mr-20 text-xl font-semibold text-white-800">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rates component with a reference */}
      <div ref={ratesRef}>
        <Rates isVisible={isRatesVisible} /> {/* Pass visibility state to Rates */}
      </div>

<Cards/>
{/* <Diagram1/> */}
<Options/>
<div className="flex-grow mb-16"></div>
        <BottomBar />
      </div>
    </>
  );
}

// Add Tailwind CSS keyframe animation for sliding effect
const styles = `
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-slide {
  animation: slide 40s linear infinite;
}
`;

export const injectStyles = () => {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

// Call this function to inject styles when the component mounts
injectStyles();
