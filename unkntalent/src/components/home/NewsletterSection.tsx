'use client';

import React, { useState } from 'react';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    // In a real application, you would submit this to an API
    // For now, we'll just simulate success
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="py-16 bg-primary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/10 p-4 rounded-full mb-6">
            <FiMail className="text-4xl" />
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get the latest design resources, special offers, and creative inspiration delivered directly to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary-yellow rounded-full p-2">
                  <FiCheck className="text-2xl text-dark-gray" />
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">Thank You for Subscribing!</h3>
              <p className="text-white/80">
                You've successfully subscribed to our newsletter. Get ready for design tips, special offers, and inspiration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-white/10 border border-white/20 w-full py-3 px-4 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  {error && <p className="absolute text-left text-red-300 text-sm mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-primary-yellow text-dark-gray py-3 px-6 rounded-md font-medium hover:bg-white transition flex items-center justify-center whitespace-nowrap w-full sm:w-auto"
                >
                  Subscribe
                  <FiSend className="ml-2" />
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 