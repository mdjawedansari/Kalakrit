"use client";

import React from "react";
import { useState } from "react";
import { IoIosMailOpen } from "react-icons/io";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import CountUp from "react-countup";
import { GoNorthStar } from "react-icons/go";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const TranslationLandingPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="w-full bg-[url('/services/translation/trans_banner_image.png')] bg-cover bg-center">
        <div className="w-full h-[100vh] bg-gray-500 bg-opacity-50 py-32 backdrop-blur-sm rounded-lg shadow-lg p-4">
          <div className="w-full  md:w-11/12 m-auto flex   font-Poppins ">
            <div className="w-full md:w-3/4 h-auto p-8 relative bg-[#ffffff] border-b-2 border-black border-spacing-y-8 flex  ">
              <div className="w-full md:w-2/6 ">
                <div className="flex gap-2 text-sm font-light ">
                  <li className="bg-[#f6f6f6] rounded-full py-1 px-2">
                    Mindfullness
                  </li>
                  <li className="bg-[#f6f6f6] rounded-full p-1">
                    Mindfullness
                  </li>
                </div>
                <div className="absolute top-16 left-4 w-full h-auto py-2 overflow-visible">
                  <div className=" w-[550px] h-auto ">
                    <img
                      className="blur-xs opacity-80"
                      src="/services/translation/landing_page_kalakrit.svg"
                      alt="banner text"
                    />
                  </div>
                </div>
                <div className="pt-[250px]">
                  <div className="w-full  md:w-10/12 border border-gray-500 m-auto"></div>

                  <ul className="py-4 text-sm font-light">
                    <li>
                      Drive into mindfulness practices, meditation techniques
                      and wellness tops.
                    </li>
                  </ul>

                  <div className="py-6">
                    <Link href="/">
                      <button className="bg-[#100f13] hover:bg-[#201f22e3] hover:text-[#eb5a00] text-[#f6f6f6] p-3 ">
                        Request For Quote
                      </button>
                    </Link>
                  </div>

                  <div className="flex py-4 flex-wrap gap-4 ">
                    <span className="">
                      <img
                        className="w-[80px] h-auto"
                        src="/clientLogo/glance.png"
                        alt="glance logo"
                      />
                    </span>

                    <span className=" ">
                      <img
                        className="w-[80px] h-auto"
                        src="/clientLogo/pokerbaazilogo-black.svg"
                        alt="glance logo"
                      />
                    </span>
                    <span className="">
                      <img
                        className="w-[80px] h-auto"
                        src="/clientLogo/ladlilogo.png"
                        alt="glance logo"
                      />
                    </span>
                  </div>

                  <div className="py-4 flex items-center  gap-4">
                    <span className=" ">
                      <Link href="/">
                        <IoIosMailOpen className="font-light p-4 text-7xl border-2 border-gray-600  rounded-full hover:translate-2 hover:bg-[#f6f6f6] hover:border-2 hover:border-[#eb5a00]  " />
                      </Link>
                    </span>

                    <span className="p-4">
                      <Link href="/">
                        <BsFillArrowUpRightSquareFill
                          className={` font-light p-4 text-7xl border-2 border-gray-600  rounded-full hover:translate-2 hover:bg-[#f6f6f6] hover:border-2 hover:border-[#eb5a00]  `}
                        />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-3/5 h-auto ">
                <div>
                  <img
                    className=""
                    src="/services/translation/translation-Banner_image_2.jpg"
                    alt="translation & localization"
                  />
                </div>
              </div>
            </div>

            <div className="w-full font-Poppins md:w-[25%] py-8 bg-[#ffffff] h-auto  border-b-2 border-black border-spacing-y-8 ">
              <div className="w-full ">
                <div className="flex relative">
                  <img
                    className="w-[250px] h-auto"
                    src="/services/translation/game_translation_1.jpg"
                    alt="anything"
                  />
                  <span className="absolute w-full left-0 -top-8">
                    <Link href="/" className="flex justify-end p-2">
                      <BsFillArrowUpRightSquareFill
                        className={` font-light p-2 text-5xl  border-2 border-gray-600  rounded-full hover:translate-2 hover:bg-[#f6f6f6] hover:border-2 hover:border-[#eb5a00]  `}
                      />
                    </Link>
                  </span>
                </div>

                <div className="py-4 text-sm font-light">
                <h1 className="text-md font-normal">Game Translation</h1>
                  <h2 >
                    Translation of the storyline, dialogues, on-screen texts,
                    videos and audio of the game.
                  </h2>
                </div>
                <div className="w-full  md:w-10/12 border border-gray-500 m-auto"></div>


                <div className="flex items-center gap-6 py-4">
                  <span onClick={handleOpen} className="cursor-pointer">
                    <RiVideoFill
                      className={` font-light p-4 text-7xl bg-[#f6f6f6]  hover:translate-2 hover:bg-[#dad7d7cb]  hover:border-[#eb5a00]  `}
                    />
                  </span>
                  <div className="">
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      {/* <div
                        open={open}
                        onClose={handleClose}
                        className="flex  justify-end p-2"
                      >
                        <span>
                          <ClearIcon className=" bg-gray-300 text-gray-600 w-20 h-20 cursor-pointer rounded-full text-sm font-light hover:bg-[#201f22] hover:text-[#eb5a00] " />
                        </span>
                      </div> */}
                      <Box className="absolute top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]  shadow-lg border-2 border-black bg-[#201f22] ">
                        <div className="p-10 bg-[#201f22] w-full h-full">
                          <iframe
                            width="956"
                            height="538"
                            src="https://www.youtube.com/embed/TWvGB53F-nA"
                            title="Let&#39;s Build Your Dream Portfolio with Next.js 13"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </Box>
                    </Modal>
                  </div>

                  <h1 className="text-sm">See how it works</h1>
                </div>

                <div className="  w-full h-full  m-auto flex flex-wrap gap-10">
                  <div className="w-full font-Poppins  flex-wrap items-center justify-around gap-2 ">
                    <div className="flex">
                      <div className=" flex flex-col ">
                        <h1>
                          <span className="text-2xl font-semibold text-[#EB5A00] bg-white">
                            <CountUp
                              start={0}
                              end={150}
                              duration={3.75}
                            ></CountUp>
                            +
                          </span>
                        </h1>
                        <h1 className="text-md font-Roboto   bg-white ">
                          Languages
                        </h1>
                      </div>
                    </div>

                    <div className="flex">
                      <div className=" flex flex-col ">
                        <h1>
                          <span className="text-lg font-semibold text-[#EB5A00] bg-white">
                            <CountUp start={0} end={500} duration={5}></CountUp>
                            +
                          </span>
                        </h1>
                        <h1 className="text-md font-Roboto  bg-white">
                          Projects
                        </h1>
                      </div>
                    </div>

                    <div className="flex ">
                      <div className=" flex flex-col">
                        <h1>
                          <span className="text-md font-semibold  text-[#EB5A00] bg-white">
                            <CountUp start={0} end={50} duration={2}></CountUp>+
                          </span>
                        </h1>
                        <h1 className="text-md font-Roboto  bg-white">
                          Clients
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-6 ">
                  <div className="flex gap-4 ">
                    <h3 className="text-sm pl-2 font-light">
                      client
                      <Link
                        href="/"
                        className="pl-2 underline underline-offset-4"
                      >
                        reviews
                      </Link>{" "}
                    </h3>
                    <GoNorthStar />
                  </div>
                  <div className=" flex py-4 relative ">
                    <div className="z-10">
                      <img
                        src="/team/ejaz.JPG"
                        alt="anything"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>

                    <div className="absolute w-full left-8 -z-1">
                      <img
                        src="/team/ejaz.JPG"
                        alt="anything"
                        className="w-12 h-12 rounded-full  "
                      />
                    </div>

                    <div className="absolute w-full left-16 -z-6 ">
                      <img
                        src="/team/ejaz.JPG"
                        alt="anything"
                        className=" w-12 h-12 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranslationLandingPage;
