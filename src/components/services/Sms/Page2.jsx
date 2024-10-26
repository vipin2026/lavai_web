import React from 'react'

export default function Page2() {
    return (
        <>
            <div className='h-[500px]'>
                {/* Heading for the cards */}
                <div className='text-center mb-8'>
                    <h1 className="text-3xl font-bold  ">See what’s next for text.</h1>
                    {/* <p className='mt-6 w-[700px] ml-[27%] text-white'>At LAVAI, we believe in the power of events to drive client acquisition and enhance your organization’s reach. 
                    Our expertly crafted events are designed to showcase your strengths and connect you with potential clients:</p> */}
                </div>

                {/* Cards container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 ml-72  '>
                    
                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Increase Revenue on Mobile</h2>
                        <p>Deliver personalized SMS and MMS messages that resonate with your customers, encouraging them to take action.
</p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Scale Confidently</h2>
                        <p>Rapidly grow a healthy subscriber list and expand your SMS program with reliability and ease.</p>
                    </div>

                    {/* Card 3 */}
                    {/* <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Achieve Consistent Growth</h2>
                        <p> Scale your outreach efforts without compromising quality, ensuring a reliable path to increased client engagement.</p>
                    </div> */}

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Foster Brand Loyalty</h2>
                        <p>Engage high-value customers at critical moments, enhancing their connection to your brand.</p>
                    </div>
                </div>
                {/* <div className='flex flex-col justify-center items-center mt-10'>
    <h1 className="text-center font-bold text-2xl">Partner with LAVAI to unlock new opportunities and drive growth through expertly organized events. Together, we’ll elevate your client engagement strategy to new heights.</h1>
</div> */}

            </div>
        </>
    )
}
