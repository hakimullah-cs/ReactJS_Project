import React from 'react';

function Contact() {
  return (
    <section className=' w-full min-h-[80vh]  mt-[5.5rem] pt-5 text-TextLight' id='contact'>
      <div>
      <div className='text-center mb-[3rem]'>
            <p className='uppercase text-designColor'>CONTACT</p>
            <h2 className='text-[3rem] text-white font-bold'>Get in Touch</h2>
        </div>
        <div className='text-center'>
          <div className='max-w-[600px] m-auto mb-[4rem]'>
            <p className='text-center font-semibold '>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
          </div>
            <a href=' https://wa.me/03088487568' className='btn border border-designColor color-white'>Say Hello</a>
        </div>
      </div>
    </section>
  )
}

export default Contact