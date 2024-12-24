import React from "react";
import Image from "next/image";
import mobServicesPic1 from "@/public/mobServicesPic1.svg";
import mobServicesPic2 from "@/public/mobServicesPic2.svg";
import mobServicesPic3 from "@/public/mobServicesPic3.svg";

function MobileServices() {
  return (
    <div
      className="bg-[#191818] text-white py-12 px-20 poppins
        mobile:max-lgmobile:px-10"
    >
      <h1 className="text-[48px] font-bold text-center mb-8">
        Mobile Development Services
      </h1>
      <div className="flex flex-wrap gap-y-8 justify-around items-center">
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[320px]  py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
                mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={mobServicesPic1} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Android <br />
            App Development
          </h1>
          <p className="text-[16px] poppins">
            Our developers use top-notch tools and languages to ensure your
            business thrives with our Android app services.{" "}
          </p>
        </div>
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[320px]  py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
                mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={mobServicesPic2} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            iOS <br />
            App Development
          </h1>
          <p className="text-[16px] poppins">
            Accelerate projects with our iOS developers, creating user-friendly
            apps to overcome business constraints.{" "}
          </p>
        </div>
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[320px]  py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
                mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={mobServicesPic3} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Hybrid Mobile <br />
            App Development
          </h1>
          <p className="text-[16px] poppins">
            We blend web and native solutions to create hybrid apps with
            advanced features.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileServices;
