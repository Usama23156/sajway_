"use client"
import React, { useEffect, useState } from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import CartIcon from "@/_component/cartIcon/page";

 const page = () => {

    const [scrollPosition, setscrollPosition] = useState(0);
  const [isVisible, setisVisible] = useState(true);
  const [open, setOpen] = useState(false);

useEffect(() => {
    const handelScroll = () => {
    
    const currentScrollState = window.scrollY;
    if (currentScrollState > scrollPosition && currentScrollState > 50){
      setisVisible(false)
    }else{
      setisVisible(true)
    }
    setscrollPosition(currentScrollState);
  };
  window.addEventListener('scroll' , handelScroll)
  return ()=>{
    window.removeEventListener('scroll' , handelScroll)
  } 
  }, [scrollPosition]);
  return (
    <div>
     <div className='fixed z-[1000] right-0 top-0 w-full '>
    <div className={`flex justify-between items-center transition-[0.5s] px-6 lg:px-[100px] py-2 md:py-3  ${scrollPosition > 50?'bg-[color:var(--bg-color)]':'bg-white' }`} >
     <Link href="/" className={`text-[1.1rem] font-semibold  flex items-center gap-x-2 ${scrollPosition > 50?'text-[color:var(--text-color)]':'text-[color:var(--bg-color)]'}`}>
     <img src="/logo.jpg" alt="" className=' max-w-20 rounded-[50%]'/>
     </Link>
      <div onClick={() => setOpen(!open)} className={`icon md:hidden  cursor-pointer  text-[color:var(--bg-color)] text-2xl  z-[100001] flex  flex-wrap md:flex-nowrap justify-between items-center ${scrollPosition > 50?'text-[color:var(--text-color)]':'text-[color:var(--bg-color)]'}`}>
      <FontAwesomeIcon icon={faBars} />
      </div>
      <div
            className={` ${
              open ? "flex bg-[color:var(--bg-color)] absolute md:relative top-16 left-0 w-full h-auto mt-6" : "hidden"
            } md:flex flex-col md:flex-row  items-center md:justify-center  `}
            >
        <ul className='flex flex-col md:flex-row md:text-center justify-center items-center md:space-x-0 gap-x-20 gap-y-5 py-5 '>       
          <li className="relative"><Link href='/'  onClick={() => setOpen(false)} className={`font-bold text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)] hover:text-[color:var(--main-color)]':'md:text-[color:var(--main-color)] hover:md:text-[color:var(--bg-color)] hover:text-[color:var(--main-color)]'}`}>Home</Link> </li>
          <li className="relative"><Link href="menu" onClick={() => setOpen(false)} className={`font-bold text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)] hover:text-[color:var(--main-color)]':'md:text-[color:var(--main-color)] hover:md:text-[color:var(--bg-color)] hover:text-[color:var(--main-color)]'}`}>Menu</Link> </li>
          <li className="relative"><Link href="about" onClick={() => setOpen(false)} className={`font-bold text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)] hover:text-[color:var(--main-color)]':'md:text-[color:var(--main-color)] hover:md:text-[color:var(--bg-color)] hover:text-[color:var(--main-color)]'}`}> About Us</Link> </li>
          <li className="relative"><Link href="contact" onClick={() => setOpen(false)} className={`font-bold text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)] hover:text-[color:var(--main-color)]':'md:text-[color:var(--main-color)] hover:md:text-[color:var(--bg-color)] hover:text-[color:var(--main-color)]'}`} >Contact Us</Link> </li>
        </ul>
            </div>
            <CartIcon/>      
          </div>
  </div>

    </div>
  )
}
export default page