"use client"

import {BsArrowLeft,BsArrowRight} from 'react-icons/bs';
import React from 'react'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

  return (
    <div className="carousel-button-group absolute flex gap-10 left-[40%] sm:left-[50%] md:left-[45%] lg:left-[50%] xl:left-[48%]  pt-6"> 
      <BsArrowLeft className={`${currentSlide === 0 ? 'hide' : ''} transition-all  duration-500 text-2xl  items-center hover:bg-[#201f22] hover:text-[#eb5a00] text-[#f6f6f6]    cursor-pointer z-20`} onClick={() => previous()} />
      <BsArrowRight className='transition-all  duration-500 text-2xl  items-center hover:bg-[#201f22] hover:text-[#eb5a00] text-[#f6f6f6]    cursor-pointer z-20' onClick={() => goToSlide(currentSlide + 1)} /> 
    </div>
  )
}

export default ButtonGroup