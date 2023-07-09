import React from 'react'

import EverydayCard from './EverydayCard'

export default function Everyday({every}) {
  return (
    <div className='container'>
       <section id='everyday-value'>
       <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>Everyday Value</h3>
        <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
        {
            every.map(every=>{
                return (
                    <div key={every.id}>
                 
        <EverydayCard everycard={every}/>
        
                    </div>
                )
            })
        }
        </div>
       </section>
        
    </div>
  )
}
