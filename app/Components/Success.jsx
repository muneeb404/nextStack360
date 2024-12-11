import React from 'react'

function Success() {
  return (
    <div>
        <div className='w-full px-20 py-24 bg-[#E47725] text-white 
    mobile:max-tablet:px-10'>
        <h1 className='text-[40px] poppins text-center font-bold pb-4'>Our Success Stories</h1>
        <div className='bg-[#EEEDED33] border border-white rounded-xl flex py-10
        mobile:max-laptop:flex-wrap'>
            <div className='w-[50%] flex flex-col items-center gap-1
            mobile:max-laptop:w-full'>
                <img className='w-[138px]' src='success1.svg' alt="" />
                <img className='w-[420px]' src='success2.svg' alt="" />
                <div className='flex px-4 justify-center gap-3 mobile:max-lgmobile:flex-wrap'>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src='success3.svg' alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src='success4.svg' alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src='success5.svg' alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src='success6.svg' alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src='success7.svg' alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%] poppins flex flex-col gap-10
            mobile:max-laptop:w-full mobile:max-laptop:px-4 mobile:max-laptop:mt-8'>
                <div className=''>
                    <h1 className='text-[28px] pb-2 font-semibold'>About Autobuffy</h1>
                    <p className='text-[16px font-medium]'>Autobuffy was created to make it easier to find affordable, high quality auto parts using modern technology in the USA.</p>
                </div>
                <div>
                    <h1 className='text-[28px] pb-2 font-semibold'>Client Testimonial</h1>
                    <p className='text-[16px font-medium]'>I was extremely happy with the professionalism and skill set. I enjoyed working with the seller and ready to start working on our next project together! I highly recommend.</p>
                </div>
                <div className='flex gap-4'>
                    <img className='w-[40px] h-[40px] border-2 border-white rounded-full' src='success8.svg' alt="" />
                    <div>
                        <h1 className='text-[16px]'>Chetan Chada</h1>
                        <p className='text-[12px]'>Autobuffy - CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Success