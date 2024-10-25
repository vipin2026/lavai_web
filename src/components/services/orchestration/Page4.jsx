import React from 'react'

export default function Page4() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[700px]'>


                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    <div className='border border-white rounded-lg p-2 bg-white'>
                        <h1 className="text-4xl font-bold">  Boost Productivity with Targeted Automation and AI-Driven Marketing Strategies
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        {/* <h2 className="text-2xl font-semibold text-black">Drive Higher Conversions
                        </h2> */}
                        <p>Integrate intelligent automation tools to reduce repetitive tasks.
                            Streamline workflows for better focus on strategic activities.
                            Use tailored marketing strategies to efficiently target key audiences.
                            Generate more qualified leads with reduced effort.
                            Provide specialized training for enhancing team skills.
                            Deliver actionable insights to improve decision-making.
                            Optimize processes for greater impact and resource efficiency.
                            Empower teams to execute strategies more effectively, leading to increased productivity.

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
