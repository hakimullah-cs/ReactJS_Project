import React from 'react';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';
import LoginImage from '../../assests/login-animation.857cb4f842a7a27eed63.gif';
import Footer from '../Footer';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

export default function Login() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <div className='relative login-con pb-[3rem] bg-[#212529] rounded-md max-w-[900px] w-[100%] my-[5rem] mx-auto p-3 flex justify-around items-center flex-wrap'>
                <Link to={'/'}> <BsFillArrowLeftCircleFill className='text-[#ea002a] text-2xl absolute top-5 left-5'/></Link>
                <div className='image  w-[300px]'>
                    <img src={LoginImage} alt='loginimage'/>
                </div>
                <form className='w-[400px] p-3'>
                    <h2 className='text-white text-3xl font-bold mb-3'>WELCOME!</h2>
                    <div className=' mb-5 flex flex-col p-3 bg-[#36454F] text-white rounded-md'>
                        <label className='mb-3'>Phone Number (03xx-xxxxxxx)</label>
                        <input className='bg-[transparent] px-2 py-2 outline-none font-semibold' required type='text' placeholder='Enter P.Number...'/>
                    </div>
                    <div className='mb-3'>
                        <Link to={'/'} className='bg-[#ea002a] inline-block px-3 py-2 text-white uppercase font-semibold text-center rounded-sm w-[100%]'>Login</Link>
                    </div>
                    <div className='mb-3'>
                        <Link to={'/'} className='bg-[#ea002a] inline-block px-3 py-2 text-white uppercase font-semibold text-center rounded-sm w-[100%]'>Login with google</Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}
