'use client'

import React, { useState } from 'react';
import TechStackLogos from './TechStackLogos';

function TechStack() {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('Technologies');

  // Categories Data
  const categories = [
    { name: 'Technologies', icon: 'stackCategory1.svg' },
    { name: 'Cloud Infrastructure', icon: 'stackCategory2.svg' },
    { name: 'Devops', icon: 'stackCategory3.svg' },
  ];

  return (
    <div>
      <div
        className="w-full bg-white py-24 flex flex-col px-20 items-center justify-center 
        mobile:max-tablet:px-10"
      >
        <h1 className="text-[2.5rem] text-center poppins font-bold mb-6">
          Yes, We Support Your Entire <span className="text-[#E47725]">Tech Stack</span>
        </h1>
        <div className="flex gap-8 mobile:max-tablet:flex-wrap mobile:max-tablet:justify-center">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => setActiveCategory(category.name)} // Update active category
              className="flex flex-col items-center cursor-pointer mobile:max-tablet:flex-wrap mobile:max-tablet:flex-row mobile:max-tablet:gap-5"
            >
              <img
                src={category.icon}
                alt={category.name}
                className={`transition-all duration-300 ease-in-out ${
                  activeCategory === category.name ? 'filter brightness-0 invert sepia' : ''
                }`}
                style={{
                  filter:
                    activeCategory === category.name
                      ? 'invert(52%) sepia(38%) saturate(1369%) hue-rotate(347deg) brightness(95%) contrast(87%)'
                      : 'none',
                }}
              />
              <div
                className={` border-b-2 poppins text-[16px] font-medium py-2 ${
                  activeCategory === category.name ? 'border-b-[#E47725]' : 'border-b-transparent'
                }`}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Pass activeCategory to TechStackLogo */}
        {/* <TechStackLogo activeCategory={activeCategory} /> */}
        <TechStackLogos activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default TechStack;
