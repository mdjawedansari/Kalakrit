"use client";
import React, { useRef } from "react";
import contactUs from "@/backend/action";
import { HiLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (formData) => {
    try {
      const email = formData.get("email");
      if (validateEmail(email)) {
        const res = await contactUs({
          fullName: formData.get("fullName"),
          phoneNumber: formData.get("phoneNumber"),
          email: formData.get("email"),
          message: formData.get("message"),
        });

        console.log(res);
        formRef.current.reset();
        if (res.statusbar === "success") {
          toast.success(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.statusbar === "info") {
          toast.info(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.warn === "warn") {
          toast.warn(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.statusbar === "error") {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("enter a valid email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      toast.error(e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="w-full bg-[#100F13]">
      <div className="md:w-10/12 w-full m-auto h-auto font-Poppins">
        <div className="image lg:pt-20 sm-pt-20 full m-auto bg-[#100F13] md:h-auto border-b-2 border-[#F6F6F6a1] ">
          <div className="w-11/12 m-auto">
            <div className="flex justify-end 1">
              <div className="row1 w-3/4 justify-between flex">
                <div className="img1">
                  <img
                    src="/contactus/Ellipse 127.png"
                    alt=""
                    className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                  />
                </div>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 129.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px] md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
            <div className="row2 w-1/2 lg:w-1/2 md:w-2/3 m-auto  flex justify-between relative">
              <div className="img1">
                <img
                  src="/contactus/Ellipse 130.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px] md:h-[100px] md:w-[100px]"
                />
              </div>
              <div className="xl:text-5xl lg:text-4xl md:text-3xl text-lg   text-[#FFFFFF] flex items-center justify-center">
                <span className="xl:-ml-36 lg:-ml-28 md:-ml-20 -ml-10 font-bold md:-mt-12">
                  Contact Us
                </span>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 128.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] lg:-mt-16 md:-mt-10 -mt-4 md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-start 1">
              <div className="row1 w-3/4 justify-between flex">
                <div className="img1">
                  <img
                    src="/contactus/Ellipse 132.png"
                    alt=""
                    className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                  />
                </div>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 133.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-3/4 w-11/12 m-auto">
          <div className="content bg-[#100F13] w-full m-auto pt-20 space-y-10">
            <div className="lg:text-5xl md:text-3xl text-2xl border-b-2 border-[#F6F6F6a1] text-white py-6">
              <span>Let's Discuss</span>
            </div>
            <div className=" border-b-2 border-[#F6F6F6a1] text-white flex flex-wrap md:flex-no-wrap">
              <div className="md:w-1/2 w-full">
                <h1 className="lg:text-5xl md:text-3xl text-2xl border-b-2 md:border-none py-5 md:py-0 border-[#F6F6F6a1]">
                  Your Project
                </h1>
              </div>
              <div className="md:w-1/2 w-full flex flex-col space-y-3 py-8 md:py-3">
                <span className="text-sm">or start a conversation</span>
                <span className="md:text-xl text-base  text-[#EB5A00] ">
                  contact@kalakrit.in | +91742836081
                </span>
              </div>
            </div>
          </div>
          <div className="last w-full bg-[#100F13] h-auto m-auto flex justify-between flex-wrap mmd:flex-no-wrap py-4">
            <div className="left md:w-2/6 pr-4 w-full flex flex-col justify-center items-center h-auto">
              <div className="">
                <div className="flex">
                  <div className="space-y-2">
                    <div className="flex space-x-3">
                      <HiLocationMarker className="text-[#EB5A00] md:text-3xl text-2xl" />
                      <span className="text-[#EB5A00] md:text-2xl text-lg">
                        Gurugram Office
                      </span>
                    </div>
                    <p className="text-[#F6F6F6] md:text-base text-sm">
                      B198 Shushant Lok 1, Sector 43, Gurugram, Haryana, India
                    </p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="space-y-2">
                    <div className="flex space-x-3">
                      <HiLocationMarker className="text-[#EB5A00] md:text-3xl text-2xl" />
                      <span className="text-[#EB5A00]  md:text-2xl text-lg">
                        Delhi Office
                      </span>
                    </div>
                    <p className="text-[#F6F6F6] md:text-base text-sm">
                      498/5 Mehrauli New Delhi, 110030, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* .....................form .................. */}
            <div className="right md:w-3/6 w-full">
              <form action={handleSubmit} ref={formRef} className="mt-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="block py-2.5 px-0 w-full text-sm text-[#F6F6F6] bg-transparent border-0 border-b-2 border-[#F6F6F6] appearance-none  dark:focus:border-[#F6F6F6] focus:outline-none focus:ring-0 focus:border-[#F6F6F6] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="full_name"
                    className="peer-focus:font-medium absolute text-sm text-[#F6F6F6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F6F6F6]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phone_number"
                    className="block py-2.5 px-0 w-full text-sm text-[#F6F6F6] bg-transparent border-0 border-b-2 border-[#F6F6F6] appearance-none  dark:focus:border-[#F6F6F6] focus:outline-none focus:ring-0 focus:border-[#F6F6F6] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone_number"
                    className="peer-focus:font-medium absolute text-sm text-[#F6F6F6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F6F6F6]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-[#F6F6F6] bg-transparent border-0 border-b-2 border-[#F6F6F6] appearance-none  dark:focus:border-[#F6F6F6] focus:outline-none focus:ring-0 focus:border-[#F6F6F6] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="full_name"
                    className="peer-focus:font-medium absolute text-sm text-[#F6F6F6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F6F6F6]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <textarea
                    id="message"
                    name="message"
                    className="block py-2.5 px-0 w-full text-sm text-[#F6F6F6] bg-transparent border-0 border-b-2 border-[#F6F6F6] dark:focus:border-[#F6F6F6] focus:outline-none focus:ring-0 focus:border-[#F6F6F6] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-[#F6F6F6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F6F6F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tell us about your project or anything you wish *
                  </label>
                </div>
                <div className="mb-6 relative z-0 w-full group">
                  <button className="py-4 px-12 bg-[#EB5A00] font-semibold text-[#FFFFFF]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
