import React from 'react';
import FeatureCard from './FeatureCard';
import {data} from '../../Data/data';

export default function Features() {
  return (
    <section className=' w-full  py-5' id='features'>
      <div className='mb-[3rem] '>
        <p className='text-2xl font-semi text-designColor'>Features</p>
        <h3 className='text-[2.5rem] font-bold text-white'>What I Do</h3>
      </div>
      <div className=' p-3 flex gap-[2rem] justify-center lg:flex-nowrap flex-wrap '>
     {
      data.Features.map((ele)=>{
        return (
          <div key={ele.id}>
          <FeatureCard prop={ele}/>
        </div>
        )
      })
     }
      </div>
    </section>
    )
  
}
