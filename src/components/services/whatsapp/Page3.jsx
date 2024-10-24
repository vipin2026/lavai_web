import React from 'react'

export default function Page3() {
    return (
        <>
            <div className='flex justify-between items-center mx-20 h-[700px]'>

                {/* Left Side: Text Content */}
                <div className="flex flex-col space-y-6 mt-4 w-2/4 border border-white rounded-lg p-6">
    <div className='border border-white rounded-lg p-2 bg-white'>
        <h1 className="text-4xl font-bold">Integrate Data From Any Source</h1>
    </div>

    {/* Each heading and paragraph wrapped in a separate div */}
    <div className='border border-white rounded-lg p-4 bg-white'>
        <h2 className="text-2xl font-semibold text-black">Dynamic Personalization</h2>
        <p>Craft customized WhatsApp campaigns featuring content that reflects your customers’ preferences and behaviors. Easily embed recommendations.</p>
    </div>

    <div className='border border-white rounded-lg p-4 bg-white'>
        <h2 className="text-2xl font-semibold text-black">Attention-Grabbing Content</h2>
        <p>Engage your customers with messages that include rich imagery and ensure your content stands out.</p>
    </div>

    <div className='border border-white rounded-lg p-4 bg-white'>
        <h2 className="text-2xl font-semibold text-black">Comprehensive Experimentation</h2>
        <p>Optimize your campaigns for maximum conversions. Utilize robust A/B testing.</p>
    </div>

    <div className='border border-white rounded-lg p-4 bg-white'>
        <h2 className="text-2xl font-semibold text-black">Cross-Channel Performance Insights</h2>
        <p>Maximize your revenue by doubling down on high-performing strategies. Leverage detailed campaign-level, WhatsApp program-level, and cross-channel reporting to make informed, data-driven decisions that enhance your marketing effectiveness.</p>
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
