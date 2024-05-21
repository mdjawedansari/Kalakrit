"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CaseStudy from "./CaseStudy";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { data } from "@/components/portfolio/client";

const ReactCarousel = () => {
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-center text-6xl font-Poppins font-semibold py-10  ">
            Case Study
          </h1>
          <h2 className="text-center font-semibold text-2xl">
            Check out our projects!
          </h2>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          className="relative"
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                }  bottom-2 left-[38%] lg:left-[50%]  flex justify-center items-center p-4 transition-all duration-500 hover:bg-[#201f22] bg-[#201f22aa]  cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <WestIcon className="w-9 h-9 text-[#ffffff] hover:text-[#eb5a00]" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                }  bottom-3 left-[55%] flex justify-center items-center p-4 transition-all duration-500 hover:bg-[#201f22] bg-[#201f22aa]    cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <EastIcon className="w-9 h-9 text-[#ffffff] hover:text-[#eb5a00]" />
              </div>
            );
          }}
        >
          {data?.map((client) => (
            <>
              <CaseStudy key={client.id} client={client} />
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ReactCarousel;
