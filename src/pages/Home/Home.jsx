import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./App.css"
import Card from '../../components/Card'
import { Card2 } from '../../components/Card'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


// Swipper 

import { useRef , useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




// IMG 
import Photo1 from "/img/Photo1.png"
import Photo2 from "/img/Photo2.png"
import Banner4 from "/img/banner4.png"
import Banner1 from "/img/banner1.png"
import Banner3 from "/img/banner3.png"
import Banner2 from "/img/banner2.png"

import Art1 from "/img/art1.jpg"
import Art2 from "/img/art2.jpg"
import Art3 from "/img/art3.jpg"
import Art4 from "/img/art4.jpg"
import Art5 from "/img/art5.jpg"


// MUI 
import Button from '@mui/material/Button';
import Arrow1 from '@mui/icons-material/ArrowBackIosNew';
import Arrow2 from '@mui/icons-material/ArrowForwardIos';



function Home() {
  return (
    <>
    <div className='Fon flex items-center py-[2%]'>
      <div className='animate__animated animate__slideInDown pl-[10%] absolute bg-black py-[5%] px-[4%] w-[50%]'>
        <p className='text-gray-400 font-extralight uppercase'>
        камень с душой
        </p>
        <h1 className='text-white font-light text-[300%] flex mb-[4%] uppercase flex-wrap'>
        Каменные изделия
        <span className='text-[#28553F] mt-[-2%] uppercase'>
        для вашего дома
        </span>
        </h1>
        <div className='flex items-center gap-[1.4%]'>
        <Button variant='contained' sx={{padding:"3%", paddingX:"5%", background:"#28553F", color:"white" , borderRadius:"0"}}> Рассчитать стоимость</Button>
        <Button variant='contained' sx={{padding:"3%", paddingX:"5%", background:"#141414", color:"white" ,borderRadius:"0"}}> Рассчитать стоимость</Button>
        </div>
      </div>
      <div className='ml-[30%]'>
        <img src={Photo1} alt="error" />
      </div>
    </div>
    <div className='py-[4%]'>
      <hr className='border-[#28553F] border-[1px] w-[10%] m-auto'/>

      <h1 className='ml-[35%] text-center text-[240%] uppercase flex flex-wrap w-[40%]'>
      наши преимущества - 
      <span className='text-[#28553F] ml-[10%]'>
         ваш результат
      </span>
      </h1>
    </div>
    <div className='flex'>
      <div className='mt-[8%] ml-[5%]'>
        <Card h1={"Новейшее итальянское оборудование Donatoni"} h2={"01"}/>
        <br />
        <br />
        <Card h1={"Собственное произодство"} h2={"02"}/>
        <br /><br />
        <Card h1={"Широкий ассортимент"} h2={"03"}/>
      </div>
      <div className='ml-[-7%]'>
        <img src={Photo2} alt="error" />
      </div>
      <div className='w-[38%] mt-[10%]'>
        <Card2 h1={"Изделия из наличия"} h2={"04"} />
        <br /><br />
        <Card2 h1={"Работаем под ключ"} h2={"05"} />
        <br /><br />
        <Card2 h1={"Консультации по уходу за иделием из камня"} h2={"06"} />
      </div>
    </div>

    {/* Fake Card ↓ */}

    <div className='ml-[4%]'>
      <hr className='w-[10%] ml-[0.3%] border-[1px] border-[#28553F]'/>
      <h1 className='uppercase flex flex-wrap w-[28%] mb-[2%] text-[210%]'>
        Изделия ИЗ 
        <span className='text-[#28553F]'>
        натурального камня
        </span>
      </h1>
    </div> 
    
    
<div className='w-[50%] m-auto mb-[2%]'>
  
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
      <img src={Banner4} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
      <img src={Banner1} alt="error" />
        </SwiperSlide>
        <SwiperSlide className='mt-[6%]'>
      <img src={Banner3} alt="error" />
        </SwiperSlide>
        <SwiperSlide className='mt-[6%]'>
      <img src={Banner2} alt="error" />
        </SwiperSlide>
      </Swiper>
</div>

{/* Fake Card ↑  */}
<div className='ml-[4%]'>
      <hr className='w-[10%] ml-[0.3%] border-[1px] border-[#28553F]'/>
      <h1 className='uppercase flex flex-wrap w-[25%] mb-[2%] text-[210%]'>
        Идеи для
        <span className='text-[#28553F]'>
        вдохновения
        </span>
      </h1>
    </div> 
    
    
<div className='flex flex-wrap m-auto mb-[2%] items-center'>
  <div>
    <img src={Art1} alt="error" />
  </div>
  <div className='w-[30%] flex mt-[-25%]'>
    <img src={Art2} alt="error" />
    <img src={Art3} alt="error" />
  </div>
  <div className='w-[25%] ml-[38.8%] mt-[-26.5%] flex'>
    <img src={Art4} alt="error" />
    <img src={Art5} alt="error" />
  </div>
</div>


    </>
  )
}

export default Home