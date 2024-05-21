"use client";
import React, { useRef, useState } from "react";
import { team } from "@/app/about-us/team/team";
import "./team.css"; // Import your CSS file here

const OurTeam = () => {
  const [flipCard, setFlipCard] = useState(false);
  const teamRef = useRef(null);
  
  const handleCardFlip = () => {
    setFlipCard(true);
  };

  const handleCardLeave = () => {
    setFlipCard(false);
  };

  return (
    <>
      <div className="py-12 w-3/4 m-auto">
        <h1 className="text-center text-4xl font-semibold py-10">Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team?.map((member) => (
            <div key={member.id} ref={teamRef} className={`relative group w-64 h-96 cursor-pointer `} >
              <div className="">
              <div
                onMouseEnter={handleCardFlip}
                onMouseLeave={handleCardLeave}
                 className={`${flipCard && " " }`}>
                  <div className="front">
                    <div className="w-64 h-80 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-60 text-white p-2">
                        <p className="text-xl text-center font-semibold">{member.name}</p>
                        <p className="text-sm text-center">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
