import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiDownload, FiShoppingBag, FiUsers } from "react-icons/fi";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoriesSection from "../components/home/CategoriesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import DesignProcessSection from "../components/home/DesignProcessSection";
import BlogSection from "../components/home/BlogSection";
import NewsletterSection from "../components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-red py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                Premium Design Files for Creative Professionals
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                High-quality PDF and Photoshop designs crafted with precision and creativity by the unkntalent team.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/products"
                  className="bg-white text-primary-red px-8 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-opacity-90 transition"
                >
                  Browse Files
                  <FiChevronRight className="ml-1" />
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <Image
                    src="/images/hero-design.svg"
                    alt="Premium design files showcase"
                    width={600}
                    height={400}
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary-yellow p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FiDownload className="text-dark-gray text-xl mr-2" />
                    <div>
                      <p className="text-dark-gray font-bold">1000+</p>
                      <p className="text-dark-gray text-sm">Design files</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-pastel-pink p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FiUsers className="text-dark-gray text-xl mr-2" />
                    <div>
                      <p className="text-dark-gray font-bold">10k+</p>
                      <p className="text-dark-gray text-sm">Happy clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-neutral-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <FiShoppingBag className="text-3xl text-primary-blue mb-2" />
              <p className="font-montserrat font-semibold">Secure Checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <FiDownload className="text-3xl text-primary-blue mb-2" />
              <p className="font-montserrat font-semibold">Instant Downloads</p>
            </div>
            <div className="flex flex-col items-center">
              <FiUsers className="text-3xl text-primary-blue mb-2" />
              <p className="font-montserrat font-semibold">Expert Support</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-primary-blue mb-2">★★★★★</span>
              <p className="font-montserrat font-semibold">Trusted by Thousands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Categories */}
      <CategoriesSection />

      {/* Design Process */}
      <DesignProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Posts */}
      <BlogSection />

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
