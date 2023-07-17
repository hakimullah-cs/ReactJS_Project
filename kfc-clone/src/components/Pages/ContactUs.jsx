import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactCard from '../Contact/ContactCard';
import {data} from '../data/data';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';


export default function ContactUs() {
  return (
    <>
        <Navbar/>
        <div className='container'>
          <h3 className='text-white text-center mt-[3rem] text-3xl font-bold mb-5'>Contact Us</h3>
          <div className='mb-5 p-3 flex md:justify-between justify-center flex-wrap '>
            {
             data.contact.map(contact=>{
                return(
                   <div key={contact.id} className='mb-5'>
                   <ContactCard con={contact}/>
                   </div>
                )
             })
           
            }
          </div>
          <div className=' mb-5 p-3 flex justify-between flex-wrap text-white'>
            <div className=' max-w-[550px] w-full p-2 rounded-md bg-[#1C1816] md:mb-0 mb-3'>
            <h4 className='flex items-center gap-3 ml-5 text-xl font-bold'><BsFillTelephoneFill className='text-red-600'/> Help Line</h4>
            <p className='ml-5'>UAN: 111 532 532</p>
            </div>
            <div className=' max-w-[550px] w-full p-2 rounded-md bg-[#1C1816]'>
            <h4 className='flex items-center gap-3 ml-5 text-xl font-bold'><GrMail className='text-red-600'/> Complaints Email</h4>
            <p className='ml-5'>customercare@kfcpakistan.com</p>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
