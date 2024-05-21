"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const VoiceoverAndDubbing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full relative flex bg-transparent">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className=" bg-[url('/services/voiceover/voiceoverLandingPage.svg')]  px-2 bg-no-repeat bg-cover  w-full   h-[100vh]  "
        ></div>
        <div className=" absolute top-0 left-0 w-full h-auto">
          <div className="mt-60">
            <div className="w-full sm:w-3/5 h-auto gap-6 flex flex-col justify-center m-auto">
            <div className="w-2/6 m-auto hover:bg-gray-200 flex items-center gap-8 bg-[#ffffff] p-3 rounded-full">
            <img className="w-8  cursor-pointer hover:bg-gray-200 h-8" src="/services/voiceover/videoIcon.png" alt="voiceover video" />
            <button className="font-semibold  text-xl lg:text-sm text-center  text-[#100f13]">
                We give voice to your words
              </button>
            </div>
              <h1 className="font-semibold text-3xl lg:text-4xl  text-center text-[#ffffff]">
                Voice Over and Dubbing
              </h1>
              <h2 className="text-[#f6f6f6] w-3/4 m-auto text-center leading-normal  text-md lg:text-2xl ">
                Elevate Your Message: Professional
                <span className="text-[#eb5a00] "> Voice Over and Dubbing </span>
                Services for Exceptional Audio Experiences
              </h2>

              <button className="bg-[#eb5a00] shadow-xl transition-all duration-500 w-[200px] m-auto hover:bg-[#eb5a00a7] hover:text-[#f6f6f6] hover:border-white md:text-xl text-[#f6f6f6] p-4  border font-semibold border-[#100513]">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceoverAndDubbing;
