"use client";

import React from "react";
import { data } from "./client";

const Case = ({ activeButton }) => {

    const filteredData = data.filter((item) => activeButton === item.name);
  return (
    <>
      <div className="bg-[#100F13] text-[#F6F6F6] py-6 pb-20">
        <div className="w-10/12 m-auto  ">
          {filteredData.map((item) => (
            <div key={item.id} className="space-y-6">
              <img
                src={item.img}
                width={200}
                height={200}
                alt="this is image"
              />
              <div className="space-y-3 py-6 w-full lg:w-1/2">
                <h1 className="md:text-3xl text-xl font-semibold text-white">
                  Client
                </h1>
                <p className="md:text-md text-base text-[#f6f6f6] ">
                  {item.client}
                </p>
              </div>
              <div className="space-y-3 w-full lg:w-1/2">
                <h1 className="md:text-3xl text-xl font-semibold">
                  Requirement
                </h1>
                <p className="md:text-md text-base text-[#f6f6f6] ">
                  {item.requirement}
                </p>
              </div>
              <div className="space-y-3 py-6 w-full lg:w-1/2">
                <h1 className="md:text-3xl text-xl font-semibold">Solution</h1>
                <p className="md:text-md text-base text-[#f6f6f6] ">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Case;
