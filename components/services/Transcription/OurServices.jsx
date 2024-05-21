"use client";

import React from "react";
import Image from "next/image";

const OurServices = () => {


  return (
    <>
      <div className="bg-[#100f13]">
        <div className=" text-[#ffffff] w-full md:w-10/12  m-auto">
          <h1 className="text-4xl font-semibold text-center py-20">
            Our Services
          </h1>

          <div className=" text-[#ffffff] flex flex-wrap gap-8">
            <div className="box w-full lg:w-[30%] p-8 flex flex-wrap justify-center items-center  relative">
              <div className="w-20 h-20 bg-[#ffffff] flex justify-center items-center rounded-full">
                <Image
                  className=""
                  src="/services/transcription/acadmic_transcription.png"
                  alt="academic transcription"
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[#ffffff] flex flex-wrap justify-center items-center py-6 gap-6">
                <h1 className="text-xl font-semibold">
                  Academic Transcription
                </h1>
                <h3 className="text-center">
                  Guest lectures, Class lectures, and Recorded class sessions
                  can be transcribed into literal documents which can be further
                  reviewed for multiple purposes.
                </h3>
              </div>
              <div className=" w-56 rotate-90 h-0.5 bg-[#f6f6f6a1] absolute top-[175px] bottom-0 -right-32"></div>
            </div>

            <div className="box w-full relative lg:w-[30%] p-8 flex flex-wrap justify-center items-center ">
              <div className="w-20 h-20 bg-[#ffffff] flex justify-center items-center rounded-full ">
                <Image
                  className=""
                  src="/services/transcription/acadmic_transcription.png"
                  alt="acadimic transcription"
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[#ffffff] flex flex-wrap justify-center items-center py-6 gap-6">
                <h1 className="text-xl font-semibold">
                  Academic Transcription
                </h1>
                <h3 className="text-center">
                  Guest lectures, Class lectures, and Recorded class sessions
                  can be transcribed into literal documents which can be further
                  reviewed for multiple purposes.
                </h3>
              </div>
              <div className=" w-56 rotate-90 h-0.5 bg-[#f6f6f6a1] absolute top-[175px] bottom-0 -right-32"></div>
            </div>

            <div className="box w-full lg:w-[30%] p-8 flex flex-wrap justify-center items-center relative">
              <div className="w-20 h-20 bg-[#ffffff] flex justify-center items-center rounded-full ">
                <Image
                  className=""
                  src="/services/transcription/acadmic_transcription.png"
                  alt="acadimic transcription"
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[#ffffff] flex flex-wrap justify-center items-center py-6 gap-6">
                <h1 className="text-xl font-semibold">
                  Academic Transcription
                </h1>
                <h3 className="text-center">
                  Guest lectures, Class lectures, and Recorded class sessions
                  can be transcribed into literal documents which can be further
                  reviewed for multiple purposes.
                </h3>
              </div>
              <div className=" w-56 rotate-90 h-0.5 bg-[#f6f6f6a1] absolute top-[175px] bottom-0 -right-32"></div>
            </div>

            <div className=" w-full md:w-11/12 flex gap-10 m-auto">
              <div className=" w-full md:w-2/5 flex justify-end ">
                <div className="box w-full lg:w-10/12 p-8 flex flex-wrap justify-center items-center relative">
                  <div className="w-20 h-20 bg-[#ffffff] flex justify-center items-center rounded-full ">
                    <Image
                      className=""
                      src="/services/transcription/acadmic_transcription.png"
                      alt="acadimic transcription"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="text-[#ffffff] flex flex-wrap justify-center items-center py-6 gap-6">
                    <h1 className="text-xl font-semibold">
                      Academic Transcription
                    </h1>
                    <h3 className="text-center">
                      Guest lectures, Class lectures, and Recorded class
                      sessions can be transcribed into literal documents which
                      can be further reviewed for multiple purposes.
                    </h3>
                  </div>
                  <div className=" w-56 rotate-90 h-0.5 bg-[#f6f6f6a1] absolute top-[175px] bottom-0 -right-32"></div>
                </div>
              </div>

              <div className=" w-full md:w-2/5 ">
                <div className="box w-full lg:w-10/12 p-8 flex flex-wrap justify-center items-center relative ">
                  <div className="w-20 h-20 bg-[#ffffff] flex justify-center items-center rounded-full ">
                    <Image
                      className=""
                      src="/services/transcription/acadmic_transcription.png"
                      alt="acadimic transcription"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="text-[#ffffff] flex flex-wrap justify-center items-center py-6 gap-6">
                    <h1 className="text-xl font-semibold">
                      Academic Transcription
                    </h1>
                    <h3 className="text-center">
                      Guest lectures, Class lectures, and Recorded class
                      sessions can be transcribed into literal documents which
                      can be further reviewed for multiple purposes.
                    </h3>
                  </div>
                  <div className=" w-56 rotate-90 h-0.5 bg-[#f6f6f6a1] absolute top-[175px] bottom-0 -right-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
