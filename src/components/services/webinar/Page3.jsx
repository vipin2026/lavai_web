import React from 'react'


export default function Page3(){

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
                        <h2 className="text-2xl font-semibold text-black">Follow-Up Strategies
</h2>
                        <p>Implement effective follow-up campaigns to engage attendees post-webinar, reinforcing your message and moving leads further down the sales funnel.


                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Brand Positioning

                        </h2>
                        <p>Establish your organization as a thought leader in your industry by delivering high-quality, informative webinars that showcase your expertise.


                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Social Media Strategy</h2>
                        <p>Tailored plans to enhance your presence on platforms like LinkedIn, ensuring you connect 
                        with the right audience.Experienced marketers who understand the latest trends and algorithms.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Tailored Plans for Maximum Impact</h2>
                        <p>Develop customized strategies designed to enhance your presence on platforms like LinkedIn, 
                        Facebook, and Instagram, ensuring you connect with the right audience.</p>
                    </div>
                </div>

{/* <h1>Using SMS effectively can significantly enhance your client acquisition strategy. </h1> */}


           

            </div>
        </>
    )
}