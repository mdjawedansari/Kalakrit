import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[#100f13]  pt-32 pb-10">
        <div className=" bg-[url('/services/interpretation/interpretation_banner_background_transparent.png')] px-2 bg-no-repeat bg-center  w-full  h-auto  ">
          <div className="w-full sm:w-3/5 h-auto flex flex-col justify-center m-auto">
            <h1 className="font-semibold text-3xl lg:text-5xl text-center text-[#ffffff]">
              Interpretation
            </h1>
            <h2 className="text-[#f6f6f6] text-center leading-normal py-7 lg:py-10 text-lg lg:text-3xl">
              Bridging Language Gaps, We help the world communicate better.
              Exceptional Services for
              <span className="text-[#eb5a00]"> Global Communication.</span>
            </h2>

            <button className="bg-transparent transition-all duration-500 hover:bg-[#eb5a00a7] hover:text-[#f6f6f6] hover:border-white md:text-xl text-[#eb5a00] p-4  border font-semibold border-[#eb5a00]">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* how we do it */}

      <div className="bg-[#100f13] h-[70vh] md:h-auto px-2 py-4 lg:py-20">
        <div className="w-full h-auto relative md:w-11/12 m-auto flex justify-between  overflow-hidden">
          <div className="w-2/5 -ml-10 md:ml-10 flex flex-col items-center  overflow-hidden ">
            <Image
              className="lg:ml-16 md:w-[300px] h-auto "
              width={120}
              height={120}
              src="/services/interpretation/Rectangle 8023.svg"
              alt="sjs"
            />
            {/* <Image className=" md:w-[300px] h-auto" width={200} height={200}  src='/services/interpretation/Rectangle 8024.svg' alt="sjs" /> */}
            <Image
              className="lg:-ml-32 my-20 130 md:w-[350px] h-auto"
              width={150}
              height={150}
              src="/services/interpretation/Rectangle 8025.svg"
              alt="sjs"
            />
            {/* <Image className=" md:w-[300px] h-auto" width={200} height={200}  src='/services/interpretation/Rectangle 8026.svg' alt="sjs" /> */}
            <Image
              className="lg:ml-8 md:w-[280px] h-auto ml-6"
              width={130}
              height={130}
              src="/services/interpretation/Rectangle 8027.svg"
              alt="sjs"
            />
            {/* <Image className=" md:w-[300px] h-auto" width={200} height={200}  src='/services/interpretation/Group 6075.svg' alt="sjs" /> */}
          </div>

          <div className="w-2/5 -mr-10 md:mr-10 lg:flex flex-col  items-center  overflow-hidden ">
            <Image
              className=" mr-20 md:w-[300px] h-auto"
              width={100}
              height={100}
              src="/services/interpretation/Rectangle 8024.svg"
              alt="sjs"
            />
            <Image
              className="my-12 lg:ml-32 md:w-[350px] h-auto"
              width={130}
              height={130}
              src="/services/interpretation/Rectangle 8026.svg"
              alt="sjs"
            />
            <Image
              className="my-6 lg:-ml-8 md:w-[380px] h-auto"
              width={140}
              height={140}
              src="/services/interpretation/Group 6075.svg"
              alt="sjs"
            />
          </div>

          <div className="absolute w-full h-full top-0 left-0">
            <div className="w-10/12  lg:w-2/5 m-auto mt-8 lg:mt-20 p-4 md:p-12 rounded-4xl bg-transparent shadow-lg inset-4 backdrop-blur-lg">
              <div className="flex items-center justify-center gap-8">
                <h1 className="text-2xl md:text-4xl  text-[#ffffff]">
                  How we do it
                </h1>
                <Image
                  className="lg:w-12 lg:h-12"
                  src="/services/interpretation/business-3d-target-with-dart-arrow-in-bullseye 1 (1).svg"
                  alt="ddd"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-[#f6f6f6] text-sm md:text-xl text-center font-normal py-4 md:py-10">
              <h2 className="text-center text-lg">
                An interpreter bridges language gaps, conveying spoken words to
                those who don't understand. This process is known as
                interpretation and includes
              </h2>
              <h1 className="py-1">two main types:</h1>
              <div className="lg:flex items-center lg:px-4  gap-8">
              <Image
                  className="lg:w-6 lg:h-6"
                  src="/services/interpretation/Voice-activate.svg"
                  alt="ddd"
                  width={50}
                  height={50}
                />
              <h2 className="text-left lg:text-xl lg:font-semibold">Simultaneous Interpretation </h2>

              </div>
              <h2 className="text-center lg:px-2">
                Interpreting while the speaker talks, common in conferences.
              </h2>

              <div className="lg:flex items-center justify-end  gap-8">
              <h2 className="lg:text-right lg:font-semibold py-1 lg:px-2">Consecutive Interpretation</h2>
              <Image
                  className="lg:w-6 lg:h-6"
                  src="/services/interpretation/User--simulation.svg"
                  alt="ddd"
                  width={50}
                  height={50}
                />
              </div>
              <h2>
                Translation after the speaker pauses, used in legal proceedings.
                We have served major clients like MRM Group, WPP Group, Glance,
                Carrier, and more.
              </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
