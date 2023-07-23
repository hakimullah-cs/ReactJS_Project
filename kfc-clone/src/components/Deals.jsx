import React from "react";
import DealsCard from "./DealsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Deals({topdeals}) {
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
    <div className="container mt-5">
      <h3 className="title text-white font-bold text-2xl mb-5">TOP DEALS</h3>
      <Carousel responsive={responsive} className="py-[2rem]">
       
        {
            topdeals.map(deal=>{
                return (
                    <div key={deal.id}>
            <DealsCard deals={deal} />
        </div>
                )
            })
        }
      </Carousel>
      
    </div>
  );
}
