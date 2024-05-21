"use client";

import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const LandingPage = () => {
  return (
    <>
      <ParallaxProvider>
        <div id="wrapper">
          <div id="content" className="flex relative ">
            <div className="relative w-1/2 h-[60vh] sm:h-[60vh] md:h-[70vh]  lg:h-[100vh] bg-[url('/landingPage/582ddc857c49ad0a27800887_bg-home-aboutus.jpg')] shadow-lg bg-no-repeat bg-cover flex justify-center items-center">
              <div className="absolute left-[40%]  top-[30%] lg:top-[23%] w-3/4 h-auto">
                <Parallax speed={50} translateX={[0, -50]} translateY={[30, 0]}>
                  <div className="w-full flex ">
                    <img
                      src="/landingPage/landing_page_kalakrit.png"
                      alt="landing page"
                      className=" opacity-80"
                    />
                  </div>
                </Parallax>
              </div>

              <div className="text-[#f6f6f6] text-xs sm:text-sm lg:text-xl font-thin sm:font-light mt-40 sm:mt-60 md:mt-72  xl:mt-96 py-10">
                <li>Translation and Localization</li>
                <li>Voiceover and Dubbing</li>
                <li>Transcription</li>
              </div>
            </div>

            <div
              className={`w-1/2   relative h-[60vh] sm:h-[60vh] md:h-[70vh]   lg:h-[100vh] bg-[url('/landingPage/startup_dark.jpg')] bg-no-repeat bg-cover flex py-20`}
            >
              <div className="absolute top-[25%]  lg:top-[15%] w-full h-auto">
                <Parallax speed={50} translateX={[-20, 0]} translateY={[30, 0]}>
                  <img
                    src="/landingPage/main-parallax.png"
                    alt="parallax"
                    className=""
                  />
                </Parallax>
              </div>
            </div>

            <div className="absolute w-full -bottom-52 sm:-bottom-60 lg:-bottom-72 left-0">
              <div className="w-full lg:w-11/12 h-auto flex m-auto justify-between">
                <Parallax
                  speed={0}
                  translateX={[0, 10]}
                  className="bg-[#ffffff] shadow-lg border w-1/2  md:w-2/6  h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-4 lg:gap-8">
                    <h1 className="text-md sm:text-xl  lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-xs sm:text-sm lg:text-md sm:font-normal">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                      
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="bg-[#100f13] hover:bg-[#eb5a00] hover:text-[#ffffff] hover:border-2 hover:border-white rounded-md text-center py-2 sm:mt-4 md:mt-2 lg:mt-0   px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>

                <Parallax
                  speed={100}
                  translateY={[0, -50]}
                  className="bg-[#303030] hidden md:block w-[30%] md:w-2/6 text-[#ffffff]  shadow-md h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-8">
                    <h1 className="text-xl lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-sm lg:text-md font-light">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                     
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="border-2 border-[#ffffff] hover:text-[#eb5a00] rounded-md text-center py-2   px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>

                <Parallax
                  speed={0}
                  translateX={[0, -10]}
                  className="bg-[#100f13]  text-[#ffffff] md:text-black  md:bg-[#f6f6f6] w-1/2 md:w-2/6  shadow-lg border h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-4 lg:gap-8 ">
                    <h1 className="text-md sm:text-xl lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-xs sm:text-sm md:text-sm lg:text-md font-light sm:font-normal md:font-light ">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                      
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="md:bg-[#100f13] bg-[#eb5a00] hover:bg-[#100f13]   md:hover:bg-[#eb5a00] hover:text-[#ffffff] hover:border-2 hover:border-white  rounded-md text-center py-2 sm:mt-4 md:mt-0  px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default LandingPage;
