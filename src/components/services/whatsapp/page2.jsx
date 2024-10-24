import React from 'react'

export default function Page2() {
    return (
        <>
            <div className='h-[500px]'>
                {/* Heading for the cards */}
                <div className='text-center mb-8'>
                    <h1 className="text-3xl font-bold">Heading for WhatsApp</h1>
                </div>

                {/* Cards container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20'>
                    
                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Build Personal Connections with Customers on WhatsApp</h2>
                        <p>Leverage native support for WhatsApp to spark conversations on the world’s most popular 1:1 messaging app.</p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Boost Conversions</h2>
                        <p>Send rich, dynamic two-way messages that capture attention and drive meaningful action from your audience.</p>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Break Down Channel Silos</h2>
                        <p>Unify WhatsApp with all your digital channels on one centralized platform, saving time and resources while enhancing your marketing strategy.</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Drive Deeper Engagement</h2>
                        <p>Connect with your mobile-first customers through real-time conversations that foster relationships and encourage loyalty. Create rich, engaging WhatsApp messages tailored to your audience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
