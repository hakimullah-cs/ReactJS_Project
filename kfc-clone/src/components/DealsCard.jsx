import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';


export default function DealsCard({deals}) {
  return (
    <div className='relative  text-white text-center rounded-lg bg-[#1C1816] px-3 max-w-[280px] min-w-[300px]'>
        <div className='top-icons'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <AiOutlineHeart className='text-3xl text-[#EA002A] absolute right-4 top-3'/>
        <div className='image mb-2'>
            <img src={deals.image} alt='dealimage'/>
        </div>
        <h4 className='price text-xl mb-2 font-bold text-left'>{deals.title}</h4>
        <p className='text-left mb-3'>{deals.description}</p>
        <div className='text-left text-xl font-bold mb-4'>{deals.price}</div>
        <a href='/' className='bg-[#EA002A] text-white py-2 px-3 rounded-md font-semibold mt-5'>+ Add To Cart</a>
    </div>
  )
}
