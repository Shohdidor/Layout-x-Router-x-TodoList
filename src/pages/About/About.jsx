import React from 'react'
import "./App.css"
import Me from "/img/spider.jpg"

import 'animate.css';

function About() {
  return (
    <>
    <div className='Fon py-[5%] px-[5%] flex items-center'>
      <div>
        
      <h1 className='cursor-pointer text-gray-400 text-[250%] font-black'>
      <span className='hover:text-red-600 ease-in duration-100 '>
        H
        </span>
        <span className='hover:text-blue-600 ease-in duration-100 '>
        e
        </span>
        <span className='hover:text-red-600 ease-in duration-100 '>
        l
        </span>
        <span className='hover:text-blue-600 ease-in duration-100 '>
        l
        </span>
        <span className='pr-[1%] hover:text-red-600 ease-in duration-100 '>
        o 
        </span>

        <span className='hover:text-blue-600 ease-in duration-100 '>
        G
        </span>
        <span className=' hover:text-red-600 ease-in duration-100 '>
        u
        </span>
        <span className=' hover:text-blue-600 ease-in duration-100 '>
        y
        </span>
        <span className='pr-[1%] hover:text-red-600 ease-in duration-100 '>
        s 
        </span>
        <span className='hover:text-blue-600 ease-in duration-100 '>
        i
        </span>
        <span className='hover:text-red-600 ease-in duration-100 '>
        t
        </span>
        <span className='hover:text-blue-600 ease-in duration-100 '>
        '
        </span>
        <span className='pr-[1%] hover:text-red-600 ease-in duration-100 '>
        s
        </span>
        <span className='hover:text-blue-600 ease-in duration-100 '>
         m
        </span>
        <span className=' hover:text-red-600 ease-in duration-100 '>
         e 
        </span>
         <span className='ml-[1%] hover:text-blue-600 ease-in duration-200 '>
           Peter 
           <span className='pl-[1%] hover:text-red-600 ease-in duration-150'>
           Parker 
           </span>
          </span>
      </h1>
      <p className='animate__animated animate__zoomInDown text-white mt-[2%] w-[70%] leading-7 font-light text-[120%]'>
      I am Spider-Man - I am one of the most popular superheroes in the world
      <hr className='border-[1px] border-red-700 mt-[2%] mb-[2%] w-[40%]'/>

      I, Khojaev Shohdidor or as you call me Peter Parker, I became Spider-Man after I was bitten by a radioactive spider. He gained superhuman abilities such as super strength, agility, fast reflexes, and the ability to stick to vertical surfaces. 
      <hr className='border-[1px] border-blue-700 mt-[2%] mb-[2%] w-[40%]'/>
      I began to fight evil under the guise of Spider-Man, using my powers to protect the innocent and fight crime.
      </p>
      </div>
      <div className='w-[70%]'>
        <img src={Me} alt="error" className='rounded-[10px]' />
      </div>
    </div>
    </>
  )
}

export default About