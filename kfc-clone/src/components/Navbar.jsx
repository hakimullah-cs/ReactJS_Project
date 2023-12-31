import React, { useState} from "react";
import "../../src/components/Navbar.css";
import { HiMenuAlt1,HiShoppingCart,HiOutlineLocationMarker,HiOutlineSearch,HiOutlineMenu } from "react-icons/hi";
import { AiFillCloseSquare } from "react-icons/ai";
import logo from '../../src/assests/logo.png';
import delicon from '../../src/assests/delivery-icon.png';
import pickup from '../../src/assests/pickup.png';
import {Link} from 'react-router-dom';
export default function Navbar() {
  // window.addEventListener("click",()=>{
  //   document.querySelector(".menu-items").classList.remove("active");
  // });
  const [sidenav,setsidenav]=useState(false);
  const showSidenav=()=>{
    setsidenav(!sidenav);
  }

  const closesidenav=()=>{
    setsidenav(false);
  }
  
  return (
    <nav className="navbar bg-black text-white w-full py-5">
      <div className="container  flex items-center justify-between ">
        <div className="left-side flex gap-2 items-center">
            <HiMenuAlt1 className="text-[3rem] text-white hover:text-[crimson]" onClick={showSidenav}/>
            <Link to={'/'}><img src={logo} alt="Logo-Here" /></Link>
            <div className="md:flex gap-3 hidden">
                <a href="/" className="text-white border-2 border-[crimson] flex px-2 py-1 font-semibold mr-3 rounded-md items-center gap-2">
                    <img src={delicon} alt="del-icon" className="w-[2rem]" />
                    <span>DELIVERY</span>
                </a>
                <a href="/" className="text-white  flex px-2 py-1 font-semibold mr-3 rounded-md items-center gap-2 bg-[#1c1816]">
                    <img src={pickup} alt="del-icon" className="w-[2rem] h=[1.5rem]" />
                    <span>PICKUP</span>
                </a>
            </div>
        </div>
        <ul className="navbar-list">
        <div className={`menu-items ${sidenav===true ? 'active':''}`}>
        <AiFillCloseSquare className="fixed top-0 right-0 text-2xl bg-[crimson] text-white" onClick={closesidenav}/>
        <hr className="mb-3"></hr>
          <li className="mb-4">
            <Link to={'/stotelocations'} className="flex items-center gap-2 text-xl font-semibold">
            <HiOutlineLocationMarker className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Store Location
            </Link>
          </li>
          <li className="mb-4">
            <Link to={'/tractorder'} href="/" className="flex items-center gap-2 text-xl font-semibold">
            <HiOutlineSearch className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Track Order
            </Link>
          </li>
          <li className="mb-5">
            <Link to={'/menu'} className="flex items-center gap-2 text-xl font-semibold ">
            <HiOutlineMenu className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Explore Menu
            </Link>
          </li>
          <hr className="mb-6"></hr>
          <li className="mb-3">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          About Us
            </a>
          </li>
          <li className="mb-5">
            <Link to={'/feedback'} className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Feedback
            </Link>
          </li>
          <li className="mb-5">
            <Link to={'/termandconditions'} className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Terms & Conditions
            </Link>
          </li>
         
          <li className="mb-5">
            <Link to={'/policy'} className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Privacy Policy
            </Link>
          </li>
          <li className="mb-5">
            <Link to={'/contact'} className="flex items-center gap-2 text-xl font-semibold hover:text-[crimson]">
          Contact Us
            </Link>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[crimson]">
          Mitao Bhook
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Mitao Bhook- Scholarship
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Careers
            </a>
          </li>
        </div>
        </ul>
        <div className="right-side flex items-center gap-5 ">
        <HiShoppingCart className="text-[2rem] hover:text-[crimson]"/>
        <Link to={'/login'} className="text-white  bg-[crimson]  px-3 py-3 font-bold rounded-md">
                   LOGIN
                </Link>
        </div>
      </div>
    </nav>
  );
}
