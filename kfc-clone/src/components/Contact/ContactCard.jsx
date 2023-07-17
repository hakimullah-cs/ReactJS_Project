import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';


export default function ContactCard({con}) {
  return (
    <div className='contact-card bg-[#1C1816]  max-w-[360px] h-full rounded-md w-full p-5 mb-5 text-white'>
              <h4 className='flex items-center gap-3 ml-5 text-xl font-bold'><BsFillTelephoneFill className='text-red-600'/> {con.headingone}</h4>
              <p className='text-[18px] ml-5 mb-5'>{con.Number}</p>
              <h4 className='flex items-center gap-3 ml-5 text-xl font-bold'><HiLocationMarker className='text-red-600'/> {con.headingtwo}</h4>
              <p className='text-[15px] ml-5 mb-5'>{con.description}</p>
             </div>
  )
}
