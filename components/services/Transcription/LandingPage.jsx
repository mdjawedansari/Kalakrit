"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full relative flex bg-[#100f13]">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className=" bg-[url('/services/transcription/transcription_1.png')]  px-2 bg-no-repeat bg-cover  w-3/5  h-[100vh]  "
        ></div>

        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className=" bg-[url('/services/transcription/transcription_2.png')]  px-2 bg-no-repeat bg-cover  w-2/5  h-[100vh]  "
        ></div>
        <div className=" absolute top-0 left-0 w-full h-auto">
          <div className="mt-60">
            <div className="w-full sm:w-3/5 h-auto flex flex-col justify-center m-auto">
              <h1 className="font-semibold text-3xl lg:text-5xl text-center text-[#ffffff]">
                Transcription
              </h1>
              <h2 className="text-[#f6f6f6] text-center leading-normal py-7 lg:py-10 text-md lg:text-2xl ">
                Precision in Every Word: Transforming Audio to Text with
                <span className="text-[#eb5a00]"> Top-notch</span>
                Transcription Services
              </h2>

              <button className="bg-[#201f22] transition-all duration-500 w-[200px] m-auto hover:bg-[#eb5a00a7] hover:text-[#f6f6f6] hover:border-white md:text-xl text-[#f6f6f6] p-4  border font-semibold border-[#eb5a00]">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* how we do it */}

      <div className="bg-[#100f13] h-[70vh] md:h-auto px-2 py-4 lg:py-20">
        <div className="w-full h-auto  md:w-10/12 m-auto flex justify-between  overflow-hidden">
          <div className="w-full lg:w-2/5 ">
            <div className="">
              <Image
                className="lg:w-[400px] lg:h-auto"
                src="/services/transcription/transcription (2).png"
                alt="sdas"
                width={300}
                height={300}
              />
            </div>

            <div className="w-full h-auto py-16">

            <h1 className="text-2xl font-semibold text-[#ffffff]">
              What is <span className="text-[#eb5a00]">Transcription?</span>
            </h1>
            <h3 className="text-[#f6f6f6] text-2xl py-10 leading-normal">
              Transcription is the systematic representation of spoken language
              in written form. The source can either be speech or sign language.
              AI can surely transcribe huge volumes but can it recreate that
              into other languages? Well our Human resources can.
            </h3>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex flex-col gap-8 ">
            <h1 className="text-2xl  text-center py-8  font-semibold text-[#ffffff]">
              Types of Transcription?
            </h1>

            <div className="p-4 bg-[#ffffff] rounded-lg ">
              <h3 className="text-[#201f22] text-xl py-4 leading-normal">
                <span className="text-[#eb5a00] font-semibold pr-1"> Script Transcriptions </span>
                - When a video is to be dubbed into other languages, the most
                important thing is to “recreate” the script into other
                languages.
              </h3>
            </div>

            <div className="p-4 bg-[#ffffff] rounded-lg">
              <h3 className="text-[#201f22] text-xl py-4 leading-normal">
                <span className="text-[#eb5a00] font-semibold pr-1">
                  Interview Transcriptions
                </span>
                 - Interviews are conducted to gather data but data in an audio
                or video format will need transcriptions.
              </h3>
            </div>

            <div className=" p-4 bg-[#ffffff] rounded-lg">
              <h3 className="text-[#201f22] text-xl py-4 leading-normal">
                <span className="text-[#eb5a00] font-semibold pr-1">
                  
                  Telephonic Transcriptions
                </span>
                 - Companies use this when Q/A is to be done for the calls of
                Customer service departments or any other telephonic
                conversations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
