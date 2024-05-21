"use client";

import React from "react";
// import { useState } from 'react';

const AboutUsForm = () => {
  return (
    <>
      <div className="frmr md:w-1/2 w-full font-Poppins">
        <form className="mt-6 bg-[#ffffff] border-2 p-4 space-x-2">
          <div className="flex flex-col">
            <div className="lg:flex lg:space-x-2 flex-none lg:w-full">
              <input
                className="border-b-2 lg:w-1/2 p-2 focus:outline-none "
                type="text"
                placeholder="Name"
                id="name"
                // value={name}
                autocomplete="off"
                // onChange={(e)=>{setName(e.target.value)}}
                required
              />
              <input
                className="border-b-2  mt-6 lg:mt-0 lg:w-1/2 p-2 focus:outline-none"
                type="text"
                autocomplete="off"
                // value={email}

                // onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Email Address"
                required
              />
            </div>
            <textarea
              className="mt-4 border-b-2 p-2  focus:outline-none"
              placeholder="message"
              //   value={msg}
              //   onChange={(e)=>{setMsg(e.target.value)}}
              rows={10}
              cols={47}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="md:p-4 p-3 sm:p-3 mt-3   bg-[#100f13] hover:bg-[#201f22] text-[#f6f6f6] hover:text-[#eb5a00]">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutUsForm;
