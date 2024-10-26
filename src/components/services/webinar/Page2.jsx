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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20   '>

                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Customized Content</h2>
                        <p>Tailor your webinar content to address the specific needs and interests of your target audience, ensuring maximum engagement and relevance.

                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Expert Facilitation
                        </h2>
                        <p>Our experienced team will guide your webinars, ensuring smooth delivery and facilitating engaging discussions that resonate with participants.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Comprehensive Promotion
                        </h2>
                        <p> Utilize our marketing expertise to effectively promote your webinars across multiple channels, increasing attendance and visibility.</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Data-Driven Insights
                        </h2>
                        <p>Access detailed analytics post-webinar to measure engagement, attendance, and participant feedback, enabling you to refine future events and strategies.
                        </p>
                    </div>
                </div>
                {/* <div className='flex flex-col justify-center items-center mt-10'>
    <h1 className="text-center font-bold text-2xl">Partner with LAVAI to unlock new opportunities and drive growth through expertly organized events. Together, we’ll elevate your client engagement strategy to new heights.</h1>
</div> */}

            </div>
        </>
    )
}
