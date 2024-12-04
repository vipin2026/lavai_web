import React from 'react'

export default function Page5() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[720px]'>

                {/* Right Side: Image */}
                <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="whatsapp_image2" />
                </div>

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    <p className='text-lg font-semibold text-white '>Drive Higher Conversions</p>
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h1 className="text-2xl font-bold">Fine-Tune Your Email Strategy
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Comprehensive Experimentation</h2>
                        <p>Easily test and optimize every aspect of your email strategy—from subject lines and message copy to frequency and design—to discover what resonates best with your audience.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Robust Analytics and Reporting</h2>
                        <p>Measure and analyze the effectiveness of your email program, including journeys, campaigns, and individual sends, using LAVAI’s analytics.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Effortless Expansion to Other Channels</h2>
                        <p>Follow your customers wherever they go. Start with email engagement and seamlessly expand your strategy to include SMS, mobile, web, and paid ads for greater conversion opportunities.</p>
                    </div>
                </div>





            </div>
        </>
    )
}
