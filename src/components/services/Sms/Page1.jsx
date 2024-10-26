import React from 'react'

export default function Page1() {
    return (
        <>
            <div className='flex h-screen'>

                {/* heading */}
                <div className="flex flex-col items-start space-y-6 mt-32 ml-20 w-[55%] ">
                    <h1 className="text-white text-7xl font-bold">Send SMS Campaigns That Convert</h1>
                    <h2 className="text-white text-2xl ">With open rates as high as 98%, integrating SMS into your marketing strategy is essential. Keep your customers engaged and informed—discover the potential of text messaging. </h2>
                    {/* <h2 className="text-white text-2xl"> "Boost your marketing with dynamic, professional emails that drive action. Use urgency, compelling subject lines, 
                    and personalized content to engage clients. Add visuals, social proof, and mobile-friendly design for trust and higher 
                    conversions.".</h2> */}

                    {/* Button */}
                    <button className="flex items-center font-medium text-white text-[17px] px-[0.9em] py-[0.8em] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-lg border-none tracking-wider cursor-pointer transition-all hover:translate-x-2">
                        <svg
                            className="mr-1 rotate-[30deg] transition-transform duration-[0.2s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] hover:rotate-[90deg]"
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <span className="transition-transform duration-[0.5s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] hover:translate-x-[7px]">Get Demo</span>
                    </button>
                </div>

                {/* photos */}
                <div className='mt-10'>
                    <img src="/images/sms.webp" alt="sms_image" />
                </div>

            </div>
        </>
    )
}
