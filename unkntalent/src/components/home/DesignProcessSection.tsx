import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLayout, FiGrid, FiLayers, FiCheck } from 'react-icons/fi';

const DesignProcessSection = () => {
  const processSteps = [
    {
      icon: <FiLayout className="text-4xl text-primary-red mb-4" />,
      title: 'Research & Concept',
      description: 'We research the latest design trends and create concepts that are both beautiful and functional.',
    },
    {
      icon: <FiGrid className="text-4xl text-primary-red mb-4" />,
      title: 'Design & Iteration',
      description: 'Our designers craft each element with precision and iterate based on internal feedback.',
    },
    {
      icon: <FiLayers className="text-4xl text-primary-red mb-4" />,
      title: 'Quality Assurance',
      description: 'Every file undergoes thorough quality checks to ensure it meets our high standards.',
    },
    {
      icon: <FiCheck className="text-4xl text-primary-red mb-4" />,
      title: 'Final Review & Delivery',
      description: 'After final approval, the files are prepared for our store with comprehensive documentation.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/design-process.svg"
                alt="Our design process"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Design Process</h2>
            <p className="text-gray-600 mb-8">
              At unkntalent, we take pride in our meticulous design process. Every file in our collection is crafted with care, creativity, and attention to detail by our team of professional designers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  {step.icon}
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link 
                href="/meet-the-designers" 
                className="btn-primary inline-block"
              >
                Meet Our Designers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection; 