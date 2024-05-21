import React from "react";

const CaseStudies = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full sm:w-3/4  m-auto ">
        <div className="w-full sm:w-2/5 m-auto border border-b-1 border-[#100f13]"></div>
        <div className="w-full sm:w-2/5 m-auto border border-b-1 border-[#100f13]"></div>
      </div>

      <div className="w-full md:bg-[#f6f6f6] bg-[#100F13] py-20 md:h-auto h-[100vh] flex justify-between flex-wrap-reverse md:flex-nowrap">
        {/* work start from here */}


        <div className=" bg-[#ffffff] md:w-2/5 border-x-8 md:border-x-0 border-[#100F13] w-3/4 md:h-[450px] lg:h-[600px] h-[300px] flex  justify-center items-center ">
          <div className=" py-4 px-4  shadow-xl md:shadow-none">
            <h1 className="relative   lg:top-0 md:top-0  text-[#eb5a00] md:text-[#100f13] font-extrabold md:font-normal left-20 md:left-36 text-left  lg:left-52 xl:text-8xl lg:text-7xl md:text-5xl text-4xl  font-Poppins">
              YOU DON'T GET PAID FOR SLIDES & EMAILS
            </h1>
          </div>
      </div>

        <div className=" bg-[#100f13] md:w-2/5 md:p-10 lg:p-16 xl:p-20 w-full xl:h-[800px] lg:h-[600px] md:h-[450px] h-[230px]">
          <div className="bg-[#ffffff] w-full xl:h-[600px] lg:h-[400px] md:h-[300px] h-auto">
            <img
              src="/services/voiceover/voiceover.png"
              className="w-full h-auto px-2 md:px-0 bg-[#100F13]"
              alt="ghgg"
            />
          </div>
        </div>
        
      </div>

      
    </>
  );
};

export default CaseStudies;