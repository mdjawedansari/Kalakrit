"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hwch = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="text-[#f6f6f6] bg-[#100f13] py-20">
        <h1 className="text-center py-10">
          <span className="border-b-2 text-[#eb5a00] border-b-[#eb5a00]  text-4xl ">
            How we
          </span>
          can help
        </h1>
        <div className="bg-[#100f13] py-16">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-20 m-auto"
          >
            <div className="border-2 p-8 rounded-xl  border-[#f6f6f6] text-[#ffffff] overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b ">
              <h1 className="text-center  text-2xl  py-4 font-semibold">
                Domain Specific
              </h1>
              <h3 className="text-[#f6f6f6]  text-md text-center font-thin">
                Since there are numerous types of translations and numerous
                terminologies that are used, it can be challenging for people to
                understand these concepts. Thus, we have established distinct
                domains and trained our staff according to each domain so that
                the appropriate service can be offered in accordance with the
                target consumer.
              </h3>
            </div>

            <div className="border-2 p-8 rounded-xl border-[#f6f6f6] text-[#ffffff] overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b">
              <h1 className="text-center  text-2xl  py-4 font-semibold">
                Direct Resource
              </h1>
              <h3 className="text-[#f6f6f6]  text-md text-center font-thin">
                We deal with voice actors directly, either those who have access
                to professional home studios or those who can record in the
                studios we provide. This ultimately results in significant cost
                savings and shortens the project's competition period.
              </h3>
            </div>

            <div className="border-2 p-8 rounded-xl border-[#f6f6f6] text-[#ffffff] overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b">
              <h1 className="text-center  text-2xl  py-4 font-semibold">
                Native Linguists
              </h1>
              <h3 className="text-[#f6f6f6]  text-md text-center font-thin">
                Native linguists have a larger vocabulary than "ordinary"
                translators, therefore the text would flow more naturally and
                contain a wider range of words. As a result, we work directly
                with native linguists, a ground-level resource, enabling us to
                cut out middlemen and significantly lower the cost of services.
              </h3>
            </div>

            <div className="border-2 p-8 rounded-xl border-[#f6f6f6] text-[#ffffff] overflow-hidden hover:bg-transparent hover:border-[#EB5A00] shadow-md bg-opacity-30 backdrop-blur-md bg-gray-100 border-b">
              <h1 className="text-center  text-2xl  py-4 font-semibold">
                Multiple reviews
              </h1>
              <h3 className="text-[#f6f6f6]  text-md text-center font-thin">
                Our customer support staff ensures that the final deliveries are
                of the utmost quality ,and if necessary, we provide numerous
                rounds of reviews in accordance with the client's preference
                until the desired result is obtained.
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hwch;
