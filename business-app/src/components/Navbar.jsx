import React, {useState} from 'react';
import Logo from '../../src/assets/logo/logo.png';
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  //Mobile Menu State
  const [sidenav,setSidenav]=useState(false);

  // Sidenavbar
  const sidenavShow=()=>{
    setSidenav(!sidenav);
  }


  return (
  <header className='header-site fixed top-0 right-0 left-0'>
    <div className='container'>
      <nav className='navbar flex justify-between items-center md:mt-4 mt-3 '>
        <div className='logo'>
        <a href="/">
          <img className='max-w-[80%]' src={Logo} alt=''/>
        </a>
        </div>

        <div className='navbar-toggler'>
          <AiOutlineMenu onClick={sidenavShow} className='text-3xl text-white md:hidden block hover:text-[#e21056]' />
        </div>

        <div className={`menu-items ${sidenav === true ? 'active' : ''}`}>
          <ul className='flex'>
            <li className='mr-8'>
            <Link className="text-xl font-semibold hover:text-[#e21056] focus:text-[#e21056]" activeClass="active" to="home" spy={true} smooth={true}>
              Home
             </Link>
             </li>
             <li className='mr-8'>
            <Link className="text-xl font-semibold hover:text-[#e21056] focus:text-[#e21056]" activeClass="active" to="about" spy={true} smooth={true}>
              About Us
             </Link>
             </li>
             <li className='mr-8'>
            <Link className="text-xl font-semibold hover:text-[#e21056] focus:text-[#e21056]" activeClass="active" to="services" spy={true} smooth={true}>
              Services
             </Link>
             </li>
             <li className='mr-8'>
            <Link className="text-xl font-semibold hover:text-[#e21056] focus:text-[#e21056]" activeClass="active" to="blog" spy={true} smooth={true}>
              Blog
             </Link>
             </li>
             <li className='mr-8'>
            <Link className="text-xl font-semibold hover:text-[#e21056] focus:text-[#e21056]" activeClass="active" to="contact" spy={true} smooth={true}>
              Contact Us
             </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  )
}
