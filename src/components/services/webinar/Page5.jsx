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


                    {/* <p className='text-lg font-semibold text-black'>Cost and Time effective</p> */}
                    <div className='border border-white rounded-lg p-2 bg-white'>
                        {/* <h1 className="text-4xl font-bold">Create Relevant, Engaging Texts
                        </h1> */}
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}


                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Targeted Advertising</h2>
                        <p>Implement targeted ad campaigns on social media platforms to reach specific demographics, driving traffic and increasing conversions.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Performance Analytics</h2>
                        <p>Access detailed performance analytics to measure engagement, reach, and ROI, enabling data-driven adjustments to your strategy.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Community Management</h2>
                        <p>Enhance customer relationships through proactive community management, responding to comments and messages to foster engagement and loyalty.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Influencer Collaborations </h2>
                        <p>Leverage influencer partnerships to expand your reach and credibility within your industry, tapping into new audiences effectively.</p>
                    </div>
                </div>






            </div>
        </>
    )
}