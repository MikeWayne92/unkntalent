import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiInstagram, FiBriefcase } from 'react-icons/fi';

export const metadata = {
  title: 'About Us | unkntalent',
  description: 'Learn about the team behind unkntalent and our mission to provide premium design files for creative professionals.',
};

const AboutPage = () => {
  const designers = [
    {
      id: 1,
      name: 'Jessica Chen',
      role: 'Lead UI/UX Designer',
      bio: 'Jessica brings 8 years of experience designing intuitive interfaces that delight users while meeting business goals.',
      image: '/images/designer-1.svg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 2,
      name: 'Marcus Williams',
      role: 'Senior Graphic Designer',
      bio: 'With a background in print and digital design, Marcus creates stunning visuals that capture the essence of each brand.',
      image: '/images/designer-2.svg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 3,
      name: 'Olivia Rodriguez',
      role: 'Visual Designer',
      bio: 'Olivia specializes in creating cohesive visual systems and illustrations that bring brands to life across all touchpoints.',
      image: '/images/designer-3.svg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Product Designer',
      bio: 'James combines form and function to create products that are both beautiful and highly usable for end users.',
      image: '/images/designer-4.svg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-red py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About unkntalent
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate designers creating premium design files for creative professionals, students, and businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/about-story.svg"
                  alt="The unkntalent story"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-yellow p-6 rounded-lg shadow-lg">
                  <p className="font-montserrat font-bold text-dark-gray text-lg">Est. 2018</p>
                  <p className="text-dark-gray">Our Journey Began</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                unkntalent was founded in 2018 with a simple mission: to provide high-quality design resources that save time and inspire creativity. What started as a small collection of templates has grown into a comprehensive library of design files used by professionals worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of designers brings diverse expertise and perspectives, ensuring that our products meet the needs of various creative fields. We're passionate about design and committed to crafting resources that help our customers bring their visions to life.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our collection, staying ahead of design trends and responding to the evolving needs of our community. We take pride in the quality of our work and the positive impact it has on the creative projects of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-red text-white p-4 rounded-full inline-flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Quality & Craftsmanship</h3>
              <p className="text-gray-600">
                We're committed to excellence in every file we create, paying attention to the smallest details to ensure our resources meet professional standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-blue text-white p-4 rounded-full inline-flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Creativity & Innovation</h3>
              <p className="text-gray-600">
                We embrace creative thinking and stay at the forefront of design trends, constantly exploring new ideas to inspire our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-yellow text-dark-gray p-4 rounded-full inline-flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Community & Support</h3>
              <p className="text-gray-600">
                We value our relationship with the creative community and are dedicated to providing exceptional support to help our customers succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Designers */}
      <section className="py-16" id="meet-the-designers">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Meet the Designers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals behind our premium design files. Our diverse team brings expertise from various design disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designers.map((designer) => (
              <div key={designer.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        <a href={designer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-red transition">
                          <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a href={designer.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-red transition">
                          <FiTwitter className="w-5 h-5" />
                        </a>
                        <a href={designer.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-red transition">
                          <FiInstagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-1">{designer.name}</h3>
                  <p className="text-primary-red font-medium mb-3">{designer.role}</p>
                  <p className="text-gray-600 text-sm">{designer.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center"
            >
              <FiBriefcase className="mr-2" />
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 