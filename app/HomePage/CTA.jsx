import React from "react";
import ctaMask from "@/public/ctaMask.svg"
import Image from "next/image";

function CTA() {
  return (
    <div>
      <div
        className="bg-[#191818] w-full h-[21rem] text-white relative overflow-hidden
        mobile:max-laptop:px-10
        tablet:max-laptop:h-[25rem]
        mobile:max-tablet:h-[34rem]"
      >
        <Image
          className="absolute top-0 left-0 mobile:max-laptop:hidden"
          src={ctaMask}
          alt=""
        />
        <div className="flex justify-center flex-col items-center h-full text-center gap-3 py-20">
          <h1 className="poppins text-[40px] font-semibold">
            Ready to <span className="text-[#E47725]">Turn</span> Your{" "}
            <span className="text-[#E47725]">Ideas</span> into Reality?
          </h1>
          <p className="poppins max-w-5xl text-[16px] text-center text-[#DCDCDC]">
            We’re here to help you build innovative, custom software solutions
            tailored to your business needs. Whether you’re looking for a mobile
            app, web application or enterprise solution, our team of experts is
            ready to bring your vision to life.
          </p>
          <button className="px-6 py-3 bg-[#E47725] text-[20px] font-semibold rounded-md rajdhani hover:text-[#ffffff] hover:bg-transparent border-2 border-transparent hover:border-[#E47725] transition-all duration-300 ease-in-out transform hover:scale-101">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
