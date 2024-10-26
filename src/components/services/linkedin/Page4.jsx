import React from 'react'


export default function Page4() {

    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[720px]'>






                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    {/* <p className='text-lg font-semibold text-black'>Cost and Time effective</p> */}
                    <div className='border border-white rounded-lg p-2 bg-white'>
                        {/* <h1 className="text-4xl font-bold">Using SMS effectively can significantly enhance your client acquisition strategy.
                        </h1> */}
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black"> Network Growth Strategies
                        </h2>
                        <p>Implement tactics to grow your network strategically, connecting with potential clients, partners, and industry influencers to expand your reach.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Training and Workshops
                        </h2>
                        <p>Offer training sessions for your team on best practices for LinkedIn marketing, ensuring everyone is equipped to contribute to your social strategy.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Ongoing Strategy Optimization
                        </h2>
                        <p>Continuously refine your LinkedIn strategy based on performance insights and emerging trends, ensuring your approach remains relevant and effective.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Analytics & Reporting
                        </h2>
                        <p>Regular insights and reports to track performance, allowing for data-driven adjustments to maximize impact.
                        </p>
                    </div>

                </div>

                {/* <h1>Using SMS effectively can significantly enhance your client acquisition strategy. </h1> */}

                {/* Right Side: Image */}
                <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="sms_image2" />
                </div>



            </div>
        </>
    )
}