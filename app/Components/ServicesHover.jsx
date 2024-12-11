import Link from "next/link";
import React from "react";

function ServicesHover() {
  return (
    <div className="bg-[#FFF5EC]  absolute left-0 top-0 w-full mt-[78px] p-20 flex items-start poppins mobile:max-laptop:hidden">
      <div className="w-[40%]">
        <h1 className="text-[32px] font-semibold poppins text-[#191818] max-w-[80%]">
          Gain the Expertise You Need for Successful Product Development
        </h1>
        <button className="flex gap-2 py-3 items-center text-[#E47725]">
          <div className="text-[16px] font-medium">Hire Now</div>
          <img src="rightArrow.svg" alt="" />
        </button>
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">
            Software Development
          </div>
          <ul>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Web Development</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Mobile App Development</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">DevOps</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">
          Design & Solutions
          </div>
          <ul>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">Graphics Designing</Link>
            </li>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">UI/UX</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[20px] font-semibold mb-3 text-[#191818]">
          Support
          </div>
          <ul>
            <li className="text-[#777777] text-[16px] font-medium mb-2 hover:text-[#E47725] transition-all">
              <Link href="/">QA & Testing</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesHover;
