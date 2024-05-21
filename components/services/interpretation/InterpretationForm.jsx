"use client";

import React, { useState } from "react";
import { ImPhone } from "react-icons/im";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

const initialState = {
  fName: "",
  lName: "",
  email: "",
};

const InterpretationForm = () => {
  const [form, setForm] = useState(initialState);
  const { fName, lName, email } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initialState);
  };
  return (
    <>
      <div className="w-full bg-[#100f13] flex justify-around flex-wrap md:flex-nowrap sm:flex-wrap py-20">
        <div className="md:w-1/3 sm:w-full py-20 w-full">
          <div className="md:w-2/5 w-4/5 m-auto space-y-3">
            <h1 className="md:text-4xl text-xl font-bold">
              <span className="text-[#f6f6f6]">reach out</span>{" "}
              <span className="text-[#EB5A00]">to us.</span>
            </h1>
            <h1 className="text-[#f6f6f6] text-xl font-thin">Fill the form</h1>
          </div>
          <div className="content mt-10 md:w-2/5 w-4/5 m-auto space-y-6">
            <div className="im1 space-x-4  flex">
              <div className="text-2xl">
                <ImPhone className="text-[#f6f6f6]" />
              </div>
              <div>
                <p className="text-[#f6f6f6] font-thin">+91 7011845899</p>
              </div>
            </div>
            <div className="im1 space-x-4 flex">
              <div className="text-2xl">
                <MdEmail className="text-[#f6f6f6] font-thin" />
              </div>
              <div>
                <p className="text-[#f6f6f6] font-thin">contact@kalakrit.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* ...............form................. */}

        <div className="md:w-1/2 sm:w-4/5 w-full text-[#f6f6f6] py-8 px-8 bg-[#201f22]">
          <form className="w-full placeholder-[#f6f6f6] space-y-4">
            <div className="md:mt-6 md:space-x-20 space-y-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6] "
              />
              <input
                type="email"
                placeholder="Email*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 w-full">
              <input
                type="text"
                placeholder="Contact*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 w-full">
              <input
                type="text"
                placeholder="Language Number of Characters*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 md:space-x-20 w-full space-y-4">
              <input
                type="text"
                placeholder="Domain*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
              <input
                type="text"
                placeholder="Transcription Type*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 md:space-x-20 w-full space-y-4">
              <input
                type="text"
                placeholder="Need Translation?*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
              <input
                type="text"
                placeholder="Time Codes*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 w-full">
              <input
                type="text"
                placeholder="Subtitles*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 w-full">
              <input
                type="text"
                placeholder="Final Deliverable Format*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
              />
            </div>
            <div className="md:pt-6 w-full">
              <textarea
                placeholder="Messages"
                className="text-[#f6f6f6] w-5/6 h-auto focus:outline-none border-b-2 border-[#f6f6f6a1] bg-[#201f22] placeholder-[#f6f6f6]"
                rows={6}
              ></textarea>
            </div>
            <div className="md:pt-6 w-full">
              <button className="p-4 bg-[#EA5F00] font-semibold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InterpretationForm;
