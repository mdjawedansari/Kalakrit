"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const CaseStudy = ({ client }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full  lg:pt-12 font-Poppins flex p-4 pb-12">
        <div className="w-full lg:w-3/5 flex flex-wrap gap-8  h-auto  bg-[#ffffff] py-8 lg:py-20  ">
          <div className="flex w-full justify-between  ">
            <Link
              className="w-[200px] h-[200px] m-auto rounded-full cursor-pointer"
              href="/portfolio"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-auto m-auto"
              />
            </Link>

            <div className="hidden lg:flex flex-col justify-center items-center gap-32 ">
              <div className="h-1 w-[400px] bg-[#201f22] -rotate-12"></div>

              <div className="h-1 w-[300px] bg-[#eb5a00] rotate-45"></div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 text-[#f6f6f6]  lg:p-4">
            <h1 className="text-center text-[#eb5a00]  text-2xl py-4  ">
              {client.name}
            </h1>
            <h1 className="text-[#201f22]">{client.client}</h1>
          </div>
        </div>

        <div className=" p-4 w-2/5 lg:flex flex-col hidden">
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="bg-[#f6f6f6] p-4"
          >
            <h1 className="text-center  text-2xl font-semibold py-2 ">
              Requirement
            </h1>
            <h1 className={`${client.name === "apna" ? "text-xs" : "" }`}>{ client.requirement}</h1>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="bg-[#eb5a00] p-4 "
          >
            <h1 className="text-center text-2xl font-semibold py-2">
              Solution
            </h1>
            <h1 className={`${client.name === "apna" ? "text-xs" : "" }`}>{client.solution}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
