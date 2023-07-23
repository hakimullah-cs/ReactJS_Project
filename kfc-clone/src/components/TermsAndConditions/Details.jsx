import React from 'react'

export default function Details({info}) {
  return (
    <div className='p-3 text-white mb-5'>
            <h4 className='font-bold mb-2'>{info.heading}</h4>
            <p className='text-justify'>{info.para}</p>
        </div>
  )
}
