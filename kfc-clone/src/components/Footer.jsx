import React from 'react';
import logo from '../assests/logo.png';
import {AiFillYoutube,AiFillFacebook,AiOutlineInstagram,AiOutlineApple} from 'react-icons/ai';
import {BiLogoPlayStore} from 'react-icons/bi';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='w-full text-white bg-[#1C1816] py-[1rem]'>
         <div className='container footer-container'>
         <div className='top-con mb-5 flex items-center justify-center  gap-12'>
           <img src={logo} alt='logo'/>
          <div className='icons flex gap-5'>
          <AiFillYoutube className='text-3xl rounded-xl'/>
          <AiOutlineInstagram className='text-3xl'/>
          <AiFillFacebook className='text-3xl rounded-xl'/>
          </div>
          </div>

          <div className='center-con flex gap-[4rem] mb-5 md:justify-center justify-start flex-wrap'>
            <ul className=' p-3'>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>About Us</a>
              </li>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>Mitao Bhook</a>
              </li>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>Mitao Bhook-Scholarship</a>
              </li>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>Privacy Policy</a>
              </li>
              <li>
                <a href='/' className='text-xl font-semibold'>Careers</a>
              </li>
            </ul>
            <ul className=' p-3'>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>Contact Us</a>
              </li>
              <li className='mb-5'>
                <a href='/' className='text-xl font-semibold'>Store Locator</a>
              </li>
              <li>
                <a href='/' className='text-xl font-semibold'>Track Order</a>
              </li>
             
            </ul>
            <ul className=' p-3'>
              <li>
                <Link to={'/termandconditions'} className='text-xl font-semibold'>Terms & Conditions</Link>
              </li>
            
             
            </ul>

            <div>
              <div className='border p-2 rounded-md flex items-center gap-2 mb-5'>
               <AiOutlineApple className='text-[3rem]'/>
               <div className='text'>
                <div className='mb-[-0.5rem]'>Download on the</div>
                <h4 className='text-3xl'>App Store</h4>
               </div>
              </div>
              <div className='border p-2 rounded-md flex items-center gap-2 mb-5'>
               <BiLogoPlayStore className='text-[3rem]'/>
               <div className='text'>
                <div className='mb-[-0.5rem]'>Get it on</div>
                <h4 className='text-3xl'>Google Play</h4>
               </div>
              </div>
            </div>
          </div>

          <div className='bottom-con flex flex-wrap'>
            <p className='text-xl md:mb-0 mb-3 md:ml-[6rem] ml-0'>2023 KFC. All rights reserved</p>
            <div className='md:ms-auto ms-0'>
              <span className='text-[#EA002A] text-xl font-semibold'>Powered By:</span> <br></br>
              <a href='/' className='underline hover:text-[#EA002A]'>SimpleX Technology Solutions</a>
            </div>
          </div>
          
         </div>
    </div>
  )
}
