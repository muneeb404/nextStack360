import React from 'react'

function page() {
  return (
    <div className=''>
        <div className='w-full px-20 py-32 flex justify-around items-center
        mobile:max-tablet:flex-col-reverse mobile:max-tablet:px-10'>
            <div className='w-[40%] 
            mobile:max-tablet:mt-5 mobile:max-lgmobile:w-[60%]'>
              <img src="contactHero.svg" alt="" />
            </div>
            <div className='w-[45%] poppins
            mobile:max-tablet:w-full'>
              <h1 className='text-[36px] font-bold mb-2'>Let’s get <span className='text-[#E47725]'>started</span> today!</h1>
              <p className='text-[#6E6E6E] mb-8'>Give us a call, we endeavour to answer all enquiries within 12 hours on business days. We will be happy to answer your questions.</p>
              <form action=""
              className='flex flex-col gap-5'>
                <input className='w-full px-3 py-2 rounded border text-[#6e6e6e] border-[#AFAFAF] outline-1 outline-[#E47725] hover:outline-[#E47725] active:bg-[#F374211A]' type="text" placeholder='Your Name*'/>
                <input className='w-full px-3 py-2 rounded border text-[#6e6e6e] border-[#AFAFAF] outline-1 outline-[#E47725] hover:outline-[#E47725] active:bg-[#F374211A]' type="text" placeholder='Your Email Address*'/>
                <textarea className='w-full px-3 py-2 rounded border text-[#6e6e6e] border-[#AFAFAF] outline-1 outline-[#E47725] hover:outline-[#E47725] active:bg-[#F374211A]' rows={5} name="" id="" placeholder='Tell us about your project'></textarea>
                <button className='bg-[#E47725] border-none w-fit px-6 rounded py-2 text-white'>Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default page