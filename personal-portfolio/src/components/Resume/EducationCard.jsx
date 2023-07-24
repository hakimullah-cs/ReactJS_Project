import React from 'react'

function EducationCard({title,subtitle,result,des}) {
  return (
    <div className='w-full h-auto  rounded bg-[#333] p-5 hover:text-white mb-3'>
    <div className='flex justify-between mb-5'>
     <div>
       <h3 className='text-3xl mb-2 font-semibold'>{title}</h3>
       <h4 className='font-semibold'>{subtitle}</h4>
     </div>
     <div>
       <p className='bg-designColor text-white p-2 rounded-md font-semibold'>{result}</p>
     </div>
    </div>
    <p className='font-semibold'>{des}</p>
   </div>
  )
}

export default EducationCard