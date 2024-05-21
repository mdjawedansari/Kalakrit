import React from "react";

const Vlog = () => {
  return (
    <>
      <div className="w-full h-auto mb-4 font-Poppins">
        <div className="md:ml-24 ml-5">
          <h1 className="font-normal md:text-2xl py-10 ">Featured Posts</h1>
        </div>

        <div className="m-auto w-11/12 mt-4 font-Poppins flex justify-around flex-wrap lg:no-wrap ">
          <div className="left lg:w-3/5 md:w-full w-full mb-10">
            <div><img src="/blog/voice cloning.webp" alt="this voice cloning" className="w-full h-auto" /></div>
            <div className="mt-3">
              <button className="p-2 bg-black text-white rounded-full">
                Voice cloning
              </button>
            </div>
            <h1 className="md:text-4xl text-xl font-bold mt-4">
              Voice Cloning: What It Is & How to Get Your Voice Cloned
            </h1>
            <p className="mt-4 md:text-xl text-sm">
              Have you ever wished you could clone your voice? Now there's no
              need to wish, because the era of voice cloning has arrived! In
              this blog post, we'll take a look at what voice cloning is and how
              you can get your very own voice clone. So read on to
            </p>
          </div>
          <div className="right lg:w-4/12 w-full md:w-full">
            <div className="flex flex-wrap md:no-wrap  ">
            <div className="w-full md:w-1/2 ">
            <img
              src="/blog/start.webp"
              alt="jhjhj"
              className="h-[200px]  m-auto"
              height={200}
              width={250}
            />
            </div>
              <div className="ml-4 mt-4 md:mt-0 md:w-2/5 w-full">
                <button className="p-2 bg-black text-white rounded-full">
                  Podcast Planning
                </button>
                <h1 className="font-bold md:text-2xl text-base mt-4">
                  How to Start a Podcast (Complete Guide for 2023)
                </h1>
              </div>
            </div>
            <div className="flex mt-8 flex-wrap md:no-wrap">
            <div className="w-full md:w-1/2">
            <img
                 src="/blog/aipower.webp"
                 alt="c sn s"
                 className="h-[200px]  m-auto"
                 height={200}
                 width={250}
               />
            </div>
              <div className="ml-4 mt-4 md:mt-0 w-full md:w-2/5">
                <button className="p-2 bg-black text-white rounded-full">
                  How to Create a Podcast
                </button>
                <h1 className="font-bold md:text-2xl text-base mt-4">
                  How to Create a Podcast with an AI-Powered Platform
                </h1>
              </div>
            </div>
            <div className="flex mt-8 flex-wrap md:no-wrap">
            <div className="w-full md:w-1/2">
            <img
              src="/blog/audio.webp"
              alt=""
              className="h-[200px] m-auto"
              height={200}
              width={250}
            />
            </div>
              <div className="ml-4 mt-4 md:mt-0 md:w-2/5 w-full">
                <button className="p-2 bg-black text-white rounded-full">
                  Convert Audio to Text{" "}
                </button>
                <h1 className="font-bold md:text-2xl text-base mt-4">
                  How to Convert Audio to Text?
                </h1>
              </div>
            </div>
          
            <div className="flex mt-8 flex-wrap md:no-wrap">
            <div className="w-full md:w-1/2">
            <img
                src="/blog/remote.webp"
                alt=""
                className="h-[200px] m-auto"
                height={200}
                width={250}
              />
            </div>  
            
              <div className="ml-4 mt-4 md:mt-0 w-full md:w-2/5">
                <button className="p-2 bg-black text-white rounded-full">
              Audio Recording
                </button>
                <h1 className="font-bold md:text-2xl text-base mt-4">
                10 Best Free Audio Recording and Editing Software
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-24 mt-8">
          <h1 className="font-bold text-2xl">Most Recent Posts</h1>
        </div>
        <div className="m-auto w-11/12 mt-4 flex justify-around md:nowrap flex-wrap">
          <div className="m1 md:w-1/4 w-full  mb-10 md:mb-1">
            <img src="/blog/mic.webp" alt="" className="h-auto w-[390px] m-auto" />
            <button className="p-2 bg-black text-white mt-4 rounded-full">
              Finance Podcasts
            </button>
            <h3 className="font bold text-2xl mt-4">
              10 Best Finance Podcasts To Listen To On Spotify
            </h3>
            <p className="mt-4">
              There is a wealth of insightful, analytical, and informative
              podcasts out there covering just about every topic. Almost all of
              the largest financial...
            </p>
          </div>
          <div className="m2 md:w-1/4 w-full mb-10 md:mb-1">
            <img src="/blog/headphone.webp" alt="" className="h-auto w-[390px] m-auto" />
            <button className="p-2 bg-black text-white mt-4 rounded-full">
              Finance Podcasts
            </button>
            <h3 className="font bold text-2xl mt-4">
              Best Video Recording Software 2023/24
            </h3>
            <p className="mt-4">
              In a competitive digital world dominated by visual media, content
              creators of all types can gain a significant edge by selecting the
              best video...
            </p>
          </div>
          <div className="m3 md:w-1/4 w-full  mb-10 md:mb-1">
            <img src="/blog/headphone.webp" alt="" className="h-auto w-[390px] m-auto" />
            <button className="p-2 bg-black text-white mt-4 rounded-full">
              Best Podcasts
            </button>
            <h3 className="font bold text-2xl mt-4">
              10 Best Podcasts for Entrepreneurs in 2023
            </h3>
            <p className="mt-4">
              Staying informed and inspired is crucial for success.
              Entrepreneurs need a steady stream of insights, strategies, and
              motivation to thrive in the ever-...
            </p>
          </div>
        </div>


        {/* <div className="flex items-center justify-center mt-4">
          <button className="p-4 rounded-full bg-black text-white">
            Show more posts
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Vlog;