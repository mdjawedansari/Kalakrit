import React from "react";

const Category = () => {
  return (
    <>
      <div className="bg-[#FAD7C2]">
        <div className="w-full flex ">
          <div className="w-full md:w-3/5  ">
            <h1 className="font-bold text-4xl py-8 text-[#eb5a00] text-center">
              Categories Of Voice Overs
            </h1>
            <div className="w-full md:w-10/12 m-auto md:h-[540px] p-16 flex flex-wrap gap-10 scrollbar category overflow-scroll">
              <div className="w-full md:w-11/12 m-auto items bg-[#ffffff] p-10 rounded-md ">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Animated Videos</h1>
                <h3 className="text-md">
                  Listening to animated videos, one thing that comes the most to
                  one's mind is “Voice Actor”. We provide best-in-class VO
                  Actors.
                </h3>
              </div>

              <div className="w-full  md:w-11/12 m-auto  items bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Commercials</h1>
                <h3 className="text-md">
                  Promoting a product or service in the form of an advertisement
                  that is presented on television, radio, web, or social.
                  Typically, in the 15, 30, and 60-second formats
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Narration</h1>
                <h3 className="text-md">
                  Promoting a product or service in the form of an advertisement
                  that is presented on television, radio, web, or social.
                  Typically, in the 15, 30, and 60-second formats.
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Video Games</h1>
                <h3 className="text-md">
                  We have a variety of voices with different tonalities that are
                  selected as per the target audience in order to give the
                  character the book needs.
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">E-Learning</h1>
                <h3 className="text-md">
                  We can support everything starting from games on the home
                  consoles like Xbox, PlayStation and Nintendo to Mobile and PC
                  games.
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Corporate</h1>
                <h3 className="text-md">
                  Corporate voice-over is often used to help train new employees
                  or offer in-depth tutorials/explanations for specific jobs.
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Audiobooks</h1>
                <h3 className="text-md">
                  Corporate voice-over is often used to help train new employees
                  or offer in-depth tutorials/explanations for specific jobs.
                </h3>
              </div>

              <div className="w-full items  md:w-11/12 m-auto bg-[#ffffff] p-10 rounded-md">
                <img
                  className="w-12 h-12 -ml-16 -mt-16 shadow-2xl"
                  src="/services/voiceover/animated video.png"
                />
                <h1 className="text-xl font-semibold py-4">Mimicry</h1>
                <h3 className="text-md">
                  These are used in comic videos, youtube videos etc. Kalakrit
                  offers a wide range of mimicry artists for all famous
                  celebrities Indian and international.
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5  bg-[url('/services/voiceover/category.png')] bg-no-repeat bg-center "></div>
        </div>
      </div>
    </>
  );
};

export default Category;
