"use client";

import React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import { motion, AnimatePresence } from "framer-motion";
import "./services.css";

const Subtitling = () => {
  const [expanded, setExpanded] = useState();
  const [selectedTab, setSelectedTab] = useState("website");
  const handleClick = (item) => {
    setSelectedTab(item);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="text-sm py-8 xl:py-20 sm:px-4 overflow-hidden font-Poppins  w-full flex flex-wrap gap-6">
        <div className="w-full ">
          <div className="w-full xl:w-3/5 px-2">
            <h2 className="py-4 w-1/2 text-xl  text-[#eb5a00]">Subtitling</h2>
            <h1 className=" text-2xl xl:text-4xl font-Poppins text-bold text-[#ffffff]">
              We subtitle the said and unsaid
            </h1>
            <h3 className="py-6 text-md text-[#f6f6f6a1]">
              ​Subtitling can be defined as the process of adding text to any
              audio-visual medium
              <span className="text-[#eb5a00]">
                (film, television, promotional & corporate videos)
              </span>
              to convey the message that is being spoken.
            </h3>
          </div>

          <div className="w-full sm:w-11/12 lg:w-full m-auto  flex flex-wrap sm:flex-nowrap  gap-6">
            <div className="flex justify-between w-full sm:w-1/2  sm:p-2 ">
              <div className="w-full flex flex-col gap-2 md:gap-3 xl:gap-6 ">
                <Accordion
                  className=" back shadow-none outline outline-[#f6f6f6]"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  onClick={() => handleClick("website")}
                >
                  <AccordionSummary
                    className={`bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <SubtitlesIcon />
                    <Typography className="w-full shrink-0 pl-4">
                      Closed Captions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-sm ">
                      Closed Captions are usually created to put in as an option
                      for the viewer. They are usually not visible to the viewer
                      and can be turned on or off.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  onClick={() => handleClick("marketing")}
                >
                  <AccordionSummary
                    className={`bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <SubtitlesIcon />
                    <Typography className="w-full shrink-0 pl-4 ">
                      Open Captions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]  text-sm">
                      Open captions are also known as subtitles. They are
                      usually white or yellow letters with a black rim or drop
                      shadow. Some are always visible, like the “open captions“
                      of DCMP videos.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  onClick={() => handleClick("multimedia")}
                >
                  <AccordionSummary
                    className={`bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <SubtitlesIcon />
                    <Typography className="w-full shrink-0 pl-4">
                      SDH
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-sm">
                      These are just like subtitles, but SDH includes
                      information such as sound effects, speaker identification,
                      and other essential nonspeech features.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className="w-3/4 sm:w-1/2 xl:w-2/5 sm:flex  sm:justify-end xl:pl-10 m-auto ">
              <div className="w-full h-full sm:w-1/2 lg:w-10/12 lg:h-auto sm:h-auto flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto"
                  >
                    {selectedTab === "website" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/dropdown/web.webp"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "marketing" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/dropdown/market.webp"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "multimedia" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/MediaMultimedia-Localization.webp"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "game" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/game.jpg"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "medical" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/medical_translation_image.png"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "script" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/script_translation_image.jpeg"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "financial" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/financial-translation-image.jpg"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "technical" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/Technical-Translation-Agency.svg"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "market-research" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/market-research-translation-service.jpg"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "software" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/software-localization-service.webp"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}

                    {selectedTab === "legal" && (
                      <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-auto  w-full m-auto "
                      >
                        <img
                          src="/services/translation/legal-translation-service.png"
                          alt=""
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subtitling;
