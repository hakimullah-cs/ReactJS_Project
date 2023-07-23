import React from 'react';
import FooterLogo from '../../assets/Footer/footerLogo.png';
import {AiFillGithub,AiOutlineGooglePlus,AiOutlineInstagram,AiFillLinkedin} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
    <footer className=' w-full min-h-[50vh] bg-blac  pt-5'>
        <div className='flex flex-col gap-4 py-5 sm:px-0 px-2 items-center mt-5'>
            <img src={FooterLogo} alt='FooterLogo'/>
            <p className='max-w-[500px] text-center font-semibold text-white'>Creative and self-starting Front-End Developer with 5 years experience building stable eCommerce websites and apps in fast-paced, collaborative environments</p>
            <div className='flex gap-5 mb-[1.5rem]'>
                <a href='https://github.com/hakimullah-cs' target='_blank' className='icon-con'><AiFillGithub className='text-2xl'/></a>
                <a href='https://twitter.com/Hakimul27928765' target='_blank' className='icon-con'><BsTwitter className='text-2xl'/></a>
                <a href='mailto:hakimullah913@gmail.com' className='icon-con'><AiOutlineGooglePlus className='text-2xl'/></a>
                <a href='https://www.instagram.com/hakimullah851/' target='_blank' className='icon-con'><AiOutlineInstagram className='text-2xl'/></a>
                <a href='https://www.linkedin.com/in/hakim-ullah-78445225b/' target='_blank' className='icon-con'><AiFillLinkedin className='text-2xl'/></a>
            </div>
            <div className='text-xl text-white font-semibold'>
                Developed & Designed by <span className='text-designColor font-bold'>Hakim Ullah</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer