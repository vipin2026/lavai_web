import React from 'react';

export default function Options() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-800 to-purple-600">
                {/* Top options */}
                <div className="flex justify-between items-center space-x-10 bg-gradient-to-r from-blue-800 to-purple-600 p-4">
                    <div className="flex-1 text-center p-2 bg-[#a7f2cf] rounded-md text-2xl font-bold">
                        Financial Services
                    </div>
                    <div className="flex-1 text-center p-2 bg-[#f77272] rounded-md text-2xl font-bold">
                        Public Sector
                    </div>
                    <div className="flex-1 text-center p-2 bg-[#fce68b] rounded-md text-2xl font-bold">
                        Utilities
                    </div>
                    <div className="flex-1 text-center p-2 bg-[#ffcccc] rounded-md text-2xl font-bold">
                        Healthcare
                    </div>
                </div>

                {/* Images section: One image per viewport with custom height/width */}
                <div className="h-screen flex justify-center items-center mt-24">
                    <img src="/images/Slide1.PNG" alt="Slide1" className="w-[88%] h-[90%]  object-fit rounded-[20px] bg-red-800 " />
                </div>
                <div className="h-screen flex justify-center items-center mt-20">
                    <img src="/images/Slide2.PNG" alt="Slide2" className="w-[88%] h-[90%] object-fit  rounded-[20px] mt-10 " />
                </div>
            </div>
        </>
    );
}
