import React, { useState } from 'react';
import Navbar from '../Navbar';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import PlaceCard from '../Storelocations/PlaceCard';
import {data} from '../data/data';
import map from '../../assests/GoogleMapTA.webp';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

export default function StoreLocations() {
    const [searchterm,setsearchterm]=useState("");
  return (
    <>
     <Navbar/>
     <div className='w-full  flex items-center p-3'>
        <div className='container  bg-[#212528] rounded-md'>
        <div className='flex items-center text-white text-3xl gap-3 font-bold mb-5 ml-2'>
        <Link to={'/'}><BsFillArrowLeftCircleFill className='text-[#EA002A]'/></Link>
        <h3>Find a Nearby KFC</h3>
        </div>
        <div className='flex items-center justify-center md:flex-nowrap flex-wrap'>
           <div className='text-white md:w-[33rem] w-[100%]  p-3'>
                <div className='bg-[#6666] p-2 rounded-md mb-'>
                    <input type='text' placeholder='Search Places...' onChange={(event)=>{
                        setsearchterm(event.target.value)
                    }} className='w-[100%] focus:outline-none py-3 px-2 bg-black rounded-md'/>
                </div>
                <div className='w-full  h-[55vh] p-2 bg-[#6666] overflow-y-auto'>
                    {
                       data['locations'].filter((val)=>{
                        if(searchterm===""){
                            return val;
                        }
                        else if(val.title.toLowerCase().includes(searchterm.toLocaleLowerCase())){
                            return val;
                        }
                       })
                       .map((val)=>{
                        return (
                           <div key={val.id}>
                            <PlaceCard ala={val}/>
                           </div>
                        )
                       })
                    }
                </div>
           </div>
           <div className='text-white md:w-[40rem] h-[25rem] w-[100%] border'>
            <img src={map} alt='googlemap' className='w-[100%] h-[100%]'/>
           </div>
           </div>
        </div>
     </div>

     <Footer/>
    </>
  )
}
