'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const FeaturedProducts = () => {
  // This would typically come from a database or API
  const featuredProducts = [
    {
      id: '1',
      name: 'Modern UI Dashboard Kit',
      price: 49.99,
      image: '/images/product-1.svg',
      category: 'UI Kits',
      fileType: 'PSD, AI, XD',
    },
    {
      id: '2',
      name: 'Brand Identity Template',
      price: 39.99,
      image: '/images/product-2.svg',
      category: 'Templates',
      fileType: 'PDF, PSD',
    },
    {
      id: '3',
      name: 'Social Media Graphics Pack',
      price: 29.99,
      image: '/images/product-3.svg',
      category: 'Graphics',
      fileType: 'PSD, PNG',
    },
    {
      id: '4',
      name: 'Minimal Resume Template',
      price: 19.99,
      image: '/images/product-4.svg',
      category: 'Templates',
      fileType: 'PDF, DOCX',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Featured Design Files</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular design files crafted with precision and creativity by our talented designers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover hover:scale-105 transition duration-300"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </Link>
                <button 
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-primary-red hover:text-white transition"
                  aria-label="Add to wishlist"
                >
                  <FiHeart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 bg-primary-blue text-white text-xs font-semibold px-3 py-1 rounded-tr-md">
                  {product.category}
                </div>
              </div>

              <div className="p-4">
                <Link href={`/products/${product.id}`} className="block">
                  <h3 className="font-montserrat font-semibold text-lg mb-1 hover:text-primary-red transition">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>File Types: {product.fileType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button 
                    className="bg-primary-red text-white p-2 rounded-md hover:bg-opacity-90 transition flex items-center"
                  >
                    <FiShoppingCart className="mr-1" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="btn-secondary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 