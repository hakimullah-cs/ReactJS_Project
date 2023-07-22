import React from 'react';
import {FiGlobe} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';


function ProjectCard({prop}) {
  return (
    <div className='project-card lg:w-[350px] sm:w-[400px] w-full h-full p-3'>
             <div className='image w-full h-[200px] rounded-md overflow-hidden mb-5' style={{
              background:`URL(${prop.image})`,
              backgroundSize:'cover',
              backgroundRepeat:'no-repeat',
              backgroundPosition:'top',
             }}>
                 {/* <img src={prop.image} alt='project-here' className='w-full h-full'/> */}
             </div>
             <div className='mb-5'>
                <h3 className='text-xl text-white font-bold mb-3'>{prop.title}</h3>
                <p className='text-left text-semibold mb-3'>{prop.description}</p>
             </div>
             <div className='flex gap-4 items-center'>
               <a href={prop.live} className='icon-con'><FiGlobe className='text-2xl hover:text-designColor'/></a>
               <a href={prop.github} className='icon-con'><AiFillGithub className='text-2xl hover:text-designColor'/></a>
             </div>
            </div>
  )
}

export default ProjectCard