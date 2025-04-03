import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoriesSection = () => {
  // These would typically come from a database or API
  const categories = [
    {
      id: 'templates',
      name: 'Templates',
      description: 'Professional templates for various design needs',
      image: '/images/category-1.svg',
      count: 124,
    },
    {
      id: 'graphics',
      name: 'Graphics',
      description: 'High-quality graphic elements and illustrations',
      image: '/images/category-3.svg',
      count: 98,
    },
    {
      id: 'ui-kits',
      name: 'UI Kits',
      description: 'Complete UI kits for web and mobile apps',
      image: '/images/category-2.svg',
      count: 56,
    },
    {
      id: 'mockups',
      name: 'Mockups',
      description: 'Realistic mockups for showcasing your designs',
      image: '/images/category-4.svg',
      count: 72,
    },
    {
      id: 'fonts',
      name: 'Fonts',
      description: 'Unique and stylish fonts for your projects',
      image: '/images/category-5.svg',
      count: 38,
    },
  ];

  return (
    <section className="py-16 bg-neutral-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need for your creative projects from our diverse collection of design files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="font-montserrat font-bold text-xl text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">
                        {category.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-yellow font-semibold text-sm">
                          {category.count} items
                        </span>
                        <span className="text-white text-sm group-hover:translate-x-1 transition">
                          Browse →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 