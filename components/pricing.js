"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Pricing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section
        className="h-full bg-black dark:bg-black px-2"
      >
        <div className="container px-8 py-8 mx-auto">
          <button
            onClick={toggleDropdown}
            className="w-full px-4 py-8 text-4xl tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]"
          >
            {isOpen ? 'Hide Pricing' : 'Car Wash Pricing'}
          </button>
          {isOpen && (
            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {/* First Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
                  POPULAR
                </p>
                <p className="text-lg font-medium text-white dark:text-gray-100">Full Wash</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$30</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Exterior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Rim&apos;s</li> {/* Fixed */}
                      <li>Foam Wash</li>
                      <li>Air Dry</li>
                      <li>Spray Wax</li>
                      <li>Tire Shine</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Interior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Vacuum</li>
                      <li>Seat Cleaning</li>
                      <li>Dash Wipe</li>
                      <li>Window Cleaning</li>
                      <li>Floor Mats</li>
                    </ul>
                  </div>
                </div>
          <Link href="/Appointment">
            <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
Comming Soon             </button>
         </Link>
              </div>

              {/* Second Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Exterior Only</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$25</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Exterior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Rim&apos;s</li> {/* Fixed */}
                      <li>Foam Wash</li>
                      <li>Air Dry</li>
                      <li>Spray Wax</li>
                      <li>Tire Shine</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
    Comming Soon                 </button>
              </div>

              {/* Third Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Interior Wash</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$25</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Interior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Vacuum</li>
                      <li>Seat Cleaning</li>
                      <li>Dash Wipe</li>
                      <li>Window Cleaning</li>
                      <li>Floor Mats</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
    Comming Soon                 </button>
              </div>

              {/* Fourth Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Extended vehicle - Full Wash</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$35</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Exterior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Rim&apos;s</li> {/* Fixed */}
                      <li>Foam Wash</li>
                      <li>Air Dry</li>
                      <li>Spray Wax</li>
                      <li>Tire Shine</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Interior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Vacuum</li>
                      <li>Seat Cleaning</li>
                      <li>Dash Wipe</li>
                      <li>Window Cleaning</li>
                      <li>Floor Mats</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
    Comming Soon                 </button>
              </div>

              {/* Fifth Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Extended vehicle - Exterior Wash</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$30</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Exterior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Rim&apos;s</li> {/* Fixed */}
                      <li>Foam Wash</li>
                      <li>Air Dry</li>
                      <li>Spray Wax</li>
                      <li>Tire Shine</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
    Comming Soon                 </button>
              </div>

              {/* Sixth Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Extended vehicle - Interior Wash</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$30</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Interior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Vacuum</li>
                      <li>Seat Cleaning</li>
                      <li>Dash Wipe</li>
                      <li>Window Cleaning</li>
                      <li>Floor Mats</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
    Comming Soon                 </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Pricing;
