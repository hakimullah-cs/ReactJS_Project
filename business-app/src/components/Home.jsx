import React from 'react';
import '../../src/components/Home.css';
import bannerimg from '../../src/assets/banner/banner-img.jpg';
import {SiMicrostrategy,SiGoogleanalytics} from 'react-icons/si';

export default function Home() {
  return (
   <>
    <section className='banner mt-[4.6rem]' id='home'>
    <div className='container banner-container flex items-center md:justify-between justify-center flex-wrap'>
        <div className='left-con w-[33rem] p-3 md:mb-0 mb-5'>
            <h3 className='title text-[2.5rem] text-lime-100 font-light mb-2'>
                WE PROMOTE YOUR <span className='text-white font-bold'>BUSINESS</span>
            </h3>
            <p className='banner-para text-lime-100 mb-7'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className='btn'>
            <a className=' inline-block py-3 font-bold bg-[#e21056] px-6 rounded-3xl hover:bg-white hover:text-[#e21056] w-[150px] text-center' href="/">Get Started</a>
            </div>
        </div>
        <div className='right-con w-[33rem] borde p-3 relative'>
            <div className='image'>
            <img className='w-[100%]' src={bannerimg} alt='Banner-img Here'/>
            </div>
            <div className='first  bg-black py-3 px-5  absolute rounded left-[-3rem] top-[4rem] flex items-center justify-between gap-2 font-semibold'>
            <SiMicrostrategy className='text-[blue]'/>
               Strategy
            </div>
            <div className='second  bg-black py-3 px-5  absolute rounded bottom-0 right-7 flex items-center justify-between gap-2 font-semibold'>
            <SiGoogleanalytics className='text-[green]'/>
               Business Analysis
            </div>



        </div>
    </div>
    </section>
   </>
  )
}
