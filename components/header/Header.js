"use client"

import React from 'react';
import './header.css'
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <div className='font-Poppins max-w-full bg-[#201f22]  mx-auto xl:max-w-full lg:max-w-full md:max-w-full  '>      
      <Navbar  />     
    </div>

  )
}

export default Header