import React from 'react';
import {MdOutlineDeveloperMode} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';


function FeatureCard({prop}) {
  return (
    <div className='featurecard card max-w-[380px] h-full  md:mb-0 mb-5 p-[2.5rem] rounded-md bg-bodyColor'>
       <MdOutlineDeveloperMode className='text-3xl text-designColor mb-4'/>
       <h4 className='text-xl font-bold mb-4'>{prop.title}</h4>
       <p className='font-semibold text-left mb-5'>{prop.description}</p>
       <AiOutlineArrowRight className='arrow text-designColor text-2xl mt-5'/>
    </div>
  )
}

export default FeatureCard