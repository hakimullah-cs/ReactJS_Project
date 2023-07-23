import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SellerCard from './SellerCard';



export default function SellerProducts({seller}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1440, min: 1024 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div className='container text-white mt-5'>
         <h3 className="title text-white text-2xl font-bold mb-[2rem] mt-5 pb-[20px]">BEST SELLERS</h3>
         <Carousel responsive={responsive} className="py-[2rem]">
          
        {
            seller.map(seller=>{
                return (
                    <div key={seller.id}>
                
                <SellerCard sell={seller}/> 
                
         </div>
                )
            })
        }
        
         </Carousel>
    </div>
  )
}
