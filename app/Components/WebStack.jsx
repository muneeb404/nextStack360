import Image from "next/image";
import React from "react";

import tech1 from "@/public/tech1.svg"
import tech2 from "@/public/tech2.svg"
import tech3 from "@/public/tech3.svg"
import tech4 from "@/public/tech4.svg"
import tech5 from "@/public/tech5.svg"
import tech8 from "@/public/tech8.svg"

function WebStack() {
  return (
    <div>
      <div
        className="w-full poppins bg-white py-24 flex flex-col px-20 items-center justify-center 
        mobile:max-tablet:px-10"
      >
        <h1 className="text-[2.5rem] text-center poppins font-bold mb-6">
          <span className="text-[#E47725]">Tech Stack</span> For Web Development
        </h1>

        <div className="flex gap-7 py-7 flex-wrap flex-grow-6 justify-center">
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech1}
              alt=""
            />
          </div>
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech2}
              alt=""
            />
          </div>
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech3}
              alt=""
            />
          </div>
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech4}
              alt=""
            />
          </div>
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech5}
              alt=""
            />
          </div>
          <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
              src={tech8}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebStack;
