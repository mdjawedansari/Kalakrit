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

const VoiceOverDubbing = () => {
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
      <div className="text-sm sm:px-4 py-8 xl:py-20 overflow-hidden font-Poppins  w-full flex flex-wrap gap-6">
        <div className="w-full ">
          <div className="w-full xl:w-3/5 px-2">
            <h2 className="py-4 w-1/2 xl:w-1/2 text-lg xl:text-xl  text-[#eb5a00]">
              Voice Over and Dubbing
            </h2>
            <h1 className=" text-2xl xl:text-4xl font-Poppins text-bold text-[#ffffff]">
              We give voice to your words
            </h1>
            <h3 className="flex flex-col gap-2 py-6 text-md xl:text-md  text-[#f6f6f6a1]">
              <h1>
                The voice-over is read from a script and may be spoken by
                someone who appears elsewhere in the production or by a
                specialist voice actor
              </h1>
              <h1>
                Whereas Dubbing refers to Translating the video content into
                multiple different target languages in order to make the content
                multilingual. So a movie/video shot in one specific language has
                the dialogues replaced with voice-actors speaking different
                languages.
              </h1>
              <h1>
                We are your people if you don’t want all your videos to sound
                like Siri or alexa.
              </h1>
            </h3>
          </div>

          <div className="w-full flex flex-wrap gap-6 md:flex-nowrap">
            <div className="flex justify-between md:w-3/4 md:h-auto  ">
              <div className="w-[49%] flex flex-col gap-3 xl:gap-4 ">
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
                    <VideoChatIcon />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Animated Videos
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      Listening to animated videos, one thing that comes the
                      most to one's mind is “Voice Actor”. We provide
                      best-in-class VO Actors.
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
                      src="/services/translation/marketing_localization.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Commercials
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      Promoting a product or service in the form of an
                      advertisement that is presented on television, radio, web,
                      or social. Typically, in the 15, 4, and 60-second formats
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
                      src="/services/translation/multimedia_icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Narration
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] ">
                      Voice-over narration is when a voice narrates over images
                      or motion pictures to help tell the story either from a
                      character's perspective or a third person.
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
                      src="/services/translation/game_icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Video Games
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      We have a variety of voices with different tonalities that
                      are selected as per the target audience in order to give
                      the character the book needs.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="w-[49%] flex flex-col gap-3 xl:gap-4">
                <Accordion
                  className=" back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  onClick={() => handleClick("medical")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Image
                      src="/services/translation/medical-translation-icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      E-Learning
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      We can support everything starting from games on the home
                      consoles like Xbox, PlayStation and Nintendo to Mobile and
                      PC games.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                  onClick={() => handleClick("script")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                  >
                    <Image
                      src="/services/translation/script-translation-icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Corporate
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      E-learning for voice actors often involves working with
                      instructional and educational content that helps students
                      of all ages.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                  onClick={() => handleClick("financial")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel7bh-content"
                    id="panel7h-header"
                  >
                    <Image
                      src="/services/translation/financial-translation-icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Audiobooks
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      Corporate voice-over is often used to help train new
                      employees or offer in-depth tutorials/explanations for
                      specific jobs.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className=" back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                  onClick={() => handleClick("technical")}
                >
                  <AccordionSummary
                    className={`"bg-gray-100 text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                  >
                    <Image
                      src="/services/translation/technical-translation-icon.png"
                      width={4}
                      height={4}
                      alt="website_localization"
                      className="w-full md:w-6 h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Mimicry
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13]">
                      These are used in comic videos, youtube videos etc.
                      Kalakrit offers a wide range of mimicry artists for all
                      famous celebrities Indian and international.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className="w-3/4 m-auto md:w-2/5 xl:pl-10">
              <div className="w-full h-full sm:w-3/4 sm:h-auto  md:h-auto flex justify-center items-center ">
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

export default VoiceOverDubbing;
