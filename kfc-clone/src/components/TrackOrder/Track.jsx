import React from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

export default function Track() {
  return (
    <section>
        <div className='container'>
          <div className='tract-con text-white w-full h-[90vh] p-2 flex flex-col items-center justify-center'>
            <div className='flex items-center gap-5 mb-[2rem]'>
            <BsFillArrowLeftCircleFill className='text-3xl text-[#EA002A]'/>
            <h3 className='text-3xl font-bold'>Track Order</h3>
            </div>

            <form className='max-w-[500px] w-[100%] bg-[#4D5256] p-3 rounded-md'>
              
                <div className='flex flex-col p-2 mb-3 bg-[#212529] rounded-md drop-shadow-lg'>
                    <label htmlFor='Mobile' className='font-semibold mb-3 '>Phone(03xx-xxxxxxx)</label>
                     <input type='text' placeholder='Enter No...' className='focus:outline-none text-white font-semibold p-2 bg-[transparent]'/>
                </div>
                <div className='flex flex-col p-2 mb-3 bg-[#212529] rounded-md drop-shadow-lg'>
                    <label htmlFor='Mobile' className='font-semibold mb-3 '>Phone(03xx-xxxxxxx)</label>
                     <input type='text' placeholder='Enter No...' className='focus:outline-none text-white font-semibold p-2 bg-[transparent]'/>
                </div>
                <div>
                    <button className='w-full bg-[#EA002A] py-2 font-bold rounded-md'>Track</button>
                </div>
                
              
            </form>

          </div>
        </div>
    </section>
  )
}
