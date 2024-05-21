import React from "react";
import Image from "next/image";

const DomainSpecific = () => {
  return (
    <>
      <div className="bg-[#100f13] py-8">
        <div className="w-full md:w-10/12 m-auto h-auto flex overflow-hidden">
          <div className="w-full lg:w-1/2 bg-[url('/services/interpretation/star.png')]  h-auto bg-no-repeat bg-top ">
            <div className="w-full pt-6 px-6">
              <h1 className="text-2xl font-semibold text-[#ffffff]">
                Domain Specific
              </h1>
              <h3 className="text-[#f6f6f6] text-xl py-10 leading-normal">
                Since there are numerous types of interpretation and numerous
                terminologies that are used, it can be challenging for people to
                understand these concepts. Thus,we have established distinct
                domains and trained our staff according to each domain so that
                the appropriate service can be offered in accordance with the
                target consumer.
              </h3>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-auto bg-[url('/services/interpretation/domainSpecific_card.png')] bg-no-repeat bg-cover ">
            <div>
                <Image className="lg:w-3/4 pl-6 h-auto mb-10" src="/services/interpretation/domainSpecific.svg" alt="nsja" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainSpecific;
