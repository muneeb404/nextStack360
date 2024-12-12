import React from "react";

function AboutHero() {
  return (
    <div>
      <div
        className="bg-white w-full flex px-20 mt-[88px] justify-between items-center 
        mobile:max-laptop:flex-wrap-reverse 
        mobile:max-tablet:px-10"
      >
        <div className="w-[60%] mobile:max-laptop:w-full mobile:max-tablet:pb-8">
          <h1 className="text-[4rem] font-bold leading-[5rem] text-[#191818] mb-4
          mobile:max-laptop:text-[3rem] mobile:max-laptop:leading-[4rem]">
          Your Partner For <span className="text-[#E47725]">Software </span>
            Innovation
          </h1>

          <h3 className="text-[#191818] text-[20px] mb-6 leading-9">
          Navigating the challenges of web/app development from startup to mastery, we understand your current conditions and know how to expertly address your concerns.
          </h3>

          <button className="bg-[#E47725] text-white px-6 py-3 text-[20px] rajdhani font-semibold rounded-md border-none outline-none">
            Talk to us
          </button>
        </div>
        <div className="mobile:max-laptop:mx-auto mobile:max-laptop:my-6">
          <img className="w-[28rem]" src="AboutHeroImg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
