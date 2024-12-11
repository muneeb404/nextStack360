import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-white px-20 mobile:max-lgmobile:px-10">
        <div
          className="bg-white w-full py-16 border-b-2 border-[#DCDCDC] poppins flex justify-between
        mobile:max-laptop:flex-wrap mobile:max-laptop:pb-0"
        >
          <div className=" flex flex-col gap-3 mb-8">
            <img className="w-[156px] pb-3" src='logo.svg' alt="" />
            <div className="flex gap-5">
              <img className="w-[16px]" src='location.svg' alt="" />
              <p className="text-[14px] font-light">
                82-G, First Floor, <br />
                DHA Phase 1, Lahore Pakistan
              </p>
            </div>
            <div className="flex gap-5">
              <img className="w-[16px]" src="call.svg" alt="" />
              <p className="text-[14px] font-light">+92 331 11 11 753</p>
            </div>
            <div className="pt-[0.08rem] bg-[#DCDCDC]"></div>
            <div className="flex gap-5">
              <img className="w-[16px]" src="mail.svg" alt="" />
              <p className="text-[14px] font-light">Sales@stack360.co</p>
            </div>
          </div>

          <div className="mb-8 mobile:max-lgmobile:pr-24">
            <h1 className="text-[16px] font-semibold mb-5">Services</h1>
            <ul className="flex flex-col gap-1.5 text-[14px] font-light cursor-pointer">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Software Quality Assurance</li>
              <li>UI/UX Design Services</li>
            </ul>
          </div>

          <div className="mb-8 mobile:max-lgmobile:pr-24">
            <h1 className="text-[16px] font-semibold mb-5">Company</h1>
            <ul className="flex flex-col gap-1.5 text-[14px] font-light">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="mr-4 mb-8">
            <h1 className="text-[16px] font-semibold mb-5">
              Subscribe to our newsletter
            </h1>
            <div className="border-b border-b-[#DCDCDC] pb-3 flex justify-between">
              <input
                className="bg-transparent border-none outline-none text-[12px] placeholder:text-[#6E6E6E]"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-[#E47725] px-3 py-2 rounded-md">
                <img src='rightArrow.svg' alt="" />
              </button>
            </div>
            <div className="flex pt-4 gap-3">
              <div className="bg-black rounded-full p-2">
                <img src='insta.svg' alt="" />
              </div>
              <div className="bg-black rounded-full p-2">
                <img src='insta.svg' alt="" />
              </div>
              <div className="bg-black rounded-full p-2">
                <img src='linkedin.svg' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full text-center py-6 poppins text-[14px] font-light">
          © 2024 Stack360. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
