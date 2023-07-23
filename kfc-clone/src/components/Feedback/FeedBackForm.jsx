import React from 'react'

export default function FeedBackForm() {
  return (
    <div className='text-white  p-3'>
     <form className=' p-2'>
     <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap mb-5'>
       <div className=' max-w-[550px] w-[100%] p-[10px] mb-3 rounded-md bg-[#212528]'>
        <h3 className='text-xl font-bold text-white mb-3'>Contact Details</h3>
        <div className='flex justify-between  flex-wrap'>
            <div className='bg-[#1C1816] px-2 py-1 rounded-md lg:max-w-[250px] w-[100%] mb-3'>
                <label htmlFor='name' className=' md-2 font-semibold uppercase '>Your Name*</label>
                <input type='text' className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'/>
            </div>
            <div className='bg-[#1C1816] px-2  py-1 rounded-md lg:max-w-[250px] w-[100%] mb-3'>
                <label htmlFor='name' className=' font-semibold uppercase'>Phone Number(03xx-xxxxxxx)*</label>
                <input type='text' className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'/>
            </div>
        </div>
        <div className='bg-[#1C1816] px-2  py-1 rounded-md  w-[100%] mb-3'>
                <label htmlFor='email' className=' font-semibold uppercase'>Email*</label>
                <input type='email' className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'/>
            </div>
        <div className='bg-[#1C1816] px-2  py-1 rounded-md  w-[100%] mb-3'>
                <label htmlFor='number' className=' font-semibold uppercase'>Order Id*</label>
                <input type='number' className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'/>
            </div>
        <div className='bg-[#1C1816] px-2  py-1 rounded-md  w-[100%] mb-3'>
                <label htmlFor='number' className=' font-semibold uppercase'>Order Id*</label>
                <select className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'>
                    <option value={''} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'></option>
                    <option value={'Dine in'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Dine In</option>
                    <option value={'Take Away'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Take Away</option>
                    <option value={'Delivery'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Delivery</option>
                    <option value={'Pickup'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Pickup</option>
                    <option value={'Drive Thru'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Drive Thru</option>
                </select>
            </div>
       </div>
       <div className='max-w-[550px] w-[100%] p-[10px] mb-3 bg-[#212528] rounded-md'>
       <h3 className='text-xl font-bold text-white mb-3'>About Your Visit</h3>
        <div className='flex justify-between  flex-wrap'>
            <div className='bg-[#1C1816] px-2 py-1 rounded-md lg:max-w-[250px] w-[100%] mb-3'>
                <label htmlFor='name' className=' md-2 font-semibold uppercase '>Select Store*</label>
                <select className='w-full bg-[transparent] p-2  focus:outline-none font-semibold'>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                    <option value={'KFC Test Store'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>KFC Test Store</option>
                </select>
            </div>
            <div className='bg-[#1C1816] px-2  py-1 rounded-md lg:max-w-[250px] w-[100%] mb-3'>
                <label htmlFor='name' className=' font-semibold uppercase'>Date*</label>
                <input type='date' className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'/>
            </div>
            
        </div>
        <div className='bg-[#1C1816] px-2  py-1 rounded-md  w-[100%] mb-3'>
                <label htmlFor='number' className=' font-semibold uppercase'>FeedBack Type*</label>
                <select className='w-full bg-[transparent] p-2 border-b-[1px] focus:outline-none font-semibold'>
                    <option value={''} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'></option>
                    <option value={'Comments'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Comments</option>
                    <option value={'Suggestions'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Suggestions</option>
                    <option value={'Questions'} className='w-full bg-[black] p-2 border-b-[1px] focus:outline-none font-semibold'>Questions</option>

                </select>
            </div>
        <div className='bg-[#1C1816] rounded-md  w-[100%] mb-3'>
              <textarea cols={12} rows={6} className=' border rounded-md w-full bg-[transparent] p-2  focus:outline-none font-semibold'></textarea>
            </div>
            
       </div>
      
       </div>
       <div className='m-auto rounded-md overflow-hidden max-w-[150px] w-full'>
        <button type='submit' className='w-full bg-[#EA002A] text-center font-bold px-2 py-3'>SUBMIT</button>
       </div>
     </form>
    </div>
  )
}
