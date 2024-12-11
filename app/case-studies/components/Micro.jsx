import React from "react";

function Micro() {
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
            Microhealthllc - Healthcare Information
          </h1>
          <p className="text-base opacity-90">
            Microhealth provides healthcare consumers with the information,
            tools, and transparency to promote better decision-making to improve
            health and wellness.
          </p>
          <div className="flex justify-start gap-3 mobile:max-lgmobile:flex-wrap py-4">
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success3.svg" alt="" />
            </div>
            <div className="bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center">
              <img src="success4.svg" alt="" />
            </div>
          </div>
          <button className="border-[white] border-[1.5px] rajdhani rounded px-5 py-2 mt-2 w-fit font-semibold">
            Show Case Study
          </button>
        </div>
        <div>
          <img className="w-auto" src="micro.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Micro;
