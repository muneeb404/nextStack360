"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ServicesHover from "../Components/ServicesHover";
import HireTalentMenu from "../Components/HireTalentMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Manage open/close state
  const [isServicesHover, setIsServicesHover] = useState(false); // Manage Hover state
  const [isHireHover, setIsHireHover] = useState(false); // Manage Hover state

  const navbarRef = useRef(null);

  const handleServicesMouseEnter = () => setIsServicesHover(true);
  const handleServicesMouseLeave = () => setIsServicesHover(false);
  const handleHireMouseEnter = () => setIsHireHover(true);
  const handleHireMouseLeave = () => setIsHireHover(false);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative overflow-visible">
      <div className="bg-white px-20 flex items-center justify-between w-full h-[78px] fixed top-0 z-40 mobile:max-tablet:px-10">
        <img className="w-[8.5rem]" src="logo.svg" alt="" />
        <div>
          <ul
            ref={navbarRef} // Reference for outside click detection
            className={`flex gap-8 rajdhani text-[16px] font-semibold text-black
              mobile:max-laptop:absolute mobile:max-laptop:flex-col bg-white
              mobile:max-laptop:h-screen mobile:max-laptop:w-[12rem]
              mobile:max-laptop:top-0 mobile:max-laptop:px-8 mobile:max-laptop:pt-24
              laptop:max-xl:flex-row laptop:max-xl:h-fit laptop:max-xl:pt-0 laptop:max-xl:w-full
              ${
                isOpen
                  ? "mobile:max-laptop:right-0"
                  : "mobile:max-laptop:-right-[12rem]"
              } transition-all duration-300 ease-in-out`}
          >
            <li
              className="cursor-pointer py-6 mobile:max-laptop:py-0 hover:text-[#E47725] transition-all"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="cursor-pointer py-6 hover:text-[#E47725] transition-all mobile:max-laptop:py-0"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className=""
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <div
                className="flex gap-1 py-6 hover:text-[#E47725] transition-all mobile:max-laptop:py-0"
              >
                <Link href="/services">Services</Link>
                <img src="navArrow.svg" alt="" />
                {isServicesHover && <ServicesHover />}
              </div>
            </li>
            <li
              className=""
              onMouseEnter={handleHireMouseEnter}
              onMouseLeave={handleHireMouseLeave}
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <div
                className="flex gap-1 cursor-pointer py-6 hover:text-[#E47725] transition-all mobile:max-laptop:py-0"
              >
                <Link href="/hire-talent">Hire Talent</Link>
                <img src="navArrow.svg" alt="" />
                {isHireHover && <HireTalentMenu />}
              </div>
            </li>
            <li
              className="cursor-pointer py-6 hover:text-[#E47725] transition-all mobile:max-laptop:py-0"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li
              className="cursor-pointer py-6 hover:text-[#E47725] transition-all mobile:max-laptop:py-0"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              <Link href="/contact">Contact</Link>
            </li>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-10 border rounded-md border-[#E47725] p-1 laptop:max-xl:hidden"
            >
              <img src="close.png" alt="" />
            </button>
            <button className="text-[#E47725] rajdhani text-[16px] outline-none font-semibold border border-1.5 border-[#E47725] rounded-md px-3 py-1.5 mobile:max-laptop:absolute bottom-12 laptop:max-xl:hidden">
              Get in touch
            </button>
          </ul>
        </div>
        {/* "Get in Touch" Button */}
        <button
          className="text-[#E47725] rajdhani text-[16px] outline-none font-semibold border border-1.5 border-[#E47725] rounded-md px-3 py-1.5 mobile:max-laptop:hidden"
        >
          Get in touch
        </button>
        {/* Open Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="border rounded-md border-[#E47725] p-1 laptop:max-xl:hidden"
        >
          <img src="menu.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
