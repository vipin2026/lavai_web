import React from 'react'

export default function Page2() {
    return (
        <>
            <div className='h-[500px]'>
                {/* Heading for the cards */}
                <div className='text-center mb-8'>
                    {/* <h1 className="text-3xl font-bold  ">See what’s next for text.</h1> */}

                </div>

                {/* Cards container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20  '>

                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Engaging Content That Resonates</h2>
                        <p>Create compelling content tailored to your target audience, boosting engagement and fostering meaningful connections.

                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Beyond Basic Posting
                        </h2>
                        <p>In today’s competitive landscape, simply creating a LinkedIn profile and posting is not enough. LAVAI helps you elevate your strategy to achieve real impact.</p>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Custom Packages</h2>
                        <p>Choose from a variety of customizable LinkedIn marketing packages designed to fit your specific goals and budget, whether you’re looking to increase brand awareness or generate leads.</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Strategic Content Planning
                        </h2>
                        <p>Develop a comprehensive content calendar that aligns with your business objectives and resonates with your audience, ensuring consistent and relevant messaging.
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
