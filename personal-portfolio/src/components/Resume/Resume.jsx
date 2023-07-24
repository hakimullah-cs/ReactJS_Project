import React from 'react';
import './Resume.css';
import EducationCard from './EducationCard';
import {data} from '../../Data/data';
import Skill from './Skill';

function Resume() {
  return (
    <section className=' w-full  py-5' id='resume'>
        <div className='text-center mb-[3rem]'>
            <p className='uppercase text-designColor'>2+ Years of Experience</p>
            <h2 className='text-[3rem] text-white font-bold'>My Resume</h2>
        </div>

        <div className=' p-3 flex md:justify-between justify-center lg:flex-nowrap flex-wrap'>
          <div className=' max-w-[550px] w-[100%] p-2'>
           <EducationCard
            title='BS in Computer Science'
            subtitle='Bacha Khan University Charsadda (2020-24)'
            result='3.76/4'
            des='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
           />
           <EducationCard
             title='Fsc in Pre-Engineering'
            subtitle='HIMS Degree College Peshawar (2017-19)'
            result='698/1100'
            des='I completed my Fsc in pre-Engineering from HIMS Degree College Peshawar in the year of 2019.'
           />
           <EducationCard
            title='Matriculation'
            subtitle='Pak Public high School Kuchyaan Peshawar (2015-17)'
            result='800/1100'
            des='I completed my Matriculation in Science from Pak Public high School Kuchyaan Peshawar in the year of 2017.'
           />
          </div>
          <div className='max-w-[600px] w-full p-2'>
            
            {
             data.Skills.map((ele)=>{
              return (
                <div key={ele.id}>
                <Skill prop={ele}/>
                </div>
              )
             })
            }
          </div>
        </div>
      
    </section>
  )
}

export default Resume