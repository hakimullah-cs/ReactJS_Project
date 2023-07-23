import React from 'react'

export default function List() {
  return (
    <div className='text-white mb-5'>
         <h3 className='text-xl mb-3'>WE COLLECT INFORMATION FROM AND ABOUT YOU</h3>
         <ul className='list-disc ml-[2rem]'>
            <li className='text-[18px] mb-2'>Contact information. For example, we might collect your name and street address. We might also collect your phone number or email addres</li>
            <li className='text-[18px] mb-2'>Payment and billing information. For example, we collect your credit card number and zip code when you buy one of our products. </li>
            <li className='text-[18px] mb-2'>Information you submit or post. If you post content, apply for a job, or respond to a survey, we will collect the information you provide to us. </li>
            <li className='text-[18px] mb-2'>Demographic information. We may collect information about our services you like or products you buy. We might collect this as part of a survey, for example. </li>
            <li className='text-[18px] mb-2'>Other information. If you use our website, we may collect information about your computer location or the browser you're using. We might look at what site you came from, or what site you visit when you leave us. </li>
         </ul>
    </div>
  )
}
