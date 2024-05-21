"use client";
import React, { useState } from "react";

const Hcwh = () => {
  const [activeButton, setActiveButton] = useState("Domain Specific");

  // Define paragraphs for each button
  const paragraphs = {
    "Domain Specific": `Since there are numerous types of subtitling and numerous
  technologies that are used, it can be challenging for people to
  understand these concepts. Thus, we have established distinct
  domains and trained our staff according to each domain so that the
  appropriate service can be offered in accordance with the target
  consumer.`,
    SDH: "SDH refers to subtitles that meet the additional needs of viewers who do not hear the full soundtrack of a program. Thus , we combine the information of both captions and subtitles. And they include important non-dialogue audio like sound effects and speaker identification",
    "Multiple Reviews":
      "Our customer support staff ensures that the final deliveries are of the utmost quality ,and if necessary, we provide numerous rounds of reviews in accordance with the client's preference until the desired result is obtained.",
    "Native linguistic":
      "Native linguists have a larger vocabulary than ' ordinary ' translators , therefore the text would flow more naturally and contain a wider range of words . As a result , we work directly with the native linguists , a ground level resource , enabling us to cut out middlemen and significantly lower the cost of services.",
  };

  // Function to handle button click and update activeButton state
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <>
      <div className="w-full lg:h-[80vh] h-[120vh] md:h-[100vh] lg:py-20 md:py-12 py-8 font-Poppins bg-[#100F13]">
        <div className="m-auto md:w-11/12 w-11/12  flex flex-wrap md:flex-no-wrap h-auto">
          <div className="md:w-1/2 w-full h-auto">
            <h3 className="bg-orange-900 text-[#FFFFFF] inline-block rounded-lg px-4   p-1 ">
              How we can help you
            </h3>
            <h1 className="lg:text-4xl md:text-2xl text-xl text-[#FFFFFF] font-bold mt-8 w-3/4">
              We utilize best-in-class technology
            </h1>
            <div className="mt-8">
              <div className="w-full lg:w-3/4 xl:w-3/5  flex justify-between text-xs ">
                <button
                  className={`${
                    activeButton === "Domain Specific"
                      ? "bg-[#EB5A00] text-[#FFFFFF]"
                      : "bg-[#F6F6F6a1] text-[#100f13]"
                  } p-2 rounded-full hover:bg-[#EB5A00] hover:text-white`}
                  onClick={() => handleButtonClick("Domain Specific")}
                >
                  Domain Specific
                </button>
                <button
                  className={`${
                    activeButton === "SDH"
                      ? "bg-[#EB5A00] text-[#FFFFFF]"
                      : "bg-[#F6F6F6a1] text-[#100f13]"
                  } p-4 rounded-full hover:bg-[#EB5A00] hover:text-white`}
                  onClick={() => handleButtonClick("SDH")}
                >
                  SDH
                </button>
                <button
                  className={`${
                    activeButton === "Multiple Reviews"
                      ? "bg-[#EB5A00] text-[#FFFFFF]"
                      : "bg-[#F6F6F6a1] text-[#100f13]"
                  } p-2 rounded-full hover:bg-[#EB5A00] hover:text-white`}
                  onClick={() => handleButtonClick("Multiple Reviews")}
                >
                  Multiple Reviews
                </button>
                <button
                  className={`${
                    activeButton === "Native linguistic"
                      ? "bg-[#EB5A00] text-[#FFFFFF]"
                      : "bg-[#F6F6F6a1] text-[#100f13]"
                  } p-2 rounded-full hover:bg-[#EB5A00] hover:text-white`}
                  onClick={() => handleButtonClick("Native linguistic")}
                >
                  Native linguistic
                </button>
              </div>
            </div>
            <p className="mt-10 lg:text-xl md:text-lg text-sm text-justify md:text-left md:w-11/12 lg:w-11/12 xl:w-10/12 w-full font-light text-[#F6F6F6] ">
              {activeButton ? paragraphs[activeButton] : ""}
            </p>
          </div>

          <div className="w-full md:w-1/2 px-4 py-6 md:py-6 sm:py-10 mt-8 md:mt-0">
            <div className="relative  flex-col justify-center items-center">
              <img
                src="/services/subtitling/best-technology2.svg"
                alt="this is best technology i,age"
                className="lg:w-[300px] md:w-[200px] sm:w-[250px] w-[170px]  h-auto absolute "
              />
              <img
                src="/services/subtitling/best-technology1.svg"
                alt="this is top technology"
                className="lg:w-[300px] sm:w-[250px] md:w-[200px]  w-[170px] sm:top-[180px] sm:left-[130px] h-auto absolute md:top-[200px] md:left-[130px] top-[100px] left-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hcwh;
