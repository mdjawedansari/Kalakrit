"use client"

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import Case from "./Case";


const OurClients = () => {
  const [activeButton, setActiveButton] = useState("ICICI PRUDENTIAL");
  
   // Function to handle button click and update activeButton state
   const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="w-full  h-auto bg-[#100F13] py-20 pt-40 font-Poppins">
        <div className="w-11/12 m-auto bg-[#100F13] h-auto space-y-12">
          <div className="w-full row1 flex justify-around md:flex-nowrap flex-wrap space-y-5 md:space-y-0">
            <div className="row3 md:w-1/4 w-full">
              <img
                src="/portfolio/Rectangle8068.svg"
                alt=""
                className="bg-cover bg-center bg-no-repeat"
              />
            </div>

            <div onClick={() => handleButtonClick("ICICI PRUDENTIAL")} className="md:w-1/4 bg-[#100F13] flex flex-col w-full">
              <div className="w-full cursor-pointer">
                <img src="/portfolio/icici Prudential.svg" alt="this is icici image" />
              </div>
              <div className="w-full space-y-3 text-xl pt-4">
                <p className="text-[#EB5A00] font-bold">ICICI PRUDENTIAL</p>
                <p className="text-[#F6F6F6]">
                  Interpretation & Legal Tranlation service
                </p>
                <div className="flex space-x-3 text-[#F6F6F6]">
                  <span>Read more</span>
                  <AiOutlineArrowRight className="text-3xl" />
                </div>
              </div>
            </div>

            <div onClick={() => handleButtonClick("APNA")} className="md:w-1/4 bg-[#100F13] flex flex-col w-full">
              <div className="w-full  cursor-pointer">
                <img src="/portfolio/apna.svg" alt="this is icici image" />
              </div>
              <div className="w-full space-y-3 text-xl pt-4">
                <p className="text-[#EB5A00] font-bold">APNA</p>
                <p className="text-[#F6F6F6]">
                  Interpretation & Legal Tranlation service
                </p>
                <div className="flex space-x-3 text-[#F6F6F6]">
                  <span>Read more</span>
                  <AiOutlineArrowRight className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
          <div  className="w-full row2 flex justify-around md:flex-nowrap flex-wrap space-y-5 md:space-y-0">
            <div onClick={() => handleButtonClick("INTERGLOBE")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
              <div className="w-full cursor-pointer">
                <img src="/portfolio/interglobe.svg" alt="this is icici image" />
              </div>
              <div className="w-full space-y-3 text-xl pt-4">
                <p className="text-[#EB5A00] font-bold">INTERGLOBE</p>
                <p className="text-[#F6F6F6]">
                  Interpretation & Legal Tranlation service
                </p>
                <div className="flex space-x-3 text-[#F6F6F6]">
                  <span>Read more</span>
                  <AiOutlineArrowRight className="text-3xl" />
                </div>
              </div>
            </div>
            <div onClick={() => handleButtonClick("LADLI FOUNDATION")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
              <div className="w-full cursor-pointer">
                <img src="/portfolio/ladli.svg" alt="this is icici image" />
              </div>
              <div className="w-full space-y-3 text-xl pt-4">
                <p className="text-[#EB5A00] font-bold">LADALI FOUNDATION</p>
                <p className="text-[#F6F6F6]">
                  Interpretation & Legal Tranlation service
                </p>
                <div className="flex space-x-3 text-[#F6F6F6]">
                  <span>Read more</span>
                  <AiOutlineArrowRight className="text-3xl" />
                </div>
              </div>
            </div>
            <div onClick={() => handleButtonClick("GLANCE")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
              <div className="w-full cursor-pointer">
                <img src="/portfolio/glance.svg" alt="this is icici image" />
              </div>
              <div className="w-full space-y-3 text-xl pt-4">
                <p className="text-[#EB5A00] font-bold">GLANCE</p>
                <p className="text-[#F6F6F6]">
                  Interpretation & Legal Tranlation service
                </p>
                <div className="flex space-x-3 text-[#F6F6F6]">
                  <span>Read more</span>
                  <AiOutlineArrowRight className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full row2 flex justify-around md:flex-nowrap flex-wrap space-y-5 md:space-y-0">
          <div onClick={() => handleButtonClick("APOLLO TYPRES")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
            <div className="w-full cursor-pointer">
              <img src="/portfolio/apollo.svg" alt="this is icici image" />
            </div>
            <div className="w-full space-y-3 text-xl pt-4">
              <p className="text-[#EB5A00] font-bold">APOLLO TYRES</p>
              <p className="text-[#F6F6F6]">
                Interpretation & Legal Tranlation service
              </p>
              <div className="flex space-x-3 text-[#F6F6F6]">
                <span>Read more</span>
                <AiOutlineArrowRight className="text-3xl" />
              </div>
            </div>
          </div>
          <div onClick={() => handleButtonClick("POKERBAZI")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
            <div className="w-full cursor-pointer">
              <img src="/portfolio/pokerbaazi.svg" alt="this is icici image" />
            </div>
            <div className="w-full space-y-3 text-xl pt-4">
              <p className="text-[#EB5A00] font-bold">POKERBAZI</p>
              <p className="text-[#F6F6F6]">
                Interpretation & Legal Tranlation service
              </p>
              <div className="flex space-x-3 text-[#F6F6F6]">
                <span>Read more</span>
                <AiOutlineArrowRight className="text-3xl" />
              </div>
            </div>
          </div>
          <div onClick={() => handleButtonClick("BRAINYWOOD")} className="md:w-1/4 w-full bg-[#100F13] flex flex-col">
            <div className="w-full hover:bg-black hover:backdrop-blur-sm cursor-pointer ">
              <img src="/portfolio/brainywood.svg" alt="this is icici image" />
            </div>
            <div className="w-full space-y-3 text-xl pt-4">
              <p className="text-[#EB5A00] font-bold">BRAINYWOOD</p>
              <p className="text-[#F6F6F6]">
                Interpretation & Legal Tranlation service
              </p>
              <div className="flex space-x-3 text-[#F6F6F6]">
                <span>Read more</span>
                <AiOutlineArrowRight className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Case activeButton={activeButton} />
    </>
  );
};

export default OurClients;