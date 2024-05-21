"use client";

import ButtonGroup from "@/components/ButtonGroup";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { blog } from "./TranslationBlogData";


const CategoryCarousel = ({ blog }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
    <div className="w-full bg-[#201f22] py-20">
      <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        showThumbs={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        className="w-11/12 flex gap-6 m-auto  overflow-hidden "
      >
        <>
          <div className="flex ">
            <div className="flex flex-wrap gap-4 px-6 justify-center items-center">
              <div className="w-full sm:w-[310px] lg:w-[300px]   sm:h-[180px] lg:h-[200px]  sm:m-auto">
                <Image
                  className=" sm:w-full lg:w-full   sm:h-full w-full"
                  src="/blog/aipower.webp"
                  alt="jksdjkasj"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-sm font-normal  w-full text-left text-[#eb5a00]">
                voice Over & Dubbing
              </h1>
              <Link href={`/blog`}>
                <h3 className=" w-[300px] sm:w-[310px] lg:w-[300px] h-[80px] py-1 text-[#f6f6f6] text-sm font-semibold font-sourceSans border-r cursor-pointer hover:text-[#eb5a00] hover:underline underline-white  underline-offset-4">
                  How to the target your job description to get the right talent
                </h3>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 px-6 justify-center items-center">
              <div className="w-full sm:w-[310px] lg:w-[300px]   sm:h-[180px] lg:h-[200px] sm:m-auto">
                <Image
                  className=" sm:w-full lg:w-full   sm:h-full w-full"
                  src="/blog/audio.webp"
                  alt="jksdjkasj"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-sm font-normal w-full  text-left text-[#eb5a00]">
                voice Over & Dubbing
              </h1>
              <Link href={`/blog`}>
                <h3 className=" w-[300px] sm:w-[310px] lg:w-[300px] h-[80px] py-1 text-[#f6f6f6] text-sm font-semibold font-sourceSans border-r cursor-pointer hover:text-[#eb5a00] hover:underline underline-offset-4">
                  How to the target your job description to get the right talent
                </h3>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 px-6 justify-center items-center">
              <div className="w-full sm:w-[310px] lg:w-[300px]   sm:h-[180px] lg:h-[200px] sm:m-auto">
                <Image
                  className=" sm:w-full lg:w-full   sm:h-full w-full"
                  src="/blog/audrec.webp"
                  alt="jksdjkasj"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-sm w-full font-normal  text-left text-[#eb5a00]">
                voice Over & Dubbing
              </h1>
              <Link href={`/blog`}>
                <h3 className=" w-[300px] sm:w-[310px] lg:w-[300px] h-[80px] py-1 text-[#f6f6f6] text-sm font-semibold font-sourceSans border-r cursor-pointer hover:text-[#eb5a00] hover:underline underline-offset-4">
                  How to the target your job description to get the right talent
                </h3>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 px-6 justify-center items-center">
              <div className="w-full sm:w-[310px] lg:w-[300px]   sm:h-[180px] lg:h-[200px] sm:m-auto">
                <Image
                  className=" sm:w-full lg:w-full   sm:h-full w-full"
                  src="/blog/best.webp"
                  alt="jksdjkasj"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-sm w-full font-normal  text-left text-[#eb5a00]">
                voice Over & Dubbing
              </h1>
              <Link href={`/blog`}>
                <h3 className=" w-[300px] sm:w-[310px] lg:w-[300px] h-[80px] py-1 text-[#f6f6f6] text-sm font-semibold font-sourceSans border-r cursor-pointer hover:text-[#eb5a00] hover:underline underline-offset-4">
                  How to the target your job description to get the right talent
                </h3>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 px-6 justify-center items-center">
              <div className="w-full sm:w-[310px] lg:w-[300px]   sm:h-[180px] lg:h-[200px] sm:m-auto">
                <Image
                  className=" sm:w-full lg:w-full   sm:h-full w-full"
                  src="/blog/content.webp"
                  alt="jksdjkasj"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-sm w-full font-normal  text-left text-[#eb5a00]">
                voice Over & Dubbing
              </h1>
              <Link href={`/blog`}>
                <h3 className=" w-[300px] sm:w-[310px] lg:w-[300px] h-[80px] py-1 text-[#f6f6f6] text-sm font-semibold font-sourceSans border-r cursor-pointer hover:text-[#eb5a00] hover:underline underline-offset-4">
                  How to the target your job description to get the right talent
                </h3>
              </Link>
            </div>
          </div>
        </>
      </Carousel>
    </div>
    </>
  );
};

export default CategoryCarousel;
