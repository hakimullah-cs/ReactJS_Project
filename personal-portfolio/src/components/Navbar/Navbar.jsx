import React, { useState } from 'react';
import {Link} from 'react-scroll';
import logo from '../../assets/Navbar/logo.png';
import {data} from '../../Data/data';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import "./Navbar.css";
function Navbar() {
    const [nav,setnav]=useState(false);
    const sidenav=()=>{
        setnav(!nav);
    }
  return (
    <div className='h-[5.5rem] bg-bodyColor z-10 shadow-xl md:px-8 px-3 flex justify-between items-center fixed top-0 left-0 w-full'>
        <div className='flex items-center gap-4'>
        <div className='w-[4.5rem] h-[4.5rem] rounded-[50%] border-4 border-slate-600 overflow-hidden'>
        <img src={logo} alt='Logo-Here' className='w-full h-full '/>
        </div>
         <h1 className='text-designColor font-bold text-xl uppercase'>Hakim</h1>
        </div>
        <ul className={`menu-items flex gap-6  relative ${nav===true ? 'active' : ''}`}>
        {
            data.Navbar.map((nav)=>{
                return (
                    <li key={nav.id} className='font-semibold hover:text-designColor'>
                    <Link
                     to={nav.link}
                     activeClass="active"
                     spy={true} smooth={true}
                     offset={-70}
                     duration={500}>
                         {nav.title}
                         </Link>
                    </li>
                )
            })
        }

        <div className='lg:hidden block rounded-full p-3 w-[3rem] h-[3rem] absolute top-2 right-2 text-center  text-designColor '>
            <AiOutlineClose className='text-[1.5rem] font-bold' onClick={()=>setnav(false)}/>
            </div>
        </ul>

        <div className='flex md:gap-6 gap-3 items-center'>
            <a href='/' className='btn'>Hire Me</a>
            <div className='lg:hidden block rounded-full p-3 bg-[#212529] text-designColor shadow-2xl'>
            <AiOutlineMenu className='text-[2rem]' onClick={sidenav}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar