import React, { useState} from "react";
import "../../src/components/Navbar.css";
import { HiMenuAlt1,HiShoppingCart,HiOutlineLocationMarker,HiOutlineSearch,HiOutlineMenu } from "react-icons/hi";
import { AiFillCloseSquare } from "react-icons/ai";
import logo from '../../src/assests/logo.png';
import delicon from '../../src/assests/delivery-icon.png';
import pickup from '../../src/assests/pickup.png'
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
            <img src={logo} alt="Logo-Here" />
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
            <a href="/" className="flex items-center gap-2 text-xl font-semibold">
            <HiOutlineLocationMarker className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Store Location
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold">
            <HiOutlineSearch className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Track Order
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold ">
            <HiOutlineMenu className="bg-[crimson] text-white p-1 text-3xl rounded "/>
            Explore Menu
            </a>
          </li>
          <hr className="mb-6"></hr>
          <li className="mb-3">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          About Us
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Feedback
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Terms & Conditions
            </a>
          </li>
         
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl  hover:text-[crimson]">
          Privacy Policy
            </a>
          </li>
          <li className="mb-5">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[crimson]">
          Contact Us
            </a>
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
        <div className="right-side flex items-center gap-5 hover:text-[crimson]">
        <HiShoppingCart className="text-[2rem]"/>
        <a href="/" className="text-white  bg-[crimson]  px-3 py-3 font-bold rounded-md">
                   LOGIN
                </a>
        </div>
      </div>
    </nav>
  );
}
