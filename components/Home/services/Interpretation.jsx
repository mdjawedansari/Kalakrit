import React from "react";
import "./services.css";

const Interpretation = () => {


  return (
    <>
      <div className="text-sm  sm:px-4 py-8 xl:py-20 overflow-hidden font-Poppins  w-full flex flex-wrap gap-6">
        <div className="w-full ">
          <div className="w-full md:w-11/12 px-2">
            <h2 className="py-4 w-1/2 xl:w-1/2 text-lg xl:text-xl  text-[#eb5a00]">
              Interpretation
            </h2>
            <h1 className=" text-2xl xl:text-4xl font-Poppins text-bold text-[#ffffff]">
              We help the world communicate better
            </h1>
            <h3 className="flex flex-col gap-2 py-6 text-md xl:text-md  text-[#f6f6f6a1]">
              <h1>
                A person who translates one language into another is called an
                interpreter because they are explaining what a person is saying
                to someone who doesn't understand. The process of translating
                from one language to another verbally and explaining to people
                at the same time is called Interpretation
              </h1>
              <li>
                Simultaneous Interpretation -Consecutive interpretation is
                commonly used in small meetings and legal proceedings, including
                arbitrations, depositions, hearings, and trials. In this
                real-time interpretation method, the speaker pauses every few
                sentences and allows the interpreter to translate.
              </li>
              <li>
                Consecutive interpretation - While in consecutive interpretation
                the interpreter translates once the speaker stops speaking, in
                simultaneous interpreting the interpreter translates while the
                speaker is talking. Since this type of translation occurs in
                real-time, the interpreter quickly digests what the speaker is
                saying and immediately translates it into another language.
              </li>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interpretation;
