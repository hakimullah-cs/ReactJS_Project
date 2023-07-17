import React from 'react';

import './Card.css';

export default function CategoryCard({card}) {
  return (
    <div className='card bg-[#1C1816] text-white  p-2 w-[200px]'>
       <div className='image w-[150px]  m-auto mb-3'>
        <img src={card.image} alt='' className=''/>
       </div>
       <div className='text text-center font-semibold'>
        <p className='title-para'>{card.title}</p>
       </div>
    </div>
  )
}
