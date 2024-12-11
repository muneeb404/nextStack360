'use client'

import React from 'react'
import Carousel from "react-multi-carousel";
import renderButtonGroupOutside from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomButtonGroup } from "./CustomButtonGroup";


function Services() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1330 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1330, min: 945 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 945, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
  return (
    <div className="bg-[#191818] mt-[78px] relative text-white px-20 py-16 pb-20 mobile:max-lgmobile:px-3">
      <h1 className="text-[40px] font-bold text-center pb-10">
        Services We Offer
      </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup/>}
          renderDotsOutside={renderButtonGroupOutside}
        >
            <div
            className="mx-auto text-left rounded-2xl px-7 w-96 pt-8 h-[25rem] bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner
            mobile:max-lgmobile:w-80 "
            style={{
                boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
            }}
            >
            <div className="h-[80px] flex items-center">
                <img className="py-5" src="servicePic1.svg" alt="" />
            </div>
            <div>
                <h1 className="text-[20px] py-4 font-semibold poppins">DevOps</h1>
                <p className="text-[14px] poppins h-[140px] overflow-hidden">
                Supercharge your software development with our DevOps solutions.
                We optimize cost, speed, performance, and maintenance by
                strategically implementing native, hybrid, and cross-platform
                stacks aligned with your business goals.
                </p>
            </div>
            <div>
                <button className="bottom-16 flex gap-2 py-3 items-center">
                <div className="text-[16px] font-medium">Hire Now</div>
                <img src='rightArrow.svg' alt="" />
                </button>
            </div>
            </div>

            <div
                className="mx-auto text-left rounded-2xl px-7 w-96 pt-8 h-[25rem] bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner mobile:max-lgmobile:w-80"
                style={{
                    boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
                }}
                >
                <div>
                    <img className="py-5" src='servicePic2.svg' alt="" />
                </div>
                <div>
                    <h1 className="text-[20px] py-4 font-semibold poppins">Web Development</h1>
                    <p className="text-[14px] poppins h-[140px] overflow-hidden">
                    Stack360 web developers, proficient in both front-end and full-stack development, construct and uphold websites designed for optimal efficiency and structured to meet your specific business needs.
                    </p>
                </div>
                <div>
                    <button className="bottom-16 flex gap-2 py-3 items-center">
                    <div className="text-[16px] font-medium">Hire Now</div>
                    <img src='rightArrow.svg' alt="" />
                    </button>
                </div>
            </div>

            <div
            className="mx-auto text-left rounded-2xl px-7 w-[380px] pt-8 h-[400px]  bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner mobile:max-lgmobile:w-80 "
            style={{
                boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
            }}
            >
            <div>
                <img className="py-5" src='servicePic3.svg' alt="" />
            </div>
            <div>
                <h1 className="text-[20px] py-4 font-semibold poppins">
                Mobile App Development
                </h1>
                <p className="text-[14px] poppins h-[140px] overflow-hidden">
                Our team of mobile app developers enhances cost-effectiveness,
                speed, performance, and maintenance by strategically selecting
                native, hybrid, and cross-platform stacks that align with your
                business goals.
                </p>
            </div>
            <div>
                <button className="bottom-16 flex gap-2 py-3 items-center">
                <div className="text-[16px] font-medium">Hire Now</div>
                <img src='rightArrow.svg' alt="" />
                </button>
            </div>
            </div>

            <div
            className="mx-auto text-left rounded-2xl px-7 w-[380px] pt-8 h-[400px]  bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner mobile:max-lgmobile:w-80 "
            style={{
                boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
            }}
            >
            <div>
                <img className="py-5" src='servicePic3.svg' alt="" />
            </div>
            <div>
                <h1 className="text-[20px] py-4 font-semibold poppins">
                UI/UX Design
                </h1>
                <p className="text-[14px] poppins h-[140px] overflow-hidden">
                We are specialized in creating beautiful and smooth UI/UX designs that provide a better user experience by incorporating effective collaboration, and streamlined projects which strive for better results.
                </p>
            </div>
            <div>
                <button className="bottom-16 flex gap-2 py-3 items-center">
                <div className="text-[16px] font-medium">Hire Now</div>
                <img src='rightArrow.svg' alt="" />
                </button>
            </div>
            </div>

            <div
            className="mx-auto text-left rounded-2xl px-7 w-[380px] pt-8 h-[400px]  bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner mobile:max-lgmobile:w-80"
            style={{
                boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
            }}
            >
            <div>
                <img className="py-5" src='servicePic2.svg' alt="" />
            </div>
            <div>
                <h1 className="text-[20px] py-4 font-semibold poppins">
                SEO
                </h1>
                <p className="text-[14px] poppins h-[140px] overflow-hidden">
                We start the SEO cycle with a full site review and proposal report. Our experts will survey your key measurements, perform research, dissect your rivals and key pages of your site, and make a point-by-point execution plan.
                </p>
            </div>
            <div>
                <button className="bottom-16 flex gap-2 py-3 items-center">
                <div className="text-[16px] font-medium">Hire Now</div>
                <img src='rightArrow.svg' alt="" />
                </button>
            </div>
            </div>

        </Carousel>
    </div>
  )
}

export default Services