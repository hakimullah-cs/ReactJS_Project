import React from 'react';
import img from '../../assests/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Krunch-2023-05-31095826.png'


export default function ProductCard({pro}) {
  return (
    <div className='text-white   max-w-[300px] w-[100%] h-[90%] p-3 mb-12 relative bg-[#212529] rounded-md drop-shadow-lg'>
        <div className='image h-[250px] mb-3'>
            <img src={pro.image} alt='product-here' className='w-full h-full'/>
        </div>
        <div className='text mb-2'>
            <h3 className='text-xl font-bold mb-3'>{pro.title}</h3>
            <p className='text-justify font-semibold mb-3'>{pro.description}</p>
            <div className='text-2xl font-bold mb-5'>{pro.price}</div>
        </div>
         <a href='#' className='bg-[crimson] inline-block py-2 px-4 font-bold rounded-md absolute left-[4.5rem] bottom-[-1rem] hover:bg-white hover:text-red-900'>Add To Cart</a>
    </div>
  )
}
