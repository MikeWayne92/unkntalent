'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Graphic Designer',
      company: 'Creative Studios',
      image: '/images/testimonial-1.svg',
      quote: 'The quality of design files from unkntalent is exceptional. The attention to detail and organization of layers has saved me countless hours of work.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      company: 'Tech Innovations',
      image: '/images/testimonial-2.svg',
      quote: 'I\'ve purchased UI kits from many sources, but unkntalent\'s files are by far the most comprehensive and easiest to customize for my clients\' needs.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Brand Forward',
      image: '/images/testimonial-3.svg',
      quote: 'The templates we purchased have elevated our brand presentation. The customer service is also outstanding - they helped us with a customization question right away.',
      rating: 4,
    },
    {
      id: 4,
      name: 'David Patel',
      role: 'Freelance Designer',
      company: 'Self-employed',
      image: '/images/testimonial-4.svg',
      quote: 'As a freelancer, these design resources have been a game-changer for my workflow. High-quality, versatile, and worth every penny.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pastel-pink to-pastel-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from designers and creative professionals who use our design files in their projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-red">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary-yellow text-2xl mr-1">
                      {i < testimonials[currentIndex].rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-montserrat font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-red hover:text-white transition"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-red hover:text-white transition"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-primary-red' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 