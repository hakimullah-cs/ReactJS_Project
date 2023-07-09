import React from 'react'
import SharingCard from './SharingCard'

export default function Sharing({share}) {
  return (
    <div className='container'>
        <section id='sharing'>
        <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>sharing</h3>
        <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
            {
             share.map(shares=>{
                return (
                    <div key={shares.id}>
                        <SharingCard share={shares}/>
                    </div>
                )
             })
            }
        </div>
        </section>
    </div>
  )
}
