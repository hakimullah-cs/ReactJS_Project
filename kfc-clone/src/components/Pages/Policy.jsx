import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import List from '../Policy/List';

export default function Policy() {
  return (
    <>
        <Navbar/>
        <div className='container '>
            <div className=' mt-[2rem]  mb-5 top-content max-w-[500px] w-full m-auto text-white'>
                <h2 className='text-center text-3xl font-bold mb-3'>Privacy Policy </h2>
                 <p className='text-center'>KFC CORPORATION PRIVACY POLICY — YOUR PRIVACY RIGHTS <br></br>EFFECTIVE DATE: JUNE 9, 2014</p>
            </div>

            <div className='text-white mb-5'>
                <h3 className='text-xl mb-3'>THIS PRIVACY POLICY APPLIES TO THE SITES</h3>
                <p className='text-[18px]'>This Policy describes how we treat personal information both online and offline. This includes on our websites. It also includes in phone or email interactions you have with u</p>
            </div>
            
            <List/>
            <List/>
            <List/>
            <List/>

            
        </div>
        <Footer/>
    </>
  )
}
