import React from 'react';
import "./Projects.css";
import "./ProjectCard.css";
import {data} from '../../Data/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from './ProjectCard';


function Projects() {


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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
 
  return (
    
    <section className=' w-full  py-5' id='projects'>
        <div className='text-center mb-[3rem]'>
            <p className='uppercase text-designColor'>visit My Portfolio and keep your feedback</p>
            <h2 className='text-[3rem] text-white font-bold'>My Projects</h2>
        </div>
      
<Carousel responsive={responsive} className='mb-5 pb-5'>
     {
      data.Projects.map((ele)=>{
        return (
          <div key={ele.id}>
            <ProjectCard prop={ele}/>
          </div>
        )
      })
     }
   </Carousel>
    </section>
  )
}

export default Projects