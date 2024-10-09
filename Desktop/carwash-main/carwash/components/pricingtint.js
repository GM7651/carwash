"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PricingTint() {
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
            {isOpen ? 'Hide Pricing' : 'Tint Pricing'}
          </button>
          {isOpen && (

            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {/* First Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Regular Tints - Front Two Windows</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$120</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold  dark:text-gray-300">Tint Percent Options</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li className ="font-semibold text-lg">5% | 15% | 35% | 50% | 70% </li>
                      <li>Protection From UV rays</li>
                      <li>Added Privacy</li>
                      <li className= "text-xs mt-1 text-gray-200">Exterior Wash On Us</li>
                      
                    </ul>
                  </div>
                 
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">

                  Choose plan
                </button>
              </div>

              {/* Second Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Regular Tints - Front and Back windows</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$210</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Tint Percent Options</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li className ="font-semibold text-lg">5% | 15% | 35% | 50% | 70% </li>
                      <li>Protection From UV rays</li>
                      <li>Added Privacy</li>
                      <li className= "text-xs mt-1 text-gray-200">Exterior Wash On Us</li>
                      
                    </ul>
                  </div>
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
                  Choose plan
                </button>
              </div>

              {/* Third Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Regular Tints - Complete Car</p>
                <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
                    POPULAR
                </p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$325</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size</p>
                <div className="mt-8 flex  space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Tint Percent Options</span>
                    <ul className="mt-2 text-white text-sm list-disc list-inside">
                      <li className ="font-semibold text-lg">5% | 15% | 35% | 50% | 70% </li>
                      <li>Windsheild + Rear Window</li>
                      <li>Protection From UV rays</li>
                      <li>Added Privacy</li>
                      <li className= "text-xs mt-1 text-gray-200">Exterior Wash On Us</li>
                      
                    </ul>
                  </div>
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
                  Choose plan
                </button>
              </div>

              {/* Fourth Pricing Card */}
             
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                
                
                <p className="text-lg font-medium text-white dark:text-gray-100">Ceramic Tints - Full Car</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$600</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Tint Percent Options</span>
                    <ul className="mt-2 text-white text-sm list-disc list-inside">
                      <li className ="font-semibold text-lg">5% | 15% | 35% | 50% | 70% </li>
                      <li>Windsheild + Rear Window</li>
                      <li>Protection From UV rays</li>
                      <li>Added Privacy</li>
                      <li className= "text-xs mt-1 text-gray-200">Exterior Wash On Us</li>
                      
                    </ul>
                  </div>
            
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
                  Choose plan
                </button>
              </div>

              {/* Fifth Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Ceramic Tints - Single Window </p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$95</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Tint Percent Options</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li className ="font-semibold text-lg">5% | 15% | 35% | 50% | 70% </li>
                      <li>95$ /per window</li>
                      <li>Protection From UV rays</li>
                 
                      <li className= "text-xs mt-1 text-gray-200">Exterior Wash On Us</li>

                     
                    </ul>
                  </div>
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-16 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
                  Choose plan
                </button>
              </div>

              {/* Sixth Pricing Card */}
              <div className="px-8 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">
                <p className="text-lg font-medium text-white dark:text-gray-100">Tint Removal</p>
                <h4 className="mt-2 text-5xl font-semibold text-white dark:text-gray-100">$70-$120</h4>
                <p className="mt-4 text-xs text-white dark:text-gray-300">Non-Refundable | Price varies on vehicle size | Price varies on vehicle size</p>
                <div className="mt-8 flex space-x-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-semibold dark:text-gray-300">Interior Wash</span>
                    <ul className="mt-1 text-white text-sm list-disc list-inside">
                      <li>Tint Removal</li>
                      <li>Free Exterior Wash</li>
                     
                    </ul>
                  </div>
                </div>
                <button   className="w-full sm:w-auto px-8 py-2 mt-28 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer hover:bg-[#62f7fe]">
                  Choose plan
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PricingTint;
