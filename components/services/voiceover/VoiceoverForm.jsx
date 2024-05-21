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

const VoiceoverForm = () => {
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
      <div className="w-full bg-[url('/services/transcription/form.png')]  bg-cover bg-no-repeat flex justify-around flex-wrap md:flex-nowrap sm:flex-wrap py-20">
        <div className="md:w-1/3 sm:w-full py-20 w-full">
          <div className="md:w-2/5 w-4/5 m-auto space-y-3">
            <h1 className="md:text-4xl text-xl font-bold">
              <span className="text-[#f6f6f6]">reach out</span>
              <span className="text-[#EB5A00]"> to us.</span>
            </h1>
            <h1 className="text-[#100f13] text-xl ">Fill the form</h1>
          </div>
          <div className="content mt-10 md:w-2/5 w-4/5 m-auto space-y-6">
            <div className="im1 space-x-4  flex">
              <div className="text-2xl">
                <ImPhone className="text-[#100f13]" />
              </div>
              <div>
                <p className="text-[#f6f6f6] ">+91 7011845899</p>
              </div>
            </div>
            <div className="im1 space-x-4 flex">
              <div className="text-2xl">
                <MdEmail className="text-[#100f13] " />
              </div>
              <div>
                <p className="text-[#f6f6f6] ">contact@kalakrit.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* ................................ */}


        <div className="md:w-1/2 sm:w-4/5 w-full text-[#100f13] py-8 px-8 bg-transparent ">
          <form className="w-full placeholder-[#f6f6f6] space-y-4">
          <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Conmpany Name*"
                className="md:w-10/12 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-4 md:space-x-4 space-y-4">
                <input
                type="text"
                placeholder="Full Name*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
              <input
                type="email"
                placeholder="Email*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Contact*"
                className="md:w-10/12 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Language Number of Characters*"
                className="md:w-10/12 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 md:space-x-4 w-full space-y-4">
              <input
                type="text"
                placeholder="Domain*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
              <input
                type="text"
                placeholder="Voice Type*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 md:space-x-4 w-full space-y-4">
              <input
                type="text"
                placeholder="Need Translation?*"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
              <input
                type="text"
                placeholder="Usage Rights *"
                className="md:w-2/5 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Screen Sync or Normal Voice Over *"
                className="md:w-10/12 w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Final Deliverable Format *"
                className="md:w-10/12  w-full focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] placeholder:text-sm p-2 rounded-full opacity-70 border-[#f6f6f6]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <textarea
                placeholder="Messages"
                className="text-[#100f13] w-5/6 rounded-md h-auto focus:outline-none border-b-2 bg-[#f6f6f6] placeholder-[#100f13] p-2 opacity-70 "
                rows={6}
              ></textarea>
            </div>
            <div className="md:mt-6 w-full">
              <button className="p-4 bg-[#100f13] opacity-80 text-[#f6f6f6] rounded-full px-10 hover:bg-[#100f13a1] font-semibold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VoiceoverForm;