"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useAnimate, stagger } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  //is active
  const [activeItem, setActiveItem] = useState("/");

  const [isSticky, setIsSticky] = useState(false);
  // menubar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  // logout bar
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const TeamRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // nav dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseEnterAbout = () => {
    setIsAboutOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    setIsAboutOpen(false);
  };

  // Close the dropdown when a click occurs outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  //is active

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // menu animation
  const scope = useMenuAnimation(isMenuOpen);

  function useMenuAnimation(isMenuOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const menuAnimations = isMenuOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.7 },
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.3), at: "-0.1" },
            ],
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.2, { from: "last" }), at: "<" },
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
          ];

      animate([
        [
          "path.top",
          { d: isMenuOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" },
        ],
        ["path.middle", { opacity: isMenuOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isMenuOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" },
        ],
        ...menuAnimations,
      ]);
    }, [isMenuOpen]);

    return scope;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0  right-0  m-auto z-50 bg-[#100f13] shadow-lg "
          : "bg-transparent fixed top-0 left-0  m-auto z-50 w-full p-0 "
      } transition-all ease-in-out duration-300`}
    >
      <div className=" w-full lg:w-10/12 m-auto px-2">
        <div className=" ">
          {/* Mobile menu icon */}
          <div ref={menuRef}>
            <div ref={scope}>
              <div className="block sm:hidden">
                <button
                  className="text-black text-xl cursor-pointer"
                  onClick={toggleMenu}
                >
                  <HiOutlineMenuAlt3 />
                </button>
              </div>

              {/* Right slide menu */}
              <div
                className={`nav fixed top-0 right-0 h-screen w-64 bg-[#201f22] p-4 transition-transform transform ${
                  isMenuOpen
                    ? "translate-x-0 transition-all duration-500"
                    : "translate-x-full"
                } hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className=" text-[#ffffff] font-semibold text-lg flex">
                    <Link href="/">
                      <img
                        src="/logo_1.png"
                        alt="logo"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </span>
                  <button
                    className="text-black text-xl cursor-pointer absolute top-4 right-4 hover:text-amber-200"
                    onClick={closeMenu}
                  >
                    <IoCloseOutline />
                  </button>
                </div>

                <ul className="flex flex-col pt-12 space-y-4 ">
                  <Link href="/">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4 ">
                      HOME
                    </li>
                  </Link>
                  <Link href="/#build">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4  ">
                      ABOUT US
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4  ">
                      PORTFOLIO
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4  ">
                      SERVICES
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4  ">
                      BLOG
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className=" hover:text-[#eb5a00] underline underline-offset-4  ">
                      CONTACT US
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* desktop menu */}
          <div className="flex justify-between items-center p-2">
            <Link href="/" className=" ">
              <img
                src="/logo_1.png"
                alt="logo"
                width={120}
                height={120}
                className={`cursor-pointer ${activeItem === "/" && ""}`}
                onClick={() => handleItemClick("/")}
              />
            </Link>
            <div className="hidden  m-auto space-x-6 lg:flex justify-between items-center">
              <Link href="/">
                <span
                  className={`cursor-pointer py-4 nav  text-[#f6f6f6]  font-medium px-2  hover:text-[#eb5a00] ${
                    activeItem === "/" && "border-b-2  border-[#eb5a00] "
                  }`}
                  onClick={() => handleItemClick("/")}
                >
                  HOME
                </span>
              </Link>

              <Link href="/about-us">
                <div
                  className="relative py-4 px-2 inline-block text-left"
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <div
                    className="relative inline-block text-left"
                    ref={TeamRef}
                  >
                    <div
                      className={`flex items-center text-[#f6f6f6] hover:text-[#eb5a00] font-medium justify-center cursor-pointer
                        `}
                    >
                      <span
                        className={` ${
                          activeItem === "about-us" &&
                          "border-b-2 border-[#eb5a00]"
                        }`}
                        onClick={() => handleItemClick("about-us")}
                      >
                        ABOUT US
                      </span>
                      <RiArrowDropDownLine className=" text-2xl font-light " />
                    </div>

                    <div className="origin-top-right absolute left-0 mt-4">
                      {isAboutOpen && (
                        <div className="z-50 flex flex-col mt-2 md:w-[200px] shadow-lg bg-transparent ring-1 ring-black ring-opacity-5">
                          <div className="">
                            <Link
                              href="/about-us/team"
                              className="flex  w-full "
                            >
                              <div
                                className={` hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center
                              ${activeItem === "about-us" && "text-[#eb5a00]"}`}
                                onClick={() => handleItemClick("about-us")}
                              >
                                Team
                              </div>
                            </Link>
                          </div>

                          <div className="">
                            <Link
                              href="/about-us/carrer"
                              className="flex  w-full "
                            >
                              <div
                                className={` hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center
                              ${activeItem === "about-us" && "text-[#eb5a00]"}`}
                                onClick={() => handleItemClick("about-us")}
                              >
                                Carrer
                              </div>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/portfolio">
                <span
                  className={`cursor-pointer py-4 nav font-medium  text-[#f6f6f6] px-2 hover:text-[#eb5a00] ${
                    activeItem === "portfolio" && " border-b-2 border-[#eb5a00]"
                  }`}
                  onClick={() => handleItemClick("portfolio")}
                >
                  PORTFOLIO
                </span>
              </Link>

              <div
                className="relative py-4 px-2 inline-block text-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative inline-block text-left"
                  ref={dropdownRef}
                >
                  <div
                    onClick={toggleDropdown}
                    className="flex items-center text-[#f6f6f6] hover:text-[#eb5a00] font-medium justify-center cursor-pointer"
                  >
                    <span
                      className={` ${
                        activeItem === "services" &&
                        "border-b-2 border-[#eb5a00]"
                      }`}
                      onClick={() => handleItemClick("services")}
                    >
                      SERVICES
                    </span>
                    <RiArrowDropDownLine className=" text-2xl font-light " />
                  </div>

                  <div className="origin-top-right absolute left-0 mt-4">
                    {isOpen && (
                      <div className="z-50 flex mt-2 md:w-[300px] text-black shadow-lg bg-transparent ring-1 ring-black ring-opacity-5">
                        {/* Dropdown content goes here */}
                        <div className="">
                          <Link
                            href="/services/translation-localization"
                            onClick={closeDropdown}
                            className="  flex w-full "
                          >
                            <span
                              className={`cursor-pointer  hover:text-[#ffffff] `}
                            ></span>

                            <ul className="hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center">
                              <li
                                className={`${
                                  activeItem === "services" &&
                                  "text-black hover:text-[#f6f6f6] "
                                }`}
                                onClick={() => handleItemClick("services")}
                              >
                                TRANSLATION & LOCALIZATION
                              </li>
                              <BsArrowRight className="font-bold text-lg  " />
                            </ul>
                          </Link>

                          <Link
                            href="/services/subtitling"
                            onClick={closeDropdown}
                            className="flex w-full "
                          >
                            <ul className="hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center">
                              <li
                                className={`${
                                  activeItem === "services" &&
                                  "text-black hover:text-[#f6f6f6]"
                                }`}
                                onClick={() => handleItemClick("services")}
                              >
                                SUBTITLING
                              </li>
                              <BsArrowRight className="font-bold text-lg  " />
                            </ul>
                          </Link>

                          <Link
                            href="/services/voiceover-dubbing"
                            onClick={closeDropdown}
                            className="flex w-full"
                          >
                            <ul className="hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center">
                              <li
                                className={`${
                                  activeItem === "services" &&
                                  "text-black hover:text-[#f6f6f6]"
                                }`}
                                onClick={() => handleItemClick("services")}
                              >
                                VOICEOVER & DUBBING
                              </li>
                              <BsArrowRight className="font-bold text-lg  " />
                            </ul>
                          </Link>

                          <Link
                            href="/services/interpretation"
                            onClick={closeDropdown}
                            className="flex w-full"
                          >
                            <ul className="hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center">
                              <li
                                className={`${
                                  activeItem === "services" &&
                                  "text-black hover:text-[#f6f6f6]"
                                }`}
                                onClick={() => handleItemClick("services")}
                              >
                                INTERPRETATION
                              </li>
                              <BsArrowRight className="font-bold text-lg  " />
                            </ul>
                          </Link>

                          <Link
                            href="/services/transcription"
                            onClick={closeDropdown}
                            className="flex w-full"
                          >
                            <ul className="hover:translate-x-2 md:w-[300px] shadow-lg cursor-pointer text-black px-2 hover:text-[#f6f6f6]  p-3 hover:bg-[#100f13] bg-[#ffffff] ring-1 ring-black ring-opacity-5  list-none flex  gap-2 transition-all duration-200 items-center">
                              <li
                                className={`${
                                  activeItem === "services" &&
                                  "text-black hover:text-[#f6f6f6]"
                                }`}
                                onClick={() => handleItemClick("services")}
                              >
                                TRANSCRIPTION
                              </li>
                              <BsArrowRight className="font-bold text-lg  " />
                            </ul>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Link href="/blog">
                <span
                  className={`cursor-pointer py-4 nav text-[#f6f6f6] font-medium px-2 hover:text-[#eb5a00] ${
                    activeItem === "blog" && "border-b-2 border-[#eb5a00]"
                  }`}
                  onClick={() => handleItemClick("blog")}
                >
                  BLOG
                </span>
              </Link>

              <Link href="/contact-us">
                <span
                  className={`cursor-pointer py-4 nav font-medium text-[#f6f6f6] px-2 hover:text-[#eb5a00] ${
                    activeItem === "contact-us" &&
                    " border-b-2 border-[#eb5a00]"
                  }`}
                  onClick={() => handleItemClick("contact-us")}
                >
                  CONTACT US
                </span>
              </Link>
            </div>

            <div className="">
              <Link href="/services/translation-localization">
                <button className="hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
                  <span
                    onClick={() => handleItemClick("services")}
                    className={`${
                      activeItem === "services" && "border-b-2 border-[#eb5a00]"
                    } p-2 text-white quotes  border-2 bg-transparent  border-[#eb5a00] font-medium  `}
                  >
                    GET QUOTES
                  </span>
                </button>
              </Link>
            </div>

            {/* <SearchBar /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
