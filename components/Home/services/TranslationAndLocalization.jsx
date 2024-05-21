"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import "./services.css";
import Tabs from "./Tabs";

const TranslationAndLocalization = () => {
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
      <div className="text-sm py-8 xl:py-20 overflow-hidden font-Poppins  w-full sm:px-4 flex flex-wrap md:flex-nowrap gap-6 md:gap-4">
        <div >
          <div className="w-full lg:w-3/4 px-2">
            <h2 className="py-4 w-1/2 xl:w-1/2 text-lg xl:text-xl  text-[#eb5a00]">
              Translation and Localization
            </h2>
            <h1 className=" text-2xl xl:text-4xl font-Poppins text-bold text-[#ffffff]">
              Translation And Localization
            </h1>
            <h3 className="py-6 text-md xl:text-md text-[#f6f6f6a1] text-left">
              It is an act through which the content of a text is adapted to
              meet the language, cultural and other requirements of a specific
              target market. Ai can not understand some of the most important
              ways of communication such as Body language, Voice Tones and the
              meaning behind the words. And that is where Human based
              Translations come superior. Our human resource goes out of the set
              boundaries and gives you the result that can not be derived from
              the regular ways. Kalakrit has designed multiple systems to ensure
              that our clients do not have to visit multiple agencies.
            </h3>
          </div>

          <div className="w-full flex flex-wrap gap-6 md:flex-nowrap ">

            <div className=" flex justify-between md:w-3/4 md:h-auto  ">
              <div className="w-[49%] flex flex-col gap-3 md:gap-2 xl:gap-6 ">
                <Accordion
                  className=" back shadow-none outline outline-[#f6f6f6]"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  onClick={() => handleClick("website")}
                >
                  <AccordionSummary
                    className={` text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <img
                      src="/services/translation/web_localization.png"
                      alt="website_localization"
                      className="w-4 md:w-[30px] h-auto"
                    />
                    <h1 className="w-full text-[10px] sm:text-xs  lg:text-sm   shrink-0 pl-2 xl:pl-4">
                      Website Localization
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs  ">
                      Is the process of localising website content using
                      culture, language and flow to provide the most useful and
                      relevant experience for users.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back shadow-none border-2 rounded-none border-[#f6f6f6]"
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  onClick={() => handleClick("marketing")}
                >
                  <AccordionSummary
                    className={` text-[#100f13] rounded-none`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <img
                      src="/services/translation/marketing_localization.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Marketing Localization
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs ">
                      Is the process of adapting or customizing a company's
                      marketing and communication strategies to a specific
                      country, region or culture.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  onClick={() => handleClick("multimedia")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <img
                      src="/services/translation/multimedia_icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[9px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Multimedia Localization
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      Is the process of adapting multimedia content from one
                      language to another and localizing it to include the
                      cultural references of the target language.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  onClick={() => handleClick("game")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <img
                      src="/services/translation/game_icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Game Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      Translation of the storyline, dialogues, on-screen texts,
                      videos and audio of the game.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  onClick={() => handleClick("medical")}
                >
                  <AccordionSummary
                    className={` text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <img
                      src="/services/translation/medical-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Medical Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      In Medical translation, the translation is carried out
                      using the appropriate scientific terms that are relevant
                      to the medical field.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                  onClick={() => handleClick("script")}
                >
                  <AccordionSummary
                    className={` text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                  >
                    <img
                      src="/services/translation/script-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Script Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      It is the first step in making your video/audio content
                      multilingual. It helps you reach more people all around
                      the world and can help people understand your content.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="w-[49%] flex flex-col gap-3 md:gap-2 xl:gap-6">
                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                  onClick={() => handleClick("financial")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel7bh-content"
                    id="panel7h-header"
                  >
                    <img
                      src="/services/translation/financial-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Financial Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      For Financial Translations we follow procedures with high
                      precision and consistency as finance is a highly
                      competitive field.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                  onClick={() => handleClick("technical")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                  >
                    <img
                      src="/services/translation/technical-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Technical Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      Technical translation involves the translation of
                      documents, manuals, and user guides produced by technical
                      writers. It needs thorough research on the specific
                      techniques.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel9"}
                  onChange={handleChange("panel9")}
                  onClick={() => handleClick("market-research")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]  `}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                  >
                    <img
                      src="/services/translation/market-research-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Market Research
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      Market Research translation includes the translation of
                      briefing notes, transcripts, questionnaires, discussion
                      guides, stimulus materials and research reports.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                  onClick={() => handleClick("software")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel10bh-content"
                    id="panel10bh-header"
                  >
                    <img
                      src="/services/translation/software-localization-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Software Localization
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] tet-xs">
                      Software localization is the process of software product
                      adapting interface with the help of linguists and
                      translators, which are the cultural and technical
                      requirements of a target market.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="back text-[#ffffff] shadow-none border-2 border-[#f6f6f6]"
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                  onClick={() => handleClick("legal")}
                >
                  <AccordionSummary
                    className={`text-[#100f13]`}
                    expandIcon={<ExpandMoreIcon className="hidden sm:block" />}
                    aria-controls="panel11bh-content"
                    id="panel11bh-header"
                  >
                    <img
                      src="/services/translation/legal-translation-icon.png"
                      alt="website_localization"
                      className="w-4 sm:w-6 md:w-[30px] h-auto"
                    />
                    <Typography className="w-full text-[10px] sm:text-xs  lg:text-sm  shrink-0 pl-2 xl:pl-4">
                      Legal Translation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#100f13] text-xs">
                      In Medical translation, the translation is carried out
                      using the appropriate scientific terms that are relevant
                      to the medical field.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <Tabs selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TranslationAndLocalization;
