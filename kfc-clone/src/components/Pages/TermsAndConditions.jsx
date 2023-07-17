import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Details from '../TermsAndConditions/Details';
import {data} from '../data/data';

export default function TermsAndConditions() {
  return (
    <>
        <Navbar/>
        <div className='container'>
        <h2 className='text-white text-center text-3xl font-bold mb-5 mt-[2rem]'>Terms & Conditions</h2>
        <p className='text-center text-white text-xl mb-5'>KFC TERMS OF USE</p>
        <p className=' text-white  mb-5 text-justify'>These Terms of Use ("Terms") govern your use the KFC Corporation ("KFC") Web sites on which they appear, and your use of the features therein. KFC may revise the information, services and the resources contained in this web site from time to time and we reserve the right to make such changes without obligation to notify past, current or prospective visitors.</p>
        
       
        {
            data['Terms&Conditions'].map(term=>{
                return (
                 <div key={term.id}>
                 <Details info={term}/>
                 </div>
                )
            })
        }
        </div>
        <Footer/>
    </>
  )
}
