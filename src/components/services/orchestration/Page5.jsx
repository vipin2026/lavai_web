import React from 'react'

export default function Page5() {
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
                        <h1 className="text-4xl font-bold"> Heading missing 
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        {/* <h2 className="text-2xl font-semibold text-black">Drive Higher Conversions
                        </h2> */}
                        <p>Eliminate Marketing Guesswork and Drive Results
Use data-driven strategies to replace assumptions with real insights.
Tailor marketing plans based on market research and customer behaviors.
Analyze campaign performance to guide effective decision-making.
Implement personalized marketing and automated lead management for precision.
Build strategic partnerships and optimize brand positioning with clear goals.
Provide detailed reporting to inform each step with measurable outcomes.
Offer ongoing support to ensure all efforts are aligned with data-backed objectives.


                        </p>
                    </div>



                </div>


            </div>
        </>
    )
}
