import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';

export default function SignatureCard({signature}) {
  return (
    <div className='everydaycard relative max-w-[280px] min-w-[300px] h-[100%] mb-5  p-3 rounded-md bg-[#212529]'>
    <AiOutlineHeart className='text-[#EA002A] text-3xl ms-auto'/>
<div className='image w-[100%] h-[180px] mb-3'>
  <img src={signature.image} alt='Everydaycardimage' className='w-[100%] h-[100%]'/>
</div>
<h4 className='text-2xl font-semibold mb-3'>{signature.title}</h4>
<p className='mb-3'>{signature.description}</p>
<div className='font-bold mb-4'>{signature.price}</div>
<a href='#' className='absolute left-[5rem] bottom-[-1rem]  bg-[#EA002A] text-white py-2 px-4 rounded-md font-bold'>Add To Cart</a>
</div>
  )
}
