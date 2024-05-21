import React from "react";
import Image from "next/image";

const Language_Spacilist = () => {
  return (
    <>
      <div className="bg-[#100f13] py-32">
        <div className="w-full md:w-10/12 m-auto h-auto flex">
          <div className="w-full lg:w-1/2 bg-[url('/services/interpretation/star.png')]  h-auto bg-no-repeat bg-top ">
            <div className="w-full pt-6 px-6">
              <h1 className="text-2xl font-semibold text-[#ffffff]">
                Language specialists from various places
              </h1>
              <h3 className="text-[#f6f6f6] text-xl py-10 leading-normal">
                In order to deliver the project with the utmost excellence, we
                have both native and non-native interpreters that have a wealth
                of experience in their industry. This helps in maintaining
                utmost quality.
              </h3>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-auto bg-[url('/services/interpretation/language_Spacilist.png')] bg-no-repeat bg-cover ">
            <div>
              <Image
                className="lg:w-3/4 pl-6 h-auto mb-10"
                src="/services/interpretation/language_Spacilist.svg"
                alt="nsja"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language_Spacilist;
