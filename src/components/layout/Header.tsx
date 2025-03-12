'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
              <span className="ml-2 font-montserrat font-bold text-xl text-dark-gray">unkntalent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              All Files
            </Link>
            <Link href="/products/category/templates" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              Templates
            </Link>
            <Link href="/products/category/graphics" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              Graphics
            </Link>
            <Link href="/products/category/ui-kits" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              UI Kits
            </Link>
            <Link href="/blog" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              Blog
            </Link>
            <Link href="/about" className="font-montserrat text-dark-gray hover:text-primary-red transition">
              About Us
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="focus:outline-none" aria-label="Search">
              <FiSearch className="w-5 h-5 text-dark-gray hover:text-primary-red transition" />
            </button>
            <Link href="/wishlist" className="relative">
              <FiHeart className="w-5 h-5 text-dark-gray hover:text-primary-red transition" />
              <span className="absolute -top-2 -right-2 bg-primary-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-5 h-5 text-dark-gray hover:text-primary-red transition" />
              <span className="absolute -top-2 -right-2 bg-primary-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="text-dark-gray hover:text-primary-red transition">
              <FiUser className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-5 h-5 text-dark-gray" />
              <span className="absolute -top-2 -right-2 bg-primary-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-dark-gray" />
              ) : (
                <FiMenu className="w-6 h-6 text-dark-gray" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 pb-4">
              <Link 
                href="/products" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                All Files
              </Link>
              <Link 
                href="/products/category/templates" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                href="/products/category/graphics" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Graphics
              </Link>
              <Link 
                href="/products/category/ui-kits" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                UI Kits
              </Link>
              <Link 
                href="/blog" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/account" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              <Link 
                href="/wishlist" 
                className="font-montserrat text-dark-gray py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 