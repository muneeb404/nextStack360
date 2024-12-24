import Image from "next/image";
import React from "react";
import webServices1 from "@/public/webServices1.svg";
import webServices2 from "@/public/webServices2.svg";
import webServices3 from "@/public/webServices3.svg";
import webServices4 from "@/public/webServices4.svg";
import webServices5 from "@/public/webServices5.svg";

function WebServices() {
  return (
    <div
      className="bg-[#191818] text-white py-12 px-20 poppins
    mobile:max-lgmobile:px-10"
    >
      <h1 className="text-[48px] font-bold text-center mb-8">
        Web Development Services
      </h1>
      <div className="flex flex-wrap gap-y-8 justify-around items-center">
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[280px] py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
            mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={webServices1} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Experience Design
          </h1>
          <p className="text-[16px] poppins">
            With our strong UI/UX design & front-end development skills, we
            create delightful user experiences.
          </p>
        </div>
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[280px]  py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
            mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={webServices2} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Frontend Development
          </h1>
          <p className="text-[16px] poppins">
            We deliver full-stack front-end expertise for innovative,
            user-centric web and mobile solutions.{" "}
          </p>
        </div>
        <div
          className="text-left rounded-2xl px-7 w-[350px] h-[280px]  py-6 bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
            mobile:max-lgmobile:w-80"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="py-4">
            <Image src={webServices3} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Backend Development
          </h1>
          <p className="text-[16px] poppins">
            We engineer back-end solutions with a focus on easy maintenance,
            scalability, and extensibility.{" "}
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
            <Image src={webServices4} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Full Stack <br /> Development
          </h1>
          <p className="text-[16px] poppins">
            We deliver complete software engineering for versatile backend
            solutions, from simple to high-performing{" "}
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
            <Image src={webServices5} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            E-Commerce WebDevelopment
          </h1>
          <p className="text-[16px] poppins">
            Stack360 builds e-commerce web apps with features like online
            stores, shopping carts, and integrated payment gateways.{" "}
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
            <Image src={webServices2} />
          </div>
          <h1 className="text-[24px] py-2 font-medium poppins">
            Web App Maintenance And Updates
          </h1>
          <p className="text-[16px] poppins">
            After app launch, we offer ongoing maintenance, bug fixes,
            performance improvements, and feature additions.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebServices;
