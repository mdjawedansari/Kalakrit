"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TranslationAndLocalization from "./TranslationAndLocalization";
import TranslateIcon from "@mui/icons-material/Translate";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Subtitling from "./Subtitling";
import VoiceOverDubbing from "./VoiceOverDubbing";
import Interpretation from "./Interpretation";
import Transcription from "./Transcription";

export default function OurServices() {
  const [selectedTab, setSelectedTab] = useState("translation");

  const handleClick = (item) => {
    setSelectedTab(item);
  };

  return (
    <>
      <div className="  shadow-lg py-6 lg:py-8  xl:py-20">
        <div className="bg-[#201f22] font-Poppins w-full m-auto text-[#ffffff]">
          <div className=" py-6 lg:py-8  xl:py-20 md:w-full  m-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl py-4 xl:py-6  text-bold text-center">
              OUR SERVICES
            </h2>
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-center ">
              We Are <span className="text-[#EB5A00]">Specialized In</span> The
              Following Services
            </h1>
          </div>

          <div className="w-full md:w-full ">
            <div className="  m-auto p-2 md:p-4  xl:p-8">
              <div className="flex flex-wrap justify-center w-full font-Poppins gap-4 ">
                <div
                  className={`${
                    selectedTab === "translation"
                      ? "selected  text-[#ffffff] border-2 rounded-lg border-[#EB5A00] "
                      : " max-w-xs rounded-lg overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border border-gray-300 "
                  } list-none m-0 xl:p-4  text-md text-center cursor-pointer w-[45%] sm:w-[30%]  md:w-[18%]  h-auto `}
                  onClick={() => handleClick("translation")}
                >
                  <div className="p-2 flex flex-col   gap-4 text-left">
                    <TranslateIcon
                      id="icon"
                      className={`${
                        selectedTab === "translation" ? "text-[#eb5a00]" : " "
                      } w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-gray-100/75 rounded-full p-2 border-2 border-[#ffffff]  `}
                    />

                    <span className="font-Poppins  text-sm lg:text-lg">
                      Translation & Localization
                    </span>
                    <h1 className="text-xs md:text-sm font-thin  ">
                      we are helping client to create with our talented expert
                    </h1>

                    <TrendingFlatIcon
                      className={`${
                        selectedTab === "translation"
                          ? "text-[#eb5a00]"
                          : "text-[#f6f6f6a1]"
                      } xl:ml-4 text-[#f6f6f6a1]  transition-all duration-300 hover:translate-x-4`}
                    />
                  </div>
                </div>

                <div
                  className={`${
                    selectedTab === "subtitling"
                      ? "selected  text-[#ffffff] border-2 rounded-lg border-[#EB5A00] "
                      : " max-w-xs rounded-lg overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border border-gray-300 "
                  } list-none m-0 xl:p-4  text-md text-center cursor-pointer w-[45%] sm:w-[30%]  md:w-[18%] h-auto `}
                  onClick={() => handleClick("subtitling")}
                >
                  <div className="p-2 flex flex-col   gap-4 text-left">
                    <ClosedCaptionOffIcon
                      id="icon"
                      className={`${ selectedTab === "subtitling" ? 'text-[#eb5a00]': ''}  w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-gray-100/75 rounded-full p-2 border-2 border-[#ffffff]  `}
                    />

                    <span className="font-Poppins  text-sm lg:text-lg">
                      Subtitling
                    </span>
                    <h1 className="text-xs md:text-sm font-thin  ">
                      we are helping client to create with our talented expert
                    </h1>

                    <TrendingFlatIcon className=" xl:ml-4 text-[#f6f6f6a1]  transition-all duration-300 hover:translate-x-4 " />
                  </div>
                </div>

                <div
                  className={`${
                    selectedTab === "voiceover"
                      ? "selected  text-[#ffffff] border-2 rounded-lg border-[#EB5A00] "
                      : " max-w-xs rounded-lg overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border border-gray-300 "
                  } list-none m-0 xl:p-4  text-md text-center cursor-pointer w-[45%] sm:w-[30%]  md:w-[18%] h-auto `}
                  onClick={() => handleClick("voiceover")}
                >
                  <div className="p-2 flex flex-col   gap-4 text-left">
                    <RecordVoiceOverIcon
                      id="icon"
                      className={`${ selectedTab === "voiceover" ? 'text-[#eb5a00]': ''} w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12  bg-gray-100/75 rounded-full p-2 border-2 border-[#ffffff]  `}
                    />

                    <span className="font-Poppins  text-sm lg:text-lg">
                      Voiceover & Dubbing
                    </span>
                    <h1 className="text-xs md:text-sm font-thin  ">
                      we are helping client to create with our talented expert
                    </h1>

                    <TrendingFlatIcon className=" xl:ml-4 text-[#f6f6f6a1]  transition-all duration-300 hover:translate-x-4 " />
                  </div>
                </div>

                <div
                  className={`${
                    selectedTab === "interpretation"
                      ? "selected  text-[#ffffff] border-2 rounded-lg border-[#EB5A00] "
                      : " max-w-xs rounded-lg overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border border-gray-300 "
                  } list-none m-0 xl:p-4  text-md text-center cursor-pointer w-[45%] md:w-[18%]  h-auto `}
                  onClick={() => handleClick("interpretation")}
                >
                  <div className="p-2 flex flex-col   gap-4 text-left">
                    <TranslateIcon
                      id="icon"
                      className={`${ selectedTab === "interpretation" ? 'text-[#eb5a00]': ''}  w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12  bg-gray-100/75 rounded-full p-2 border-2 border-[#ffffff]  `}
                    />

                    <span className="font-Poppins  text-sm lg:text-lg">
                      Interpretation
                    </span>
                    <h1 className="text-xs md:text-sm  font-thin  ">
                      we are helping client to create with our talented expert
                    </h1>

                    <TrendingFlatIcon className=" xl:ml-4 text-[#f6f6f6a1]  transition-all duration-300 hover:translate-x-4 " />
                  </div>
                </div>

                <div
                  className={`${
                    selectedTab === "transcription"
                      ? "selected  text-[#ffffff] border-2 rounded-lg border-[#EB5A00] "
                      : " max-w-xs rounded-lg overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border border-gray-300 "
                  } list-none m-0 xl:p-4  text-md text-center cursor-pointer w-[45%] md:w-[18%] h-auto `}
                  onClick={() => handleClick("transcription")}
                >
                  <div className="p-2 flex flex-col   gap-4 text-left">
                    <TranslateIcon
                      id="icon"
                      className={`${ selectedTab === "transcription" ? 'text-[#eb5a00]': ''} w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12  bg-gray-100/75 rounded-full p-2 border-2 border-[#ffffff]  `}
                    />

                    <span className="font-Poppins  text-sm lg:text-lg">
                      Transcription
                    </span>
                    <h1 className="text-xs md:text-sm font-thin  ">
                      we are helping client to create with our talented expert
                    </h1>

                    <TrendingFlatIcon className=" xl:ml-4 text-[#f6f6f6a1]  transition-all duration-300 hover:translate-x-4 " />
                  </div>
                </div>
              </div>

              <main className="flex justify-center   items-center text-[128px] flex-grow-1  select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto"
                  >
                    {selectedTab === "translation" && (
                      <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className=" h-auto w-full m-auto "
                      >
                        <TranslationAndLocalization />
                      </motion.div>
                    )}

                    {selectedTab === "subtitling" && (
                      <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 2 }}
                        exit={{ y: -150, opacity: 2 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto w-full m-auto"
                      >
                        <Subtitling />
                      </motion.div>
                    )}

                    {selectedTab === "voiceover" && (
                      <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto"
                      >
                        <VoiceOverDubbing />
                      </motion.div>
                    )}

                    {selectedTab === "interpretation" && (
                      <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto"
                      >
                        <Interpretation />
                      </motion.div>
                    )}

                    {selectedTab === "transcription" && (
                      <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto"
                      >
                        <Transcription />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
