import React from 'react';
import { useInView } from 'react-intersection-observer';

const cardData = [
    {
        title: 'Close deals interact more be aware of your clients',
        content: 'Make sure you reach the target audience which you always wanted through your decision making and our support to boost revenue.'
    },
    {
        title: 'Progress your deals to a new level',
        content: 'Streamline stakeholder management, identifying risks early, and stay proactive with the next best actions to keep momentum strong inside and outside.'
    },
    {
        title: 'Prioritize the right approach to reach your target audience effectively',
        content: 'We don’t just create marketing campaigns or datasheets—we ensure they are executed, distributed, and actioned. With us, you won’t just generate a list of leads, you’ll stay actively connected and engaged with them. Our focus is on driving real, long-term success by turning strategy into measurable results.'
    },
    {
        title: 'Track, Test, and Refine: Data-Driven Marketing for Impactful Results',
        content: 'With us, you can continuously track your marketing performance and refine your strategies using real deal data. Test assumptions, adjust plans, and build stronger, data-driven marketing efforts for more impactful results.'
    },
];

const Card = ({ title, content }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div
        ref={ref}
        className="w-[600px] h-[500px] border-[2px] rounded-[20px] bg-white "
      >
        <h2
          className="text-4xl text-gray-900 mb-4 pt-20 pl-20 pr-20 font-montserrat"
          style={{ fontFamily: 'Europa Grotesk SH' }} // Fixed here
        >
          {title}
        </h2>
        <p className="text-gray-700  pl-20 pr-20 font-opensans">{content}</p>
        <button className='mt-10 ml-20 bg-blue-800 text-white p-2 rounded-[4px]'>Learn more</button>
      </div>
      
      
    );
};

const CardsPage = () => {
    return (
        <div className="min-h-screen  p-10 bg-gradient-to-r from-blue-800 to-purple-600 ">
            {/* <h1 className="text-4xl text-white text-center font-bold mb-10">Our Services</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-24 ">
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} />
                ))}
            </div>
        </div>
    );
};

export default CardsPage;
