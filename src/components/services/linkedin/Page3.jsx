import React from 'react'


export default function Page3() {

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
                        <h2 className="text-2xl font-semibold text-black">Targeted Advertising Campaigns
                        </h2>
                        <p>Leverage LinkedIn’s powerful advertising tools to reach specific demographics, driving qualified traffic to your profile and enhancing lead generation.


                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Thought Leadership Development


                        </h2>
                        <p>Position your brand as an industry leader by creating insightful articles and posts that showcase your expertise and knowledge, attracting a loyal following.


                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Engagement and Community Management
                        </h2>
                        <p>Foster relationships by actively engaging with your audience through comments, messages, and interactions, building a vibrant community around your brand.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Performance Analytics
                        </h2>
                        <p>Access in-depth analytics to track the performance of your campaigns, allowing you to measure engagement, reach, and ROI for continuous improvement.

                        </p>
                    </div>

                </div>

                {/* <h1>Using SMS effectively can significantly enhance your client acquisition strategy. </h1> */}




            </div>
        </>
    )
}