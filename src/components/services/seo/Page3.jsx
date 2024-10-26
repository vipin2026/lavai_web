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
                        <h2 className="text-2xl font-semibold text-black">Technical SEO

                        </h2>
                        <p>Ensure your website is technically sound with proper site architecture, fast loading speeds, and mobile responsiveness, creating a better user experience.



                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Content Creation and Optimization



                        </h2>
                        <p>Develop high-quality, SEO-friendly content that engages your audience while incorporating targeted keywords to improve organic visibility.



                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Link Building Strategies

                        </h2>
                        <p>mplement ethical link-building techniques to enhance your domain authority and improve search rankings through quality backlinks.

                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Local SEO

                        </h2>
                        <p>Optimize your online presence for local searches, including Google My Business setup and management, to attract nearby customers effectively.


                        </p>
                    </div>

                </div>

                {/* <h1>Using SMS effectively can significantly enhance your client acquisition strategy. </h1> */}




            </div>
        </>
    )
}