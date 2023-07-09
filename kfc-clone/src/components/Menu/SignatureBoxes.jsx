import React from 'react'
import SignatureCard from './SignatureCard'

export default function SignatureBoxes({sign}) {
  return (
    <div className='container'>
       <section id='signature-boxes'>
       <h3 className='title text-3xl font-bold mb-[3rem] uppercase'>Signature-Boxes</h3>
       <div className='flex flex-wrap justify-center gap-[3rem] pb-[2rem]'>
         {
            sign.map(sig=>{
                return (
                    <div key={sig.id}>
                    <SignatureCard signature={sig}/>
                    </div>
                )
            })
         }
       </div>
       </section>
    </div>
  )
}
