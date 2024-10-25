import React from 'react'

export default function Page3() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[700px]'>

                {/* Right Side: Image */}
                <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="orchestrartion_image2" />
                </div>

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    <div className='border border-white rounded-lg p-2 bg-white'>
                        <h1 className="text-4xl font-bold"> Seamless Journey Orchestration for Maximum Impact
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        {/* <h2 className="text-2xl font-semibold text-black">Drive Higher Conversions
                        </h2> */}
                        <p>Develop a comprehensive multi-touch strategy for audience engagement.
                            Customize content and messages for each stage of the buyer journey.
                            Use data analytics for real-time adjustments to campaigns.
                            Automate interactions and follow-ups to maintain engagement.
                            Align sales and marketing efforts to ensure consistent messaging.
                            Use technology to streamline and personalize audience journeys.
                            Provide consistent, targeted touchpoints across channels (email, social, events).
                            Measure effectiveness at each stage and optimize for better results.
                            Integrate CRM for unified tracking and effective lead management.
                        </p>
                    </div>

                    {/* <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Next-Best Action
                        </h2>
                        <p>Optimize email journeys across the customer funnel with perfectly timed nudges and dynamic flows that guide customers toward their next best action.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Dynamic Personalization</h2>
                        <p>Incorporate tailored products, content, promotions, and recommendations into your emails, providing each customer with the most relevant information.</p>
                    </div> */}


                </div>





            </div>
        </>
    )
}
