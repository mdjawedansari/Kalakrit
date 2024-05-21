import React from "react";

const HelpingHand = () => {
  return (
    <>
      <div className="py-20">
        <img src="/services/translation/helpGraph.svg" alt="" />
      </div>

      <div className="py-20 w-full h-auto font-Poppins  text-black  ">
        <div className=" flex ">
          <div className="w-11/12 m-auto">
            <div className=" p-10  bg-[url('/services/translation/help-bg.png')] bg-no-repeat bg-cover bg-blend-saturation">
              <h1 className="text-[100px] text-[#f6f6f6cf] leading-tight font-Oswald xl:pl-44 pt-4 font-black w-3/4 ">
                Let us know how we can assist you.
              </h1>
            </div>

            <div className="w-full m-auto text-[#000000]  py-10 flex flex-wrap">
              <div className="w-full flex">
                <div className="w-2/6 full bg-[#201f22] transition-all duration-500   p-6 flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold text-center ">
                    <span className="text-[#eb5a00] pr-1">Domain Specific</span>
                  </h1>
                  <h3 className="text-md text-[#f6f6f6d8] font-light ">
                    Since there are numerous types of translations and numerous
                    terminologies that are used, it can be challenging for
                    people to understand these concepts. Thus,we have
                    established distinct domains and trained our staff according
                    to each domain so that the appropriate service can be
                    offered in accordance with the target consumer.
                  </h3>
                </div>

                <div className="w-2/6 full bg-[#40352F] transition-all duration-500   p-6 flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold text-center">
                    <span className="text-[#eb5a00] px-1">
                      Multiple reviews
                    </span>
                  </h1>
                  <h3 className="text-md text-[#f6f6f6d8] font-light">
                    Our customer support staff ensures that the final deliveries
                    are of the utmost quality ,and if necessary, we provide
                    numerous rounds of reviews in accordance with the client's
                    preference until the desired result is obtained.
                  </h3>
                </div>

                <div className="w-2/6 full bg-[#eb5a00] transition-all duration-500   p-6 flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold text-center text-[#ffffff]">
                    Native{" "}
                    <span className="text-[#000000] px-1">Linguists </span> -
                  </h1>
                  <h3 className="text-md text-[#ffffff] font-light ">
                    Native linguists have a larger vocabulary than "ordinary"
                    translators, therefore the text would flow more naturally
                    and contain a wider range of words. As a result, we work
                    directly with native linguists, a ground-level resource,
                    enabling us to cut out middlemen and significantly lower the
                    cost of services .
                  </h3>
                </div>

                <div className="w-2/6 full bg-[#eb5a00e9] transition-all duration-500   p-6 flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold text-center text-[#ffffff]">
                    Native
                    <span className="text-[#000000] px-1">Linguists </span> -
                  </h1>
                  <h3 className="text-md text-[#ffffff] font-light">
                    Native linguists have a larger vocabulary than "ordinary"
                    translators, therefore the text would flow more naturally
                    and contain a wider range of words. As a result, we work
                    directly with native linguists, a ground-level resource,
                    enabling us to cut out middlemen and significantly lower the
                    cost of services .
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpingHand;
