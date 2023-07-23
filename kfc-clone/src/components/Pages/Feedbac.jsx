import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FeedBackForm from '../Feedback/FeedBackForm'

export default function Feedbac() {
  return (
   <>
    <Navbar/>
    <section className='mt-5'>
        <div className='container'>
              {/* Top Content Goes Here */}
            <div className='md:max-w-[630px] w-[100%] m-auto mb-[3rem] text-center text-white'>
                <h2 className='text-2xl font-bold mb-1'>Have Some Feedback To Share?</h2>
                <p className='text-[red] text-xl mb-3'>Well, you’ve come to the right place!</p>
                <p className='font-semibold'>Fill in the sections below and we'll be in touch soon, or if you want to contact a specific store, visit our locations page for store contact details. * indicates a required answer</p>
            </div>
                 {/* Top Content Goes Ends */}  
            
        {/* Forms Container Goes Here */}
        <FeedBackForm/>
        {/* Forms Container Goes Ends */}
        </div>
    </section>
    <Footer/>
   </>
  )
}
