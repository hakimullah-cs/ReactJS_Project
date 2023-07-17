import React from 'react';
import ProductCard from './ProductCard';

export default function Products({prod,head}) {
  return (
    <>
      <section id={head} className='mb-[4rem] mt-[7rem]'>
        <h2 className='container title text-3xl font-bold mb-5  text-white uppercase'>{head}</h2>
        <div className='container   mt-5 flex md:justify-start justify-center gap-[3rem] flex-wrap'>
          {
            prod.map(product=>{
                return (
                   <div key={product.id}>
                   <ProductCard pro={product}/>
                   </div>
                )
            })
          }

          
        </div>
      </section>  
    </>
  )
}
