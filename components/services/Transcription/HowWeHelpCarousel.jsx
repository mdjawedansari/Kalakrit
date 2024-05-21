"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { helpData } from "./help";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ArrowButton } from "./ArrowButton";

const HowWeHelpCarousel = ({}) => {
  const carouselSettings = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 2.5,
        slidesToSlide: 1,
      },

      smallLaptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 2.5,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 768, min: 500 },
        items: 3,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
    infinite: true,
    arrows: true,
    autoPlay: false,
    autoPlaySpeed: 3000,
    eyBoardControl: true,
  };

  return (
    <>
      <div className="bg-[#100f13] py-16">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderButtonGroupOutside={true}
          customButtonGroup={<ArrowButton />}
          className="h-[60vh] w-11/12 m-auto text-[#f6f6f6] bg-[#100f13] overflow-hidden"
          arrows={false}
          {...carouselSettings}
        >
          {helpData?.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] text-[#100f13] rounded-lg w-[480px] h-auto p-4"
            >
              <div className=" flex items-center justify-center">
                <HiOutlineArrowNarrowRight className="text-xl" />
                <h3 className="px-8 py-4 text-xl text-center text-[#eb5a00] font-semibold font-sourceSans  cursor-pointer  ">
                  {item.title}
                </h3>
              </div>
              <h3 className="px-8 text-lg font-normal font-sourceSans cursor-pointer ">
                {item.description}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HowWeHelpCarousel;
