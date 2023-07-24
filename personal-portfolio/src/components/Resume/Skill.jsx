import React from 'react';
import {Line } from 'rc-progress';

function Skill({prop}) {
  return (
    <div className='mb-5'>
            <div className='flex justify-between items-center'>
            <span className='text-xl font-semibold text-white'>{prop.title}</span>
            <span className=' font-semibold text-white'>{prop.percent}%</span>
            </div>
            <Line percent={80} strokeWidth={1} trailWidth={1}  strokeColor="#ff014f" className='mt-2' /> 
            </div>
  )
}

export default Skill