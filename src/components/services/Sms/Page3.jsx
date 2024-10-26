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
                        <h1 className="text-4xl font-bold">Create Relevant, Engaging Texts
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Dynamic Personalization</h2>
                        <p>Craft tailored, engaging messages that resonate with your customers. Easily embed recommendations,, ensuring your content aligns with their preferences and behaviors.

                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Comprehensive Experimentation

                        </h2>
                        <p>Optimize for conversions with precision. Leverage robust A/B testing to identify the SMS campaign most likely to convert, improving your success rates by up to 30% through automated, real-time optimization.

                        </p>
                    </div>

                    {/* <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Cross-Channel Performance Insights</h2>
                        <p>Maximize your revenue by doubling down on high-performing strategies. Leverage detailed campaign-level, WhatsApp program-level, and cross-channel reporting to make informed, data-driven decisions that enhance your marketing effectiveness.</p>
                    </div> */}
                </div>

{/* <h1>Using SMS effectively can significantly enhance your client acquisition strategy. </h1> */}


           

            </div>
        </>
    )
}