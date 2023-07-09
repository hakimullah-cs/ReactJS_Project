import React from 'react'
import MidnightCard from './MidnightCard'

export default function Midnight({mid}) {
  return (
    <div className='container'>
        <section id='midnight'>
        <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>Midnight (Start at 12 am)</h3>
        <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
          {
            mid.map(mids=>{
                return (
                    <div>
                        <MidnightCard mid={mids}/>
                    </div>
                )
            })
          }
        </div>
        </section>
    </div>
  )
}
