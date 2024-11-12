import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Rates = ({ isVisible }) => {
  const [startCount, setStartCount] = useState(false);

  // Trigger the count-up effect only when Rates becomes visible
  useEffect(() => {
    if (isVisible) {
      setStartCount(true);
    }
  }, [isVisible]); // Re-run effect when visibility changes

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-800 to-purple-600 text-white p-16">
      {/* Left Side Text */}

      
      <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left ml-20">
        <h1 className="text-4xl font-bold mb-4">
          LAVAI helps improve decision making
        </h1>
        <p className="text-lg">
          With a strong approach towards your marketing needs and increasing conversion rates by over 20%.
        </p>
      </div>

      {/* Right Side Counter */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-center">
        {startCount && (
          <div className="text-[200px] font-bold text-white-600">
            <CountUp start={0} end={20} duration={5} suffix="%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rates;
