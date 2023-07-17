import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./CategoryCard";
import './Categories.css';
import {Link} from 'react-router-dom';





export default function Categories({infos}) {
  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  }
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
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
    <div className="container mt-5  mb-5">
    <h3 className="title text-white text-2xl font-bold mb-[2rem] mt-5 pb-[20px]">EXPLORE MENU</h3>
      <Carousel responsive={responsive} className="py-[2rem]">
        
      {
        infos.map(info=>{
          let slug=convertToSlug(info.title)
          return (
          <div key={info.id}>
           
           
          <Link to={`/menu/${slug}`}><CategoryCard card={info}/></Link> 
           
             
          </div>
          )
        })
      }
       
      </Carousel>
      
    </div>
  );
}
