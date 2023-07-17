import React from 'react';
import logo from '../../assets/Navbar/logo.png';
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
  return (
    <section className=' w-full  mt-[5.5rem] text-TextLight' id='home'>
        <div className='flex md:gap-16 gap-10 items-center lg:flex-nowrap flex-wrap-reverse lg:justify-start justify-center'>
            <div className='w-[40rem]  sm:p-3 p-2 flex flex-col gap-1 text-white'>
                <h4 className='text-xl uppercase'>Welcome to my world</h4>
                <h2 className='sm:text-[3rem] text-[2.5rem] font-bold'>Hi, I'm <span className='text-designColor'>Hakim Ullah</span></h2>
                <h3 className='sm:text-[2.5rem] text-[2rem] font-semibold mb-3'>a <span>{<Typewriter
            words={['Frontend Developer.', 'Professional Coder.', 'UI Designer.']}
            loop
            cursor
            cursorStyle='|'
            cursorColor='#ff014f'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />}</span></h3>
                <p className='sm:font-semibold font-normal text-justify mb-[3rem]'>“Innovative FrontEnd Developer with 3 years experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, Bootstrap, JavaScript ReactJS.Plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop & Sketch.“</p>
        <div className='flex gap-4'>
            <a href='' className='btn mt-5'>Download CV</a>
            <a href='' className='btn mt-5'>message</a>
        </div>
            </div>
            <div className='w-[30rem] h-[570px]'>
                <img src={logo} alt='' className='w-full h-full'/>
            </div>
        </div>
    </section>
  )
}

export default Banner