import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const SubtitleHome = () => {
  return (
    <>
      <div className="w-full  pt-28 bg-[#100F13] font-Poppins">
        <div className="w-full   bg-[#100F13]">
          <div className="w-11/12 h-auto m-auto  flex md:bg-[url('/public/services/subtitling/line2.jpg')] bg-[#100F13] bg-cover  bg-no-repeat md:flex-nowrap flex-wrap-reverse ">
            <div className="left md:w-1/2 w-full py-12  ">
              <div className="md:w-2/3 sm:w-full w-full md:space-y-6 space-y-2 ">
                <h1 className="font-bold xl:text-5xl md:text-3xl text-2xl text-[#FFFFFF]">
                  We <span className="text-[#EB5A00]">subtitle</span> the said
                  and unsaid
                </h1>
                <p className="text-left w-full lg:text-2xl ms:text-lg text-base text-[#F6F6F6]">
                  Unlock the power of Words:Seamless Subtitling Solution for
                  your content
                </p>
                <button className="py-3 px-12 bg-[#EB5A00] text-[#F6F6F6] font-semibold">
                  Get a Quote
                </button>
              </div>
            </div>
            <div className="right opacity-75 relative md:w-1/2  w-full px-4 flex ">
              <div classsName="absolute left-0 top-0 w-1/2">
                <div className="z-20 ">
                  <img
                    src="/services/subtitling/point.png"
                    alt="point"
                    className="w-[80px] lg:w-[100px] md:w-[100px]  h-auto"
                  />
                </div>

                <div className="z-20 md:pl-10 pl-4 md:-mt-24  -mt-16  ">
                  <img
                    src="/services/subtitling/rectangle318.svg"
                    alt="working people"
                    className=" w-[100px] md:w-[150px]  xl:w-[200px] lg:w-[180px] h-auto   "
                  />
                </div>
              </div>

              <div className="w-1/2">
                <div className="lg:pt-10 ">
                  <img
                    src="/services/subtitling/point.png"
                    alt="point"
                    className="w-[80px] -z-10  md:w-[100px] h-auto lg:mt-56 mt-32 -ml-6 "
                  />
                </div>
                <div className="z-20 xl:pl-10 lg:pl-8 pl-10 xl:-mt-60 lg:-mt-20 -mt-28">
                  <img
                    src="/services/subtitling/rectangle319.svg"
                    alt="working people"
                    className=" w-[100px] xl:w-[200px] lg:w-[180px] md:w-[150px] h-auto  "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src="/services/subtitling/point.png"
              alt="this is point image"
              className="w-[80px] lg:w-[200px] lg:h-auto md:w-[100px] h-auto"
            />
          </div>
          <div className="w-full md:w-11/12 sm:-mt-40 -mt-8 lg:w-11/12 xl:w-11/12 h-auto m-auto flex flex-wrap md:flex-nowrap relative py-4">
            <div className="md:w-2/5 lg:w-2/5  w-full">
              <img
                src="/services/subtitling/Rectangle321.svg"
                alt=""
                className="w-full md:w-[350px] lg:w-full xl:w-[380px] h-auto"
              />
              <div className="absolute backdrop-blur-lg  text-white top-10 flex justify-center space-x-3  text-center xl:w-[380px] py-5 w-full md:w-2/5 lg:w-2/5 ">
                <p className="lg:text-2xl">Types of Subtitle</p>
                <BsArrowUpRight className="text-2xl" />
              </div>
              <div className="absolute text-sm md:text-base text-white backdrop-blur-lg  text-center  w-full xl:w-[380px] top-72 lg:top-96 lg:top-92 p-2 md:w-2/5 lg:w-2/5">
                <span>
                  Subtitling can be defined as the process of adding text to any
                  audio-visual medium (film, television, promotional & corporate
                  videos) to convey the message that is being spokens.
                </span>
              </div>
            </div>
            <div className="md:w-3/5 lg:w-3/5  w-full md:space-y-6 lg:space-y-6 space-y-2  bg-[#100F13] px-4">
              <div className="md:w-10/12 lg:w-10/12 w-full ">
                <div className="flex md:space-x-4 lg:space-x-4 space-x-2 py-4">
                  <AiOutlineArrowRight className="md:text-3xl text-xl text-[#FFFFFF]" />
                  <h1 className="lg:text-2xl text-xl xl:text-3xl md:text-xl text-[#FFFFFF]">
                    Closed Captions
                  </h1>
                </div>
                <p className="md:text-sm lg:text-base xl:text-xl text-sm font-thin text-[#F6F6F6] ml-12">
                  Closed Captions are usually created to put in as an option for
                  the viewer.They are usually not visible to viewer and can
                </p>
                <div className="flex md:space-x-4 space-x-2  py-4">
                  <AiOutlineArrowRight className="md:text-3xl text-xl text-[#FFFFFF]" />
                  <h1 className="lg:text-2xl xl:text-3xl text-xl md:text-xl text-[#FFFFFF]">
                    Open Captions
                  </h1>
                </div>
                <p className="md:text-sm lg:text-base xl:text-xl text-sm font-thin text-[#F6F6F6] ml-12">
                  Open captions are also known as subtitles. They are usually
                  white or yellow letters with a black rim or drop shadow. Some
                  are always visible, like the “open captions“ of DCMP videos.
                </p>
                <div className="flex md:space-x-4 space-x-2 py-4">
                  <AiOutlineArrowRight className="md:text-3xl text-xl text-[#FFFFFF]" />
                  <h1 className="lg:text-2xl xl:text-3xl text-xl md:text-xl text-[#FFFFFF]">
                    SDH
                  </h1>
                </div>
                <p className="md:text-sm lg:text-base xl:text-xl text-sm font-thin text-[#F6F6F6] ml-12">
                  These are just like subtitles, but SDH includes information
                  such as sound effects, speaker identification, and other
                  essential nonspeech features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubtitleHome;
