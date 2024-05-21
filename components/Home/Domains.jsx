import React from "react";
import { domainData } from "./domain";

const Domains = () => {
  return (
    <>
      <div className="bg-[#201f22] py-12 xl:py-32">
        <div className="w-full xl:w-11/12 px-4 xl:px-20 flex flex-col gap-12  ">
          <div className="flex flex-wrap gap-10 ">
            <h1 className="text-[#ffffff] text-4xl font-semibold">
              Multiple Domains
            </h1>
            <h3 className="text-[#f6f6f6] text-md  md:w-10/12  xl:text-lg  font-thin">
              Kalakrit has designed its localization solutions according to 15
              different Domains, what we have done is extensively train and
              assess linguists according to the mentioned domains along with
              creating pre-set guidelines to help our clients and maintain
              quality practices.
            </h3>
          </div>
          <div className=" w-full md:w-11/12  flex gap-3 md:gap-4 xl:gap-6 flex-wrap">
            {domainData?.map((domain) => (
              <>
                <div key={domain.id} className=" p-2 md:p-3 xl:p-6 hover:bg-transparent hover:border border-[#eb5a00] hover:text-[#ffffff] cursor-pointer shadow-sm rounded flex justify-center items-center gap-2 sm:gap-4 xl:gap-4 bg-[#ffffff]">
                  <span className="text-sm xl:text-2xl font-semibold">
                    <img src={domain.icon} alt={domain.title} className="w-6 h-auto" />
                  </span>
                 {domain.title}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
