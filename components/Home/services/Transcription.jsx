"use client";

import React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./services.css";

const Transcription = () => {
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
      <div className="text-sm py-8 sm:px-4 xl:py-20 overflow-hidden font-Poppins  w-full flex flex-wrap gap-6">
        <div className="w-full">
          <div className="w-full xl:w-3/5 px-2">
            <h2 className="py-4 w-1/2 xl:w-1/2 text-lg xl:text-xl  text-[#eb5a00]">
              Transcription
            </h2>
            <h1 className=" text-2xl xl:text-4xl font-Poppins text-bold text-[#ffffff]">
              We Provide Transcription services
            </h1>
            <h3 className="flex flex-col gap-2 py-6 text-md xl:text-md  text-[#f6f6f6a1]">
              <h1>
                It is the systematic representation of spoken language in
                written form. The source can either be speech or sign language.
                AI can surely transcribe huge volumes but can it recreate that
                into other languages? Well our Human resources can.
              </h1>

              <h2>Specific use cases of Transcription</h2>
              <li>
                Script Transcriptions - When a video is to be dubbed into other
                languages, the most important thing is to “recreate” the script
                into other languages.
              </li>
              <li>
                Interview Transcriptions - Interviews are conducted to gather
                data but data in an audio or video format can be videos to go
                through and that is where transcriptions come into play.
              </li>
              <li>
                Telephonic Transcriptions - Companies use this when QA is to be
                done for the calls of Customer service departments or any other
                telephonic conversations.
              </li>
            </h3>
          </div>

          <div className="w-full sm:w-11/12 lg:w-full m-auto  flex flex-wrap sm:flex-nowrap  gap-6">
            <div className=" flex justify-between w-full sm:w-1/2  sm:p-2 ">
              <div className="w-full px-2 flex flex-col gap-3 xl:gap-6 ">
                <Accordion
                  className=" back shadow-none outline outline-[#f6f6f6]"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  onClick={() => handleClick("website")}
                >
                  <AccordionSummary
                    className={`bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Image
                      src="/services/transcription/academic.png"
                      width={4}
                      height={4}
                      alt="academic"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-xs  sm:text-xs shrink-0 pl-2 xl:pl-4">
                      Academic Transcription
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs md:text-sm">
                      Guest lectures, Class lectures, and Recorded class
                      sessions can be transcribed into literal documents which
                      can be further reviewed for multiple purposes.
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
                    className={`"bg-gray-100 text-[#100f13] `}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Image
                      src="/services/transcription/legal.png"
                      width={4}
                      height={4}
                      alt="academic"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-xs sm:text-xs shrink-0 pl-2 xl:pl-4">
                      Legal Transcription
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs md:text-sm">
                      The legal trials, agreement dialogues, and other legal
                      conversations must be recorded accurately using
                      appropriate language.
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
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Image
                      src="/services/transcription/video.png"
                      width={4}
                      height={4}
                      alt="academic"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-xs sm:text-xs shrink-0 pl-2 xl:pl-4">
                      Video Transcription
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs md:text-sm">
                      We Transcribe video conferences and conversations with the
                      help of our domain-specific transcriptionist.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  onClick={() => handleClick("game")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Image
                      src="/services/transcription/business.png"
                      width={4}
                      height={4}
                      alt="academic"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-xs sm:text-xs shrink-0 pl-2 xl:pl-4">
                      Business Transcription
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs md:text-sm">
                      Business communications like meetings, project agreements,
                      seminars, conferences, and any other type of corporate
                      communications can be effectively transcripted.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  onClick={() => handleClick("game")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Image
                      src="/services/transcription/audio.png"
                      width={4}
                      height={4}
                      alt="academic"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-xs sm:text-xs shrink-0 pl-2 xl:pl-4">
                      Audio Transcription
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs md:text-sm">
                      We use audio transcriptions to document official audio
                      communication. We offer expert transcription for all types
                      of audiotapes. This is usually used for quality
                      assessments for customer service calls.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className="w-3/4 sm:w-1/2 xl:w-2/5 sm:flex  sm:justify-end xl:pl-10 m-auto">
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

export default Transcription;
