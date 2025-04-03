'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFilter, FiGrid, FiList, FiShoppingCart, FiHeart, FiX, FiChevronDown } from 'react-icons/fi';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFileType, setSelectedFileType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('newest');

  // This would typically come from a database or API
  const products = [
    {
      id: '1',
      name: 'Modern UI Dashboard Kit',
      price: 49.99,
      image: '/images/product-1.svg',
      category: 'UI Kits',
      fileType: 'PSD, AI, XD',
      date: '2023-05-15',
    },
    {
      id: '2',
      name: 'Brand Identity Template',
      price: 39.99,
      image: '/images/product-2.svg',
      category: 'Templates',
      fileType: 'PDF, PSD',
      date: '2023-06-20',
    },
    {
      id: '3',
      name: 'Social Media Graphics Pack',
      price: 29.99,
      image: '/images/product-3.svg',
      category: 'Graphics',
      fileType: 'PSD, PNG',
      date: '2023-07-05',
    },
    {
      id: '4',
      name: 'Minimal Resume Template',
      price: 19.99,
      image: '/images/product-4.svg',
      category: 'Templates',
      fileType: 'PDF, DOCX',
      date: '2023-08-10',
    },
    {
      id: '5',
      name: 'Product Mockup Kit',
      price: 34.99,
      image: '/images/product-5.svg',
      category: 'Mockups',
      fileType: 'PSD',
      date: '2023-10-15',
    },
    {
      id: '6',
      name: 'Font Collection Pack',
      price: 24.99,
      image: '/images/product-6.svg',
      category: 'Fonts',
      fileType: 'OTF, TTF',
      date: '2023-11-20',
    },
    {
      id: '7',
      name: 'Photo Editing Presets',
      price: 19.99,
      image: '/images/product-7.svg',
      category: 'Presets',
      fileType: 'XMP, DNG',
      date: '2023-12-05',
    },
    {
      id: '8',
      name: 'Presentation Template',
      price: 29.99,
      image: '/images/product-8.svg',
      category: 'Templates',
      fileType: 'PPTX, KEY',
      date: '2024-01-10',
    },
  ];

  const categories = ['UI Kits', 'Templates', 'Graphics', 'Mockups', 'Fonts'];
  const fileTypes = ['PSD', 'AI', 'PDF', 'XD', 'Sketch', 'Figma', 'INDD', 'SVG', 'PNG'];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleFileTypeChange = (fileType: string) => {
    setSelectedFileType(selectedFileType === fileType ? null : fileType);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const index = e.target.name === 'min' ? 0 : 1;
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filteredProducts = products
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .filter(product => !selectedFileType || product.fileType.includes(selectedFileType))
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        default:
          return 0;
      }
    });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-red py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Premium Design Files
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse our collection of high-quality design resources created to save you time and inspire your next project.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-montserrat font-semibold text-xl mb-6">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          checked={selectedCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category}`} className="text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Types */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">File Types</h3>
                  <div className="space-y-2">
                    {fileTypes.map((fileType) => (
                      <div key={fileType} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`filetype-${fileType}`}
                          checked={selectedFileType === fileType}
                          onChange={() => handleFileTypeChange(fileType)}
                          className="mr-2"
                        />
                        <label htmlFor={`filetype-${fileType}`} className="text-gray-700">
                          {fileType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <input
                        type="number"
                        name="min"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        min="0"
                        max="100"
                        className="w-20 p-2 border border-gray-300 rounded"
                      />
                      <span className="mx-2">to</span>
                      <input
                        type="number"
                        name="max"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        min="0"
                        max="100"
                        className="w-20 p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">${priceRange[0]}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange({ ...e, target: { ...e.target, name: 'min' } } as any)}
                        className="w-full"
                      />
                      <span className="ml-2">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedFileType(null);
                    setPriceRange([0, 100]);
                  }}
                  className="w-full py-2 px-4 border border-primary-red text-primary-red rounded-md hover:bg-primary-red hover:text-white transition"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={toggleFilter}
                className="w-full flex items-center justify-center py-3 px-4 bg-white shadow-md rounded-md text-primary-blue"
              >
                <FiFilter className="mr-2" />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Mobile Filter Panel */}
            {isFilterOpen && (
              <div className="lg:hidden bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-montserrat font-semibold text-xl">Filters</h2>
                  <button onClick={toggleFilter} className="text-gray-500">
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-category-${category}`}
                          checked={selectedCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-category-${category}`} className="text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Types */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">File Types</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {fileTypes.map((fileType) => (
                      <div key={fileType} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-filetype-${fileType}`}
                          checked={selectedFileType === fileType}
                          onChange={() => handleFileTypeChange(fileType)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-filetype-${fileType}`} className="text-gray-700">
                          {fileType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-montserrat font-medium text-lg mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <input
                        type="number"
                        name="min"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        min="0"
                        max="100"
                        className="w-20 p-2 border border-gray-300 rounded"
                      />
                      <span className="mx-2">to</span>
                      <input
                        type="number"
                        name="max"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        min="0"
                        max="100"
                        className="w-20 p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Apply Filters */}
                <div className="flex space-x-4">
                  <button
                    onClick={toggleFilter}
                    className="flex-1 py-2 px-4 bg-primary-blue text-white rounded-md hover:bg-opacity-90 transition"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedFileType(null);
                      setPriceRange([0, 100]);
                    }}
                    className="flex-1 py-2 px-4 border border-primary-red text-primary-red rounded-md hover:bg-primary-red hover:text-white transition"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="lg:w-3/4 xl:w-4/5">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">View:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md mr-2 ${
                      viewMode === 'grid' ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                    aria-label="Grid view"
                  >
                    <FiGrid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${
                      viewMode === 'list' ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                    aria-label="List view"
                  >
                    <FiList className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center w-full sm:w-auto">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <div className="relative flex-1">
                    <select
                      value={sortBy}
                      onChange={handleSortChange}
                      className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <FiChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredProducts.length}</span> results
                  {selectedCategory && <span> in <span className="font-semibold">{selectedCategory}</span></span>}
                </p>
              </div>

              {/* Products */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative">
                        <Link href={`/products/${product.id}`}>
                          <div className="relative h-48 overflow-hidden">
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
                          <button className="bg-primary-red text-white p-2 rounded-md hover:bg-opacity-90 transition flex items-center">
                            <FiShoppingCart className="mr-1" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 relative">
                          <Link href={`/products/${product.id}`}>
                            <div className="relative h-48 md:h-full overflow-hidden">
                              <Image
                                src={product.image}
                                alt={product.name}
                                className="object-cover hover:scale-105 transition duration-300"
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                              />
                            </div>
                          </Link>
                          <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-primary-red hover:text-white transition">
                            <FiHeart className="w-5 h-5" />
                          </div>
                          <div className="absolute bottom-0 left-0 bg-primary-blue text-white text-xs font-semibold px-3 py-1 rounded-tr-md">
                            {product.category}
                          </div>
                        </div>

                        <div className="md:w-3/4 p-6">
                          <Link href={`/products/${product.id}`} className="block">
                            <h3 className="font-montserrat font-semibold text-xl mb-2 hover:text-primary-red transition">
                              {product.name}
                            </h3>
                          </Link>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <span>File Types: {product.fileType}</span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam
                            tincidunt, nisl nisi aliquet nunc, vitae aliquam nisl nisi euismod.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-montserrat font-bold text-xl">${product.price.toFixed(2)}</span>
                            <button className="bg-primary-red text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition flex items-center">
                              <FiShoppingCart className="mr-2" />
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="font-montserrat font-semibold text-xl mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your current filters. Try adjusting your filters or browse our
                    full collection.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedFileType(null);
                      setPriceRange([0, 100]);
                    }}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 