import React from 'react'

export default function Page2() {
    return (
        <>
            <div className='h-[500px]'>
                {/* Heading for the cards */}
                <div className='text-center mb-8'>
                    <h1 className="text-3xl font-bold text-white underline decoration-cyan-500 ">Transform Your Client Engagement with Classic channels</h1>
                    <p className='mt-6 w-[700px] ml-[27%] text-white'>At LAVAI, we believe in the power of events to drive client acquisition and enhance your organization’s reach. 
                    Our expertly crafted events are designed to showcase your strengths and connect you with potential clients:</p>
                </div>

                {/* Cards container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20'>
                    
                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Boost Client Acquisition</h2>
                        <p>Engage potential clients in meaningful ways that convert interest into lasting partnerships.</p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Maximize Efficiency</h2>
                        <p>Streamline the planning and execution of impactful events, saving you time and resources while delivering results.</p>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Achieve Consistent Growth</h2>
                        <p> Scale your outreach efforts without compromising quality, ensuring a reliable path to increased client engagement.</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Elevate Your Brand</h2>
                        <p>Create memorable experiences that resonate with your audience and enhance brand loyalty.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
    <h1 className="text-center text-white font-bold text-2xl">Partner with LAVAI to unlock new opportunities and drive growth through expertly organized events. Together, we’ll elevate your client engagement strategy to new heights.</h1>
</div>

            </div>
        </>
    )
}
