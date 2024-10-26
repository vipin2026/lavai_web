import React from 'react'


export default function Page4() {

    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[720px]'>





                

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    {/* <p className='text-lg font-semibold text-black'>Cost and Time effective</p> */}
                    <div className='border border-white rounded-lg p-2 bg-white'>
                        {/* <h1 className="text-4xl font-bold">Create Relevant, Engaging Texts
                        </h1> */}
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Experienced Marketers

                        </h2>
                        <p>Work with a team of seasoned marketers who understand the latest trends, algorithms, and best practices to optimize your social media efforts.



                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Content Creation


                        </h2>
                        <p>Produce engaging and shareable content that resonates with your target audience, including graphics, videos, and written posts.



                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Custom Packages
                        </h2>
                        <p>Choose from a variety of custom packages that fit your unique needs and budget, allowing for flexible solutions whether you’re a startup or an established brand.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Comprehensive Audits
                        </h2>
                        <p>Conduct thorough audits of your current social media presence to identify strengths, weaknesses, and opportunities for growth.
                        </p>
                    </div>
                </div>

            {/* Right Side: Image */}
            <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="whatsapp_image2" />
                </div>




            </div>
        </>
    )
}