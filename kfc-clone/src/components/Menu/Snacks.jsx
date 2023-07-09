import React from 'react'
import SnackCard from './SnackCard'

export default function Snacks({snack}) {
  return (
    <div className='container'>
        <section id='snacks'>
        <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>Snacks-&-Beverages</h3>
        <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
           {
            snack.map(snacks=>{
                return (
                    <div key={snacks.id}>
                        <SnackCard snack={snacks}/>
                    </div>
                )
            })
           }
        </div>
        </section>
    </div>
  )
}
