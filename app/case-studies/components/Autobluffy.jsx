import React from "react";

function Autobluffy() {
  return (
    <div>
      <div
        className="bg-[#191818] rounded-xl text-white flex mb-10 
         mobile:max-laptop:flex-col mobile:max-laptop:"
      >
        <div
          className="w-[40%] flex flex-col justify-center text-left gap-4 pl-16
            mobile:max-laptop:w-full mobile:max-laptop:px-8 mobile:max-laptop:py-10"
        >
          <h1 className="text-3xl font-semibold">
            Autobuffy - Selling Auto Parts in USA
          </h1>
          <p className="text-base opacity-90">
            Autobuffy was created to make it easier to find affordable,
            high-quality auto parts using modern technology in the USA.
          </p>
          <div className="flex justify-start gap-3 mobile:max-lgmobile:flex-wrap py-4">
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success3.svg" alt="" />
            </div>
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success4.svg" alt="" />
            </div>
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success5.svg" alt="" />
            </div>
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success6.svg" alt="" />
            </div>
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success7.svg" alt="" />
            </div>
          </div>
          <button className="border-[white] border-[1.5px] rajdhani rounded px-5 py-2 mt-2 w-fit font-semibold">
            Show Case Study
          </button>
        </div>
        <div>
          <img className="w-auto" src="autoBluffy.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Autobluffy;
