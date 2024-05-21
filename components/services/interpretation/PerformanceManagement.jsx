import Image from "next/image";
import React from "react";

const PerformanceManagement = () => {
  return (
    <>
      <div className="bg-[#100f13] py-20">
        <div className="w-full md:w-10/12 flex m-auto h-auto">
          <div className="w-full h-[200px] relative flex lg:w-1/2 px-6 lg:h-[500px] pl-10">
            <div className="w-full h-auto absolute top-0 left-0">
              <div className="w-3/4 h-auto ">
                <Image
                  className="lg:w-full h-auto"
                  src="/services/interpretation/performance_management.png"
                  alt="dhjw"
                  width={300}
                  height={300}
                />
              </div>

              <div className="w-1/2 h-auto -mt-28 -ml-12 ">
                <Image
                  className="lg:w-[280px] h-auto"
                  src="/services/interpretation/experienced_management.png"
                  alt="dhjw"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="">
                <h1 className="text-2xl font-semibold text-[#ffffff]">
                  Performance Management
                </h1>
                <h3 className="text-[#f6f6f6] text-xl py-10 leading-normal">
                  We have all the physical and virtual resources needed to
                  complete the project to the highest standard. Consequently, we
                  have integrated performance management for all of our
                  resources, both real and virtual.
                </h3>

                <h1 className="text-2xl font-semibold text-[#ffffff]">
                  Experienced Personnel
                </h1>

                <h3 className="text-[#f6f6f6] text-xl py-10 leading-normal">
                  To ensure that they have the necessary skills, all of our
                  employees undergo extensive training. This further guarantees
                  that your project is in good hands.
                </h3>

              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default PerformanceManagement;
