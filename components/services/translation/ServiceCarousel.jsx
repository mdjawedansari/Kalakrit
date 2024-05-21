"use client"

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { subservice } from "./subService";

const ServiceCarousel = () => {
  return (
    <div className="relative">
      <h1 className="text-center text-2xl font-Poppins font-semibold py-10">
        Supporting Services
      </h1>
      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="h-[60vh] text-[#ffffff] overflow-hidden"
        renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } buttom-0 bottom-10 left-[5%] overflow-hidden transition-all duration-500  flex justify-center items-center p-4 bg-[#f6f6f6] hover:bg-[#201f22]  cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <WestIcon className="w-9 h-9 text-[#201f22] hover:text-[#eb5a00]" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                }  bottom-5 transition-all overflow-hidden duration-500 left-[10%] flex justify-center items-center p-4 hover:bg-[#201f22] bg-[#f6f6f6]    cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <EastIcon className="w-9 h-9 text-[#201f22] hover:text-[#eb5a00]" />
              </div>
            );
          }}
      >
        {subservice?.map((services) => (
          <div key={services.id} className="bg-[#201f22] h-[60vh]">
            <div className="w-11/12 m-auto flex h-full">
              <div className="w-2/5 py-20  flex">
                <div className="flex gap-6 w-3/4  flex-col">
                  <h1 className="text-2xl w-full font-semibold text-left">
                    {services.title}
                  </h1>
                  <h2 className="text-left">{services.description}</h2>
                </div>
              </div>

              <div className="w-3/5 h-full flex justify-center items-center">
                <div className="flex w-full h-auto relative p-6 gap-4 items-center justify-end">
                  <div className="w-[250px] absolute left-6 hover:scale-105 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-2 h-auto">
                    <img src={services.image_1} alt="asdsdas" fillRule="true" className="" />
                  </div>

                  <div className="w-[250px] absolute left-[293px] hover:scale-105 -top-6 bg-[#eb5a00] bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg blur-80 p-2 h-auto">
                    <img src={services.image_2} alt="sadasdas" fillRule="true" className=" " />
                  </div>

                  <div className="w-[250px] bg-white hover:scale-105 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg blur-80 p-2 h-auto">
                    <img src={services.image_3} alt="sadasdsad" fillRule="true" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
