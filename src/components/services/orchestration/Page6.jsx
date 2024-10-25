import React from 'react'

export default function Page6() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[700px]'>








                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    <div className='border border-white rounded-lg p-2 bg-white'>
                        <h1 className="text-4xl font-bold">  Unified Marketing & Amplified Results
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Integrated Channel Management</h2>
                        <p>Connect all your marketing channels—email, SMS, mobile app, WhatsApp, web, and paid media—from one intuitive platform.
                        </p>
                    </div>
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Consistent Brand Messaging</h2>
                        <p>Maintain a strong, cohesive brand identity with centralized, on-brand messaging across all touchpoints.</p>
                    </div>
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Seamless Cross-Channel Journeys</h2>
                        <p> Create interconnected customer experiences where actions on one channel seamlessly trigger relevant responses on others, driving greater engagement and customer satisfaction.
                        </p>
                    </div>



                </div>


                {/* Right Side: Image */}
                <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="orchestrartion_image2" />
                </div>

            </div>
        </>
    )
}
