import React from "react";

function HeroLogo() {
  return (
    <div>
      <div className="w-full relative h-[92px] my-8 bg-white flex justify-center items-center ">
        <div className="absolute">
          <img src="dotLine.svg" alt="" />
        </div>
        <div className="px-20 z-10 w-full flex justify-between">
          <div
            className="p-4 w-fit rounded-full"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo1.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo2.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo3.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full mobile:max-lgmobile:hidden"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo4.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full mobile:max-tablet:hidden"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo5.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full mobile:max-tablet:hidden"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo1.svg"
              alt=""
            />
          </div>
          <div
            className="p-4 w-fit rounded-full mobile:max-tablet:hidden"
            style={{
              background:
                "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
            }}
          >
            <img
              className="w-[30px] h-[30px] colorr"
              src="heroLogo2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLogo;
