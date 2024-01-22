import React from 'react'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Card( {h1 , h2 }) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
    <div  data-aos="fade-right"
     data-aos-offset="1000"
     data-aos-easing="ease-in-sine">
        <h1 className='font-medium uppercase text-[140%] w-[70%] pl-[3%]'>
            {h1}
        </h1>
        <div className='flex items-center'>
        <select className='text-[#28553F] bg-transparent'> 
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select>
        <hr className='w-[60%] border-[#28553F] ml-[1%] border-[2px]' />
        <h1 className='text-[150%] text-white bg-[#28553F] rounded-[500px] py-[1%] px-[2%]'>
            {h2}
        </h1>
        </div>
    </div>
    </>
  )
}
export default Card


function Card2 ( {h1 , h2 }) {
  return (
    <>
    <div  data-aos="fade-left"
     data-aos-offset="1000"
     data-aos-easing="ease-in-sine">
        <h1 className='text-end font-medium uppercase text-[140%] w-[70%] pl-[3%]'>
            {h1}
        </h1>
        <div className='flex items-center'>
        <h1 className='text-[150%] text-white bg-[#28553F] rounded-[500px] py-[1%] px-[2%]'>
            {h2}
        </h1>
        <hr className='w-[60%] border-[#28553F] border-[2px]' />
        <select className='text-[#28553F] bg-transparent'> 
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select>
        </div>
    </div>
    </>
  )
}

export { Card2 }