"use client";

import React from "react";
import { useEffect } from "react";
import { testimonials } from "./testimonialData";
import Aos from "aos";

const Testimonials = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <div className="py-8 lg:py-20 w-11/12 lg:w-10/12 m-auto">
        <h1 className="text-3xl lg:text-5xl font-black text-black font-Poppins py-12 lg:py-20">
          TELL A MORE VALUABLE STORY
        </h1>

        <div className="flex flex-wrap gap-8 sm:gap-4 md:justify-between ">
          {testimonials?.map((test) => (
            <>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                key={test.id}
                className={`border flex ${
                  test.title === "LEADING CLOUD COMPUTING PLATEFORM"
                    ? "flex-wrap-reverse bg-[#100f13] cursor-pointer hover:scale-125 w-full sm:w-[48%] lg:w-[30%] h-auto p-12 gap-12 text-2xl leading-9"
                    : " flex-wrap  p-0 border-black w-full sm:w-[48%] lg:w-[30%]" &&
                      test.title === "GLOBAL LEADER EXXICUTION MGMT"
                    ? "flex-wrap-reverse w-full sm:w-[48%] lg:w-[30%] h-auto bg-[#eb5a00] cursor-pointer hover:scale-110  p-12 gap-8 "
                    : " flex-wrap p-0 border-black w-full sm:w-[48%] lg:w-[30%] "
                }
                 h-auto `}
              >
                {test.text && (
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className={`${
                      test.title === "LEADING CLOUD COMPUTING PLATEFORM"
                        ? "text-[#ffffff] px-0 py-0"
                        : "text-black py-6  px-10 text-lg " &&
                          test.title === "GLOBAL LEADER EXXICUTION MGMT"
                        ? "text-[#ffffff] px-0 py-0 text-2xl"
                        : " text-black py-6  px-10 text-lg "
                    }`}
                  >
                    {`"${test.text}"`}
                  </h3>
                )}

                {
                  <div
                    className={`flex  ${
                      test.title === "LEADING CLOUD COMPUTING PLATEFORM"
                        ? "border-none px-0 py-0"
                        : " border-t border-black py-2 px-4" &&
                          test.title === "GLOBAL LEADER EXXICUTION MGMT"
                        ? "border-none px-0 py-0 "
                        : " border-t border-black py-2 px-4"
                    }  gap-4 items-center `}
                  >
                    {test.image && (
                      <img
                        className="w-12 h-12 rounded-full"
                        src={test.image}
                        alt="image"
                      />
                    )}
                    <div className=" leading-4 ">
                      {test.name && (
                        <h1 className="font-bold text-sm">{test.name}</h1>
                      )}
                      {test.title && (
                        <h2
                          className={`${
                            test.title === "LEADING CLOUD COMPUTING PLATEFORM"
                              ? "text-[#ffffff]  font-bold text-2xl "
                              : "text-md text-gray-600" &&
                                test.title === "GLOBAL LEADER EXXICUTION MGMT"
                              ? " text-2xl font-bold text-[#ffffff]"
                              : "text-md text-gray-600"
                          }`}
                        >
                          {test.title}
                        </h2>
                      )}
                      
                    </div>
                  </div>
                }
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
