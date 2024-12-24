import Link from "next/link";
import React from "react";

function HireTalentMenu() {
  return (
    <div className="bg-[#FFF5EC] transition-all absolute left-0 top-[-5px] w-full mt-[78px] p-20 flex items-start poppins 
    mobile:max-laptop:hidden">
      <div className="w-[40%]">
        <h1 className="text-[32px] font-semibold poppins text-[#191818] max-w-[80%]">
          Expanding Your Workforce with Skilled Professionals{" "}
        </h1>
        <button className="flex gap-2 py-3 items-center text-[#E47725]">
          <div className="text-[16px] font-medium">Hire Now</div>
          <img src="rightArrow.svg" alt="" />
        </button>
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">Frontend</div>
          <ul>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">React Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Angular Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Vue.js Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Next.js Developers</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">Backend</div>
          <ul>
          <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">ROR Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Python Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">.NET Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Django Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Node.js Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Nest Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Blockchain Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Django Developers</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">Mobile App</div>
          <ul>
          <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">React Native Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Flutter Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Xamarin Developers</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Swift Developers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HireTalentMenu;
