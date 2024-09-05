"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    const yOffset = 900; // Adjust this value to scroll further down
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    // Close the mobile menu after clicking
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <main className="dark:bg-black bg-white relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-black dark:text-white font-black text-3xl flex items-center relative z-20">
           <Image
            src="/carwash3.png"
            alt="Logo"
            width={180}
            height={150}
              style={{ width: '180px', height: '150px' }} // Apply inline styles directly for priority
             className="mr-2 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
      priority={true}
            />
          </div>
          <div className="flex items-center lg:hidden">
            <button className="flex flex-col ml-4" onClick={toggleMenu}>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
          <nav className="hidden lg:flex space-x-6">
            <a href="/" className="text-lg text-gray-800 dark:text-white uppercase">
              Home
            </a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="text-lg text-gray-800 dark:text-white uppercase">
              Services
            </a>
            <a href="#" className="text-lg text-gray-800 dark:text-white uppercase">
              Contact
            </a>
            <a href="#" className="text-lg text-gray-800 dark:text-white uppercase">
              Learn More
            </a>
          </nav>
        </div>
        <nav
          className={`lg:hidden font-sen text-gray-800 dark:text-white uppercase text-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 p-4 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 rounded-lg shadow-lg z-50 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <button 
            className="absolute top-2 right-2 text-gray-800 dark:text-white text-2xl font-bold" 
            onClick={toggleMenu}
          >
            &times;
          </button>
          <a href="/" className="block py-2 text-center">
            Home
          </a>
          <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="block py-2 text-center">
            Services
          </a>
          <a href="#" className="block py-2 text-center">
            Contact
          </a>
          <a href="#" className="block py-2 text-center">
            Learn More
          </a>
        </nav>
      </header>

      <div className="bg-white dark:bg-black flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Car wash
              <span className="text-5xl sm:text-7xl">Name</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mt-4 dark:text-white">
              [Car Shop Name] is your one-stop destination for premium automotive care. Specializing in professional window tinting, car wash services, and a range of additional services, including detailing, paint protection, and minor repairs, all aimed at keeping your vehicle in pristine condition.
            </p>
            <div className="flex mt-10">
              <a
                href="#"
                className="w-full sm:w-auto px-4 sm:px-6 py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]"
              >
                Get started
              </a>
              <a
                href="#"
                className="w-full ml-1 sm:w-auto px-4 sm:px-6 py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="ml-28 hidden sm:block sm:w-1/3 lg:w-1/2 relative">
            <Image
              className="object-contain object-center w-full rounded-xl"
              src="/carwash3.png"
              alt="Car Wash"
              width={600}
              height={450}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
