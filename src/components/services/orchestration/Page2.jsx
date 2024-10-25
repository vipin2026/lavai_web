import React from 'react'

export default function Page2() {
    return (
        <>
            <div className='h-[500px]'>
                {/* Heading for the cards */}
                <div className='text-center mb-8'>
                    <h1 className="text-3xl font-bold">Heading for orchestration</h1>
                </div>

                {/* Cards container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20'>
                    
                    {/* Card 1 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Journey orchestration to be seamless</h2>
                        <p>Quickly convert leads into meaningful connections and grow your customer base with our collaborative approach. 
                        Together, we take ownership of your marketing journey to drive customer engagement and expansion.</p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">AI to experiment & refine</h2>
                        <p>Send rich, dynamic two-way messages that capture attention and drive meaningful action from your audience.</p>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2"> execute for maximum efficiency </h2>
                        <p>Not only get leads excel but make sure to execute it and convert into clients get weekly report of progres.</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">No Commitments</h2>
                        <p>We operate on a monthly subscription model where you can see your journey unfold in real-time. 
                        If you're satisfied, continue with us, and if not lets plan a different starategy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
