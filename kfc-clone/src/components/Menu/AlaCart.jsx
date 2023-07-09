import React from 'react'
import AlaCartCard from './AlaCartCard'

export default function AlaCart({Ala}) {
  return (
    <div className='container mt-5'>
        <section id='AlaCart'>
        <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>Ala-Carte-&-Combos</h3>
        <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
            {
                Ala.map(alacart=>{
                    return (
                        <div key={alacart.id}>
                        <AlaCartCard AlaCartp={alacart}/>
                        </div>
                    )
                })
            }
        </div>
        </section>
    </div>
  )
}
