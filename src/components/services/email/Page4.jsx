import React from 'react'

export default function Page4() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[720px]'>



                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    <p className='text-lg font-semibold text-white '>Cost and Time effective</p>
                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h1 className="text-2xl font-bold">Streamline your campaign creation process and eliminate complexity. </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Ready-to-Use Templates</h2>
                        <p>Utilize pre-built email templates, customizable content blocks, and reusable design elements to accelerate your workflow and enhance productivity.
                        </p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Dedicated Creative Services
                        </h2>
                        <p>Enhance your email production speed and elevate your creative output with our expert team, which specializes in migrating existing assets and developing new email content.
                        </p>
                    </div>

                    {/* <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Cross-Channel Performance Insights</h2>
                        <p>Maximize your revenue by doubling down on high-performing strategies. Leverage detailed campaign-level, WhatsApp program-level, and cross-channel reporting to make informed, data-driven decisions that enhance your marketing effectiveness.</p>
                    </div> */}
                </div>



                {/* Right Side: Image */}
                <div className='w-1/2 flex justify-center'>
                    <img className='w-3/4 ' src="/images/wimg2.webp" alt="whatsapp_image2" />
                </div>

            </div>
        </>
    )
}
