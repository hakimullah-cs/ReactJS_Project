import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import heroone from '../../src/assests/h1.jpg';
import herotwo from '../../src/assests/h2.jpg';
// import Reorder from './Reorder';

export default function Home() {
  return (
   <main>
     <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <img src={heroone} alt='images'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src={herotwo} alt='images'/>
    </SwiperSlide>
    
   
    
      </Swiper>
      {/* <Reorder/> */}
   </main>
  )
}
