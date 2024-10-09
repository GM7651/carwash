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
    
    if (element) {
      // Set different offsets for different sections
      let yOffset = 600; // Default offset for sections
      
      if (id === "#contact") {
        yOffset = 1300; // Set larger offset for contact section
      }
      
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Close the mobile menu after clicking
      if (isOpen) {
        setIsOpen(false);
      }
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
          <div className="uppercase  text-black dark:text-white font-black text-3xl flex items-center relative z-20">
           <Image
            src="/carwash3.png"
            alt="Logo"
            width={180}
            height={150}
              style={{ width: '180px', height: '150px' }}
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
            <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-lg text-gray-800 dark:text-white uppercase">
              Contact
            </a>
            <a href="#" className="text-lg text-gray-800 dark:text-white uppercase">
              Learn More
            </a>
          </nav>
        </div>
        <nav
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 shadow-lg sm:hidden`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-800 dark:text-white text-2xl font-bold"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="/" className="block py-2 text-center text-gray-900 dark:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "#services")}
                  className="block py-2 text-center text-gray-900 dark:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="block py-2 text-center text-gray-900 dark:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-center text-gray-900 dark:text-white">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="bg-white dark:bg-black flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Shine City
              <span className="text-5xl sm:text-7xl bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400 text-transparent bg-clip-text">Auto Spa</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mt-4 dark:text-white">
              Shine City Auto Spa is your one-stop destination for premium automotive care. Specializing in professional window tinting, car wash services, and a range of additional services, including detailing, paint protection, and minor repairs, all aimed at keeping your vehicle in pristine condition.
            </p>
            <div className="w-full -mt-72 min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <a
              href="/Appointment"
              className="inline-block w-full sm:w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400"
            >
              Book Appointment
            </a>
            <a
              href="#"
              className="inline-block w-full sm:w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400"
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
