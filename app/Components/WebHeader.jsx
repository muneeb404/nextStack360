import Image from "next/image";
import React from "react";
import WebHeaderPic from "@/public/webHeroPic.svg"

function WebHeader() {
  return (
    <div>
      <div>
        <div
          className="bg-white w-full flex gap-3 px-20 py-20 poppins mt-[78px] justify-between items-center 
        mobile:max-laptop:flex-wrap-reverse 
        mobile:max-tablet:px-10"
        >
          <div className="w-[60%] mobile:max-laptop:w-full mobile:max-tablet:pb-8">
            <h1
              className="text-[4rem] font-bold leading-[5rem] text-[#191818] mb-4
          mobile:max-laptop:text-[3rem] mobile:max-laptop:leading-[4rem]"
            >
              Future-Ready Web{" "}
              <span className="text-[#E47725]">Development </span>
            </h1>

            <h3 className="text-[#191818] text-[20px] mb-6 leading-9">
              Embrace the growing trend of web development services by
              collaborating with our team of experts to craft a compelling
              online identity for your company.{" "}
            </h3>

            <button className="bg-[#E47725] text-white px-6 py-3 text-[20px] rajdhani font-semibold rounded-md border-none outline-none">
              We’re Ready To Get Started
            </button>
          </div>
          <div className="mobile:max-laptop:mx-auto mobile:max-laptop:my-6">
            <Image src={WebHeaderPic} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebHeader;
