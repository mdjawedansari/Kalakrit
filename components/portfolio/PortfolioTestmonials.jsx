"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import Image from "next/image";

const PortfolioTestmonials = () => {
  return (
    <>
      <div className="bg-[#100f13] ">
        <h1 className="font-bold text-center md:text-left w-full md:w-3/5 py-8 m-auto md:text-3xl lg:text-4xl text-[#ffffff] text-2xl">
          Testimonial
        </h1>
      </div>
      <Carousel className="pb-6">
        <div className="w-full flex flex-wrap-reverse justify-center py-2 font-Poppins items-center text-[#ffffff]  bg-[#100f13] pb-6">
          <div className="left md:w-3/5 w-full py-4 ">
            <div className="md:w-10/12 flex flex-wrap w-11/12 m-auto space-y-6  testimonial">
              <p className="lg:text-md md:text-md text-base text-center">
                We couldn't be happier with the service received from kalakrit.
                From the moment I contacted them, they were responsive,
                professional, and truly dedicated to meeting our needs.The
                quality of their work exceeded my expectations, and their
                attention to detail was evident in every aspect of the project.
                I highly recommend kalakrit to anyone seeking top-notch
                services. They are a trusted partner that I will continue to
                rely on for future projects.
              </p>
              <div className="">
                <div className="text-[#EB5A00] flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <FaStarHalf />
                </div>
              </div>
            </div>
          </div>
          <div className="right md:w-[28%] w-full relative">
            <div className="testimonial-image">
              <Image
                src="/portfolio/testimonial.svg"
                alt="testimonial image"
                className="mx-auto"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-2 font-Poppins items-center text-[#ffffff]  bg-[#100f13] flex-wrap-reverse">
          <div className="left md:w-3/5 w-full py-4">
            <div className="md:w-10/12 w-11/12 m-auto space-y-6  testimonial">
              <p className="lg:text-md md:text-md text-base text-center">
                We couldn't be happier with the service received from kalakrit.
                From the moment I contacted them, they were responsive,
                professional, and truly dedicated to meeting our needs. The
                quality of their work exceeded my expectations, and their
                attention to detail was evident in every aspect of the project.
                I highly recommend kalakrit to anyone seeking top-notch
                services. They are a trusted partner that I will continue to
                rely on for future projects.
              </p>

              <div className="text-[#EB5A00] flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </div>
            </div>
          </div>
          <div className="right md:w-2/6 w-full relative">
            <div className="testimonial-image">
            <Image
                src="/portfolio/testimonial.svg"
                alt="testimonial image"
                className="mx-auto"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default PortfolioTestmonials;
