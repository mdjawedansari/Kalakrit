"use client";

import React from "react";
import { useState } from "react";

const UseCase = () => {
  const [selectedTab, setSelectedTab] = useState("description");

  const handleClick = (item) => {
    setSelectedTab(item);
  };

  return (
    <>
      <div className="flex">
        <div className="bg-[url('/services/voiceover/usecase.jpg')] p-10 md:h-[600px] bg-cover bg-no-repeat w-full md:w-1/2 ">
          <div className="flex pt-6 ga-4">
            <div
              className={`${
                selectedTab === "description"
                  ? "selected  text-[#eb5a00] border-b-2  border-b-[#EB5A00] "
                  : " max-w-xs text-[#ffffff] overflow-hidden hover:bg-transparent hover:text-[#ffffff] hover:border-b-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b border-gray-300 "
              } list-none m-0 p-0 text-md text-center cursor-pointer w-1/2 h-16 `}
              onClick={() => handleClick("description")}
            >
              <span className="font-Poppins font-semibold text-lg">Description</span>
            </div>

            <div
              className={`${
                selectedTab === "usecase"
                  ? "selected  text-[#eb5a00] border-b-2  border-b-[#EB5A00] "
                  : " max-w-xs text-[#ffffff] overflow-hidden hover:bg-transparent hover:border-b-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b border-gray-300 "
              } list-none m-0 p-0 text-md text-center cursor-pointer w-1/2 h-16 `}
              onClick={() => handleClick("usecase")}
            >
              <span className="font-Poppins font-semibold  text-lg">Use Cases</span>
            </div>
          </div>

          <div>
            {selectedTab === "description" && (
              <div className=" w-full h-auto  pt-10">
                <h1 className="text-[#f6f6f6] text-lg text-thin leading-8 w-11/12">
                  The voice-over is read from a script and may be spoken by
                  someone who appears elsewhere in the production or by a
                  specialist voice actor. Whereas Dubbing refers to Translating
                  the video content into multiple different target languages in
                  order to make the content multilingual. So a movie/video shot
                  in one specific language has the dialogues replaced with
                  voice-actors speaking different languages. We are your people
                  if you don't want all your videos to sound like Siri or alexa.
                </h1>
              </div>
            )}

            {selectedTab === "usecase" && (
              <div className=" w-full h-auto  pt-10">
                <h1 className="py-4 font-semibold text-2xl text-[#eb5a00] ">Specific use cases of </h1>
                
                <div className="text-[#f6f6f6] text-lg text-thin leading-8">
                  <li>E Learning -  Study material in multiple languages. These are long hours Voice over requirements.</li>
                  <li>Audiobooks Voice over</li>
                  <li>Commercial - Television advertisements, social media advertisements</li>
                  <li>Infortainment Videos - Youtube videos, Training videos, Entertainment content.</li>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" w-full md:w-1/2 bg-[#100f13] flex justify-end">
        <div className=" w-full md:w-[55%]  h-auto">
          <img className="w-full h-full backdrop-blur-sm opacity-40" src="/services/voiceover/voiceover.png" alt="voiceover" />
        </div>
        </div>
      </div>
    </>
  );
};

export default UseCase;
