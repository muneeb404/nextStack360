import React from 'react'

function AboutGoal() {
    return (
        <div className='px-20 py-12 mobile:max-tablet:px-10'>
            <h1 className='text-5xl font-bold poppins text-center my-5'>What We are Building at <span className='text-[#E47725]'>Stack360?</span></h1>
            <div className='flex justify- relative pb-64 mobile:max-laptop:pb-[0]'>
                <div className='poppins w-[50%] pt-8 mobile:max-laptop:w-[100%]'>
                    <h1 className='text-[36px] font-semibold'>Our Goal</h1>
                    <p className='text-[16px] text-[#6E6E6E] mt-3'>From Startup to maestro we have been through such conditions that you are in currently, we know your challenges of web/app development and know how to solve them masterly.
                        <br />
                        <br />
                        Stack360 is a team of professionals from Web app development to Mobile App development by making capitative UI/UX designs and taking your business to the first page of search results by doing strong SEO of your business.
                        <br />
                        <br />
                        Stack360 is dealing with moderate digitized change on the planet. Numerous new businesses are not even ready to begin absolutely because of costly innovation development costs. We associate the best ability in a reasonable model. We mean to help new companies globally go far off with no difficulties at all.
                        <br />
                        <br />
                        We are a team with all the skills you need to give a boost to your business.</p>
                </div>
                <div className=''>
                    <img className='absolute bottom-0 right-0 mobile:max-laptop:hidden' src="aboutGoalPic.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutGoal