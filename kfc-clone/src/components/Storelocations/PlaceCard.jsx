import React from 'react';


export default function PlaceCard({ala}) {
  return (
    <div className='text-white  p-3 mb-3 rounded-md flex gap-2 items-center bg-[#1C1816]'>
      <div className='image w-[10rem]'>
        <img src={ala.image} alt='location' className='w-[100%]'/>
      </div>
      <div className='text  p-2'>
        <h4 className='text-xl font-bold mb-2'>{ala.title}</h4>
        <p className='text-[12px] text-justify mb-2 font-bold'>{ala.location}</p>
        <p className='text-xl text-[#EA002A] font-bold'>{ala.timing}</p>
      </div>
    </div>
  )
}
