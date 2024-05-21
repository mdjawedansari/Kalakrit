import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#100f13] py-8 lg:py-20 flex">
        <div className="xl:w-1/2 lg:w-3/4 md:w-3/4 w-11/12 sm:h-auto h-[auto] m-auto flex gap-6 md:gap-8 lgLgap-10 xl:gap-12 flex-col  sm:justify-center">
          <div className="flex  sm:w-11/12 m-auto ">
            <h1 className="font-medium text-center lg:text-6xl md:text-4xl sm:text-2xl  text-2xl text-[#f6f6f6] drop-shadow-2xl">
              Want to know how we can help your business?
            </h1>
          </div>

          <div className="flex flex-col sm:gap-4 md:flex-row justify-center items-center ">
          <div>
          <h1 className="text-[#f6f6f6] font-normal lg:text-3xl md:text-xl text-md">
            Reach us:
            <span className="text-[#eb5a00]"> contact@kalakrit.in</span>
          </h1>
          </div>
            <Link
              href="/contact-us"
              className="bg-[#eb5a00] lg:text-3xl w-fit mt-8 sm:mt-0 md:text-xl text-md text-[#ffffff] font-normal rounded-sm shadow-sm md:p-2.5 p-1.5 hover:bg-transparent hover:border  "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;