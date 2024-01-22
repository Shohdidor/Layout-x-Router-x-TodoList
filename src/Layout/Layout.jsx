import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "/img/Logo.png"
import "./App.css"

// MUI 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// IMG 
import Fon2 from "/img/Fon 2.png"
import Social from "/img/socilas.png"

function Layout() {
    let { pathname } = useLocation ()
  return (
    <div>
        <div className='bg-[#040404] p-[3%] flex items-center text-white'>
            <img src={Logo} alt="error" className='w-[20%]' />
        <ul className='flex ml-[15%] w-[40%] justify-around font-extralight text-[130%]'>
            <Link to="/">
            <li style={{transition:"0.5s", textDecoration:pathname=="/" ? "underline" : "none",color:pathname =="/" ? "red": "white"}}>
                Home
            </li>
            </Link>
            <Link to="/about">
            <li style={{transition:"0.5s", textDecoration:pathname=="/about" ? "underline" : "none",color:pathname =="/about" ? "red" : "white"}}>
                About
            </li>
            </Link>
            <Link to="/contact">
            <li style={{transition:"0.5s", textDecoration:pathname=="/contact" ? "underline" : "none",color:pathname =="/contact" ? "red" : "white"}}>
                RTK
            </li>
            </Link>
            <li>
            <Button sx={{color:"white" , border:"1px solid white"}} variant="outlined">Sign In</Button>
            </li>
            <li>
            <Button sx={{color:"white" , border:"1px solid white"}} variant="outlined">Sign Up</Button>
            </li>
        </ul>
        </div>


        <div>
            <Outlet />
        </div>

        <div>
            
        <div className='FonEnd flex items-center'>
            <div>
                <img src={Fon2} alt="error" />
            </div>
            <div className='ml-[-88%]'>
                <h1 className='text-white text-[200%] mb-[1%]'>
                Остались вопросы? <br />
                свяжитесь с нами, мы вам поможем!
                </h1>
                <p className='text-white font-extralight mb-[4%]'>
                Заполните форму и мы свяжемся с Вами в ближайшее время  
                </p>
                <div className='flex justify-around mb-[4%] gap-[2%]'>
                <Button sx={{color:"white" , paddingX:"6%", borderRadius:"0px", border:"1px solid white"}} variant="outlined">Ваше имя</Button>
                <Button sx={{color:"white" , paddingX:"6%", borderRadius:"0px", border:"1px solid white"}} variant="outlined">Ваш телефон</Button>
                <Button sx={{color:"black" , paddingX:"6%", borderRadius:"0px", background:"white"}} variant="contained">Отправить</Button>
                </div>
                <div className='flex gap-[1%]'>
                    <input type="checkbox" />
                    <p className='text-white'>
                    Согласен на обработку персональных данных
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className='bg-[#040404] py-[5%]'>
            <div className='flex justify-evenly'>
                
            <div>
                <img src={Logo} alt="error" />
                <p className='ml-[30%] mt-[-8%] text-white font-extralight text-[120%]'>Камень с Душой</p>
            </div>
            <div className='text-white'>
                <h1 className='text-[140%] mb-[10%]'>
                МЕНЮ
                </h1>
                <ul className='font-extralight'>
                    <li className='mb-[5%] text-gray-400'>Delivery & returns</li>
                    <li className='mb-[5%] text-gray-400'>FAQ</li>
                    <li className='mb-[5%] text-gray-400'>Contacts</li>
                    <li className='mb-[5%] text-gray-400'>Blog</li>
                </ul>
            </div>
            <div className='text-white'>
                <h1 className='text-[140%] mb-[10%]'>
                КАТАЛОГ
                </h1>
                <ul className='font-extralight'>
                    <li className='mb-[5%] text-gray-400'>New arrivals</li>
                    <li className='mb-[5%] text-gray-400'>Trending now</li>
                    <li className='mb-[5%] text-gray-400'>Sales</li>
                    <li className='mb-[5%] text-gray-400'>Brands</li>
                </ul>
            </div>
            <div className='text-white'>
                <h1 className='text-[140%] mb-[10%]'>
                КОНТАКТЫ ДЛЯ СВЯЗИ
                </h1>
                
                <div className='flex items-center mb-[4%]'>
                    <h1 className='text-[120%]'>
                    Телефон:
                    </h1>
                    <p className='ml-[5%] text-gray-400 font-extralight'>
                        ( 903-10-46-66 )
                    </p>
                </div>
                <div className='flex items-center w-[106%]'>
                    <h1 className='text-[120%]'>
                    Почта:
                    </h1>
                    <p className='ml-[5%] text-gray-400 font-extralight'>
                        ( shohdidorkhojaev@gmail.com )
                    </p>
                </div>
                <img className='mt-[5%] w-[100%]' src={Social} alt="error" />
            </div>

            </div>
            
        </div>
        </div>

    </div>
  )
}

export default Layout