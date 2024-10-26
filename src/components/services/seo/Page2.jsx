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
                        <h2 className="text-xl font-semibold mb-2">Tailored Techniques for Enhanced Visibility
</h2>
                        <p>Implement strategies designed to improve your website's visibility on search engines, driving organic traffic and increasing brand awareness.


                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Custom Packages

                        </h2>
                        <p>Choose from a range of customizable SEO packages that fit your specific business needs and budget, whether you’re a startup or an established enterprise.
</p>
                    </div>

                 

                    {/* Card 4 */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">Keyword Research
                        </h2>
                        <p>Conduct comprehensive keyword research to identify high-value terms that align with your audience’s search intent, enhancing your content strategy.

                        </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className="text-xl font-semibold mb-2">On-Page Optimization
                        </h2>
                        <p>Optimize individual pages of your website, including title tags, meta descriptions, headings, and content, to improve search engine rankings.


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
