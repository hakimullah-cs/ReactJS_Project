import React from 'react';
import './SellerCard.css';


export default function SellerCard({sell}) {
  return (
    <div className='sellercard bg-[#1C1816] rounded-sm px-3 text-center text-white  max-w-[280px] min-w-[300px]'>
   
         <div className='top-icons mb-5'>
            <span></span>
            <span></span>
            <span></span>
         </div>
         
         <h3 className='Sellertitle text-left text-2xl font-bold'>{sell.title}</h3>
          <p className='text-center p-1 rounded-sm ms-auto bg-[#EA002A] text-white w-[4rem]'>{sell.price}</p>
        
       <div className='photo'>
        <img src={sell.image} alt='Seller-product'/>
       </div>
    </div>
  )
}
