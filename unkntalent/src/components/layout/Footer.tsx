import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 font-montserrat font-bold text-xl">unkntalent</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Premium PDF and Photoshop design files crafted with creativity and precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-red transition">
                <FiFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-red transition">
                <FiTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-red transition">
                <FiInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-red transition">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary-red transition">
                  All Files
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary-red transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-red transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/meet-the-designers" className="text-gray-300 hover:text-primary-red transition">
                  Meet the Designers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-red transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/category/templates" className="text-gray-300 hover:text-primary-red transition">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/products/category/graphics" className="text-gray-300 hover:text-primary-red transition">
                  Graphics
                </Link>
              </li>
              <li>
                <Link href="/products/category/ui-kits" className="text-gray-300 hover:text-primary-red transition">
                  UI Kits
                </Link>
              </li>
              <li>
                <Link href="/products/category/mockups" className="text-gray-300 hover:text-primary-red transition">
                  Mockups
                </Link>
              </li>
              <li>
                <Link href="/products/category/fonts" className="text-gray-300 hover:text-primary-red transition">
                  Fonts
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest updates, design tips, and special offers directly to your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red text-white"
              />
              <button type="submit" className="bg-primary-red text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} unkntalent. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-primary-red transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary-red transition">
              Privacy Policy
            </Link>
            <Link href="/license" className="text-sm text-gray-400 hover:text-primary-red transition">
              License Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 