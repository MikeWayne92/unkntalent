import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const BlogSection = () => {
  // These would typically come from a database or API
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Design Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging design trends that are shaping the creative landscape this year.',
      image: '/images/blog-1.svg',
      date: 'June 15, 2023',
      author: 'Emma Stone',
      category: 'Design Trends',
    },
    {
      id: '2',
      title: 'How to Create a Stunning Brand Identity',
      excerpt: 'A comprehensive guide to developing a cohesive brand identity that resonates with your target audience.',
      image: '/images/blog-2.svg',
      date: 'May 28, 2023',
      author: 'Marcus Chen',
      category: 'Branding',
    },
    {
      id: '3',
      title: 'Essential Tools for Every Graphic Designer',
      excerpt: 'Discover the must-have tools and resources that will elevate your design process and boost productivity.',
      image: '/images/blog-3.svg',
      date: 'April 10, 2023',
      author: 'Sophia Williams',
      category: 'Resources',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-2">From Our Blog</h2>
            <p className="text-gray-600 max-w-2xl">
              Design insights, tutorials, and inspiration to fuel your creative projects.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="mt-4 md:mt-0 inline-flex items-center text-primary-blue font-montserrat font-semibold hover:text-primary-red transition"
          >
            View All Posts
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary-blue text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`} className="block">
                  <h3 className="font-montserrat font-bold text-xl mb-2 hover:text-primary-red transition">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center text-primary-blue font-medium hover:text-primary-red transition"
                >
                  Read More
                  <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 