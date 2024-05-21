"use client";

import "./slider.css"
import { useState, useEffect, useRef, useCallback } from "react";

const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef();
  const innerRef = useRef();

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="w-full overflow-hidden" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

const SlidingCard = () => (
  <div className="">
    <InfiniteLooper speed="8" direction="left">
      <div className=" w-full md:w-[80px] h-auto  m-12 hover:scale-125 rounded-xl text-center">
      <svg
              width="80"
              height="80"
              viewBox="0 0 56 56"
              className="apna-time-logo"
            >
              <g data-name="Group 1" fill="#fff">
                <path
                  data-name="Path 1"
                  d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"
                ></path>
                <path
                  data-name="Path 2"
                  d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"
                ></path>
              </g>
              <path
                data-name="Path 3"
                d="M44.77 56h-7.437v-7h17.843a11.232 11.232 0 01-10.4 7z"
                fill="#ffd166"
                fillRule="evenodd"
              ></path>
              <path
                data-name="Path 4"
                d="M18.667 49v7h-7.438a11.232 11.232 0 01-10.4-7z"
                fill="#2bb793"
                fillRule="evenodd"
              ></path>
              <path
                data-name="Path 5"
                d="M18.667 49h18.667v7H18.667z"
                fill="#83bde4"
                fillRule="evenodd"
              ></path>
              <path
                data-name="Path 6"
                d="M15.333 30.26a1.9 1.9 0 00.142.84.909.909 0 00.505.414l-.809 2.568a4.964 4.964 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082A3.637 3.637 0 019 34.163a3.53 3.53 0 01-2.579-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.654 6.654 0 013.883-.95h.768v-.263a1.428 1.428 0 00-.323-1.092 1.943 1.943 0 00-1.234-.283 6.617 6.617 0 00-1.244.151 13.01 13.01 0 00-1.547.415l-.87-2.548a12.257 12.257 0 014.268-.849 5.666 5.666 0 013.7.98 3.725 3.725 0 011.153 3v3.724zm-5.1 1.092a1.321 1.321 0 00.678-.182 1.63 1.63 0 00.515-.465v-1.6h-.424a2.086 2.086 0 00-1.254.3 1.086 1.086 0 00-.405.93 1.07 1.07 0 00.243.738.823.823 0 00.647.273zm13.67-8.8a3.409 3.409 0 013.024 1.516 7.556 7.556 0 011.02 4.247 7.955 7.955 0 01-.535 3A4.871 4.871 0 0125.9 33.4a3.585 3.585 0 01-2.255.758 3.226 3.226 0 01-2.507-1.072v4.854l-4 .4V22.96h3.559l.162 1.052A3.923 3.923 0 0122.3 22.9a4.036 4.036 0 011.607-.343zm-1.573 8.76q1.517 0 1.517-2.932a8.247 8.247 0 00-.162-1.881 1.563 1.563 0 00-.435-.86 1.105 1.105 0 00-.7-.212 1.641 1.641 0 00-1.415 1.011v4.126a1.8 1.8 0 00.546.576 1.227 1.227 0 00.647.172zm13.97-8.756a2.75 2.75 0 012.133.849 3.4 3.4 0 01.779 2.386v7.968h-4v-7.24a1.589 1.589 0 00-.152-.829.515.515 0 00-.455-.222q-.667 0-1.355 1.071v7.22h-4V22.96h3.5l.284 1.112a5.118 5.118 0 011.526-1.152 4.08 4.08 0 011.75-.364zm13.852 7.7a1.913 1.913 0 00.141.84.911.911 0 00.506.414l-.809 2.568a4.958 4.958 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082 3.639 3.639 0 01-3.256 1.577 3.527 3.527 0 01-2.578-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.653 6.653 0 013.882-.95h.769v-.263a1.424 1.424 0 00-.324-1.092 1.939 1.939 0 00-1.233-.283 6.608 6.608 0 00-1.244.151 12.959 12.959 0 00-1.547.415l-.87-2.548a12.246 12.246 0 014.267-.849 5.665 5.665 0 013.7.98 3.725 3.725 0 011.153 3zm-5.1 1.092a1.32 1.32 0 00.677-.182 1.63 1.63 0 00.516-.465v-1.6h-.425a2.09 2.09 0 00-1.254.3 1.085 1.085 0 00-.4.93 1.065 1.065 0 00.243.738.823.823 0 00.647.273z"
                fill="#4d3951"
              ></path>
      </svg>
      </div>

      <div className=" w-full md:w-[110px] h-auto flex items-center  m-12 hover:scale-125 rounded-xl text-center">
        <img src="/clientLogo/pokerbaazilogo-black.svg" alt="transcription" width='fill' />
      </div>

      <div className=" w-full md:w-[110px] h-auto flex items-center  m-12 hover:scale-125 rounded-xl text-center">
        <img src="/clientLogo/amazon.png" alt="transcription" width='fill' />
      </div>

      <div className=" w-full md:w-[110px] h-auto flex items-center  m-12 hover:scale-125 rounded-xl text-center">
        <img src="/clientLogo/ladlilogo.png" alt="transcription"  width='fill'/>
      </div>

      <div className=" w-full md:w-[110px] h-auto m-12 hover:scale-125 flex items-center rounded-xl text-center">
        <img src="/clientLogo/icici_prudential.png" alt="transcription" className="w-full h-auto" />
      </div>
    </InfiniteLooper>
  </div>
);

export default SlidingCard;
