import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Gurukul Global School',
    description: 'A prestigious institution focused on holistic education.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Camp Himalayan',
    description: 'An adventurous camp offering various outdoor activities.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Rich Kids of India (RKOI Media)',
    description: 'A media company showcasing luxury lifestyles.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'The Trillionaire Life',
    description: 'A platform focused on wealth creation and financial education.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Himalayan Nutrition',
    description: 'A health-focused brand providing organic products.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'KL Health Group',
    description: 'A healthcare organization offering a variety of services.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'CVS Health',
    description: 'A pharmacy and healthcare company focused on improving health.',
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Watches.io',
    description: 'An online store specializing in luxury watches.',
    bgColor: 'bg-indigo-500',
  },
];

const PastExperience = () => {
  return (
    <div className="p-8 h-[90vh] bg-gradient-to-r from-blue-800 to-purple-600">
      <h1 className="text-3xl font-bold text-center mb-6">Our Past Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`p-4 rounded-lg shadow-lg transition-transform transform ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } duration-700 ${experience.bgColor} text-white hover:scale-105`}
    >
      <h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
      <p>{experience.description}</p>
    </div>
  );
};

export default PastExperience;
