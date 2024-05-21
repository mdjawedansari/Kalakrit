"use client";

import React from "react";
import { FaStarHalf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import ClientsSlider from "./ClientsSlider";

const LandingPage = () => {
  return (
    <>
      <div className="relative">
        <div className=" md:bg-[url('/portfolio/shape2.png')] pt-20 bg-[#100F13] bg-center bg-no-repeat bg-cover w-full lg:h-[100vh] md:h-[80vh] h-auto">
          <div className="w-11/12 m-auto h-auto flex py-8 flex-wrap md:flex-nowrap">
            <div className="md:w-3/5 w-full space-y-8">
              <div className="first space-y-3">
                <h1 className="text-[#FFFFFF] lg:text-[140px] md:text-[100px] text-6xl italic">
                  Portf<span className="text-[#EB5A00] ">o</span>lio
                </h1>
                <p className="text-[#F6F6F6] lg:text-xl md:text-lg text-base lg:w-1/2 md:w-3/4">
                  Explore our portfolio of Achievements and Case Studies.
                </p>
              </div>
              <div className="second space-y-2">
                <p className="text-[#F6F6F6] lg:text-xl md:text-lg text-base">
                  90% Customer Satisfaction
                </p>
                <div className="text-[#EB5A00] flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <FaStarHalf />
                  <div className="pl-6 space-x-2">
                    <span className="text-[#F6F6F6] md:text-base text-sm">
                      4.1/5{" "}
                    </span>
                    <span className="text-[#F6F6F6]  md:text-base text-sm">
                      (14k Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 w-full h-auto pt-8 md:pt-0">
              <div className="w-10/12 ml-auto flex flex-col justify-start items-start py-4">
                <div className=" flex flex-col justify-start items-start text-center">
                  <p className="text-[#EB5A00] font-bold text-lg lg:text-4xl md:text-2xl m-auto">
                    40+
                  </p>
                  <p className="lg:text-xl md:text-lg text-sm text-[#F6F6F6]">
                    Specialists in our team
                  </p>
                </div>
              </div>
              <div className="md:w-10/12 ml-auto relative">
                <div className="w-full ">
                  <img
                    src="/portfolio/image1.svg"
                    alt="image portfolio1"
                    height={150}
                    width={150}
                    className="xl:w-[200px] xl:h-auto lg:w-[160px]"
                  />
                </div>
                <div className="flex justify-end w-full  relative">
                  <div className="w-1/2 mt-8 lg:mr-96 md:mr-60 lg:mr-72 mr-40 absolute flex-col inline-flex text-center">
                    <span className="text-[#EB5A00] font-bold text-lg lg:text-4xl md:text-2xl ">
                      150+
                    </span>
                    <span className="lg:text-xl md:text-lg text-sm text-[#F6F6F6]">
                      Successful Cases
                    </span>
                  </div>
                  <img
                    src="/portfolio/image2.svg"
                    alt="image portfolio2"
                    height={150}
                    width={150}
                    className="xl:w-[200px] xl:h-auto lg:w-[160px]"
                  />
                </div>
              </div>
              <div className="w-10/12 ml-auto flex flex-col justify-end items-end py-4">
                <div className=" flex flex-col justify-end items-end text-center">
                  <p className="text-[#EB5A00] font-bold text-lg lg:text-4xl md:text-2xl  m-auto">
                    90%
                  </p>
                  <p className="lg:text-xl md:text-lg text-sm text-[#F6F6F6]">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full absolute bottom-16 right-0">
          <ClientsSlider />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
