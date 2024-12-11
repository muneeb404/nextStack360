import React from 'react';

function StackLogo({ img }) {
  return (
    <div className="border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center mobile:max-lgmobile:w-[6rem] mobile:max-lgmobile:h-[6rem]">
      <img
        className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mobile:max-lgmobile:w-[4rem] mobile:max-tablet:grayscale-0"
        src={img}
        alt=""
      />
    </div>
  );
}

export default StackLogo;
