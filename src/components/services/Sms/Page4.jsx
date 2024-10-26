import React from 'react'


export default function Page4(){

    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[720px]'>




  

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-10 w-2/4 border border-white rounded-lg p-6">


                    {/* <p className='text-lg font-semibold text-black'>Cost and Time effective</p> */}
                    <div className='border border-white rounded-lg p-2 bg-white'>
                        <h1 className="text-4xl font-bold">Using SMS effectively can significantly enhance your client acquisition strategy.
                        </h1>
                    </div>

                    {/* Each heading and paragraph wrapped in a separate div */}




                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black"> Lead Nurturing</h2>
                        <p>Use SMS to follow up with leads promptly, providing them with valuable information or answers to their inquiries.</p>
                    </div>

                    <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Event Invitations</h2>
                        <p>Promote upcoming events, webinars, or demos via SMS to engage potential clients directly and encourage attendance.</p>
                    </div>

                    {/* <div className='border border-white rounded-lg p-4 bg-white'>
                        <h2 className="text-2xl font-semibold text-black">Cross-Channel Performance Insights</h2>
                        <p>Maximize your revenue by doubling down on high-performing strategies. Leverage detailed campaign-level, WhatsApp program-level, and cross-channel reporting to make informed, data-driven decisions that enhance your marketing effectiveness.</p>
                    </div> */}
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