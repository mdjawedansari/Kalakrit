import Link from "next/link";
import React from "react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const Careers = () => {
  return (
    <>
      <div className="w-full bg-[#100F13] pb-6 font-Poppins">
        <div className="bg-[url('/about/career/career.jpg')] md:h-[480px] h-[300px] backdrop-blur-sm opacity-60 md:w-11/12 w-full bg-center m-auto md:bg-cover bg-no-repeat flex items-center justify-center">
          <div className="space-y-3 backdrop-blur-sm m-auto lg:w-1/3 md:w-1/2 w-11/12">
            <h1 className="text-white md:text-5xl text-xl font-bold  text-center">
              Come Grow With Us
            </h1>
            <h1 className="text-[#ffffff]  text-center text-sm md:text-base">
              If you love to make a difference,and have fun while at it, reach
              out to us and join our great country
            </h1>
          </div>
        </div>

        <div className="w-full md:w-10/12 m-auto text-[#f6f6f6a1] py-20">
          <h1 className="text-5xl font-Poppins ">Build a future you believe in</h1>
          <h2 className="w-full md:w-3/4 lg:w-1/2 py-4 text-lg">We're here for your big leaps. To make space for you to try new things. And to create opportunities for you to grow your career.</h2>
        </div>


        <form className="md:w-3/5 w-full mx-auto mt-6 md:pb-12 lg:pb-20 bg-[#100F13] p-4">
          <h1 className="text-center md:text-4xl text-xl py-4 text-[#FFFFFF]">
            Fill this form to <span className="text-[#EB5A00]">apply</span>
          </h1>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#F6F6F6] "
            >
              Full Name*
            </label>
            <input
              type="text"
              id="full_name"
              className="bg-[#100F13] border border-[#F6F6F6] focus:outline-none text-[#F6F6F6] text-sm rounded-full block w-full p-2.5 dark:text-white "
              placeholder=""
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#F6F6F6] dark:text-white"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#100F13] border border-[#F6F6F6] focus:outline-none text-[#F6F6F6] text-sm rounded-full block w-full p-2.5 dark:text-white "
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block mb-2 text-sm font-medium text-[#F6F6F6] dark:text-white"
            >
              Mobile/Phone*
            </label>
            <input
              type="text"
              id="mobile"
              className="bg-[#100F13] border border-[#F6F6F6] focus:outline-none text-[#F6F6F6] text-sm rounded-full block w-full p-2.5 dark:text-white "
              required=""
            />
          </div>
          <div className="mb-6 flex space-x-3">
            <div className="bg-[#100F13]  text-[#F6F6F6] text-sm  block lg:w-1/4 w-full p-2.5 dark:text-white space-x-3">
              <input type="checkbox" />
              <span>Employee</span>
            </div>
            <div className="bg-[#100F13] text-[#F6F6F6] text-sm block lg:w-1/4 w-full p-2.5 dark:text-white space-x-3">
              <input type="checkbox" />
              <span>Freelancer</span>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-[#F6F6F6] "
            >
              Upload Resume/Portfolio*
            </label>
            <div className="max-w-xl ">
              <label className="flex justify-center bg-[#100F13] w-full h-40 px-4 transition border-2 border-[#F6F6F6] border-dashed rounded-sm appearance-none cursor-pointer  focus:outline-none">
                <span className="flex items-center space-x-2">
                  <div className="flex flex-col space-y-4 jutify-center items-center">
                    <span className="font-medium text-[#F6F6F6]">
                      Drag & Drop files here
                    </span>
                    <span className="font-medium text-[#F6F6F6]">or</span>

                    <div className="w-3/4 ">
                      <input
                        type="file"
                        name="file_upload"
                        className="text-[#F6F6F6a1] "
                      />
                    </div>
                  </div>
                </span>
              </label>
            </div>
          </div>

          <div className="mb-6 h-auto">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#F6F6F6] dark:text-white"
            >
              Message*
            </label>
            <textarea className="bg-[#100F13] max-h-80 overflow-scroll scrollbar     rounded-lg border border-[#F6F6F6] focus:outline-none text-[#F6F6F6] text-sm  block w-full p-10"></textarea>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="text-white bg-[#Eb5A00] focus:outline-none  font-medium  text-sm w-full sm:w-auto md:w-1/3 px-6 py-4 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Careers;
