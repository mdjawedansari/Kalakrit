import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import AboutUsForm from "@/components/aboutUs/AboutUsForm";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-auto   font-Poppins">
        <div className="w-full flex bg-[#100f13] ">
          <div className="md:w-1/2 w-full h-auto flex  ">
            <div className="m-auto w-11/12 md:w-2/3 py-20">
              <h1 className="xl:text-7xl lg:text-6xl text-[#ffffff] text-3xl py-2 font-semibold">
                About Us
              </h1>
              <p className="mt-8 leading-loose text-justify text-[#ffffff]">
                Kalakrit is a privately held language solutions company based
                out of Gurugram, India.
                <span className="text-[#eb5a00] px-2">
                  We have a rich experience in the language and communication
                  industry.
                </span>
                With an extensive network of
                <span className="text-[#eb5a00] font-bold px-2">
                  globally connected partners,
                </span>
                we have been able to support market leaders of different
                industries. Kalakrit created a seamless integration of
                Kalakrit's Human and technology resources, ensuring that our
                clients receive the highest return on investment in the entire
                market.
              </p>
              <button className="bg-[#eb5a00] text-white font-normal py-4 px-8 hover:bg-[#200f22] hover:text-[#eb5a00] mt-8">
                SCHEDULE A FREE CONSULTATION
                <span className="hidden hover:block"></span>
              </button>

              <div className="flex items-center mt-10 text-[#ffffff] text-center md:text-left">
                <FiPhone className="text-[#eb5a00]" />
                <span className="text-md font-semibold mx-2">
                  +91 7428360681
                </span>
              </div>
              <div className="flex text-[#eb5a00] mt-6 space-x-3 text-2xl items-center text-center md:text-left">
                <Link href="/">
                  <BiLogoFacebook className="hover:scale-110" />
                </Link>
                <Link href="/">
                  <AiOutlineInstagram className="hover:scale-110" />
                </Link>

                <Link href="/">
                  <BsTwitter className="hover:scale-110" />
                </Link>

                <Link href="/">
                  <AiFillLinkedin className="hover:scale-110" />
                </Link>
              </div>
            </div>
          </div>

          <div className='md:w-1/2 bg-[url("/about/about-theme.png")]  h-[100vh] bg-no-repeat bg-center bg-cover'></div>
        </div>

        <div className="w-full flex bg-slate-50 ">
          <div className="c2 md:w-11/12 lg:4/5 w-11/12 flex flex-wrap md:nowrap m-auto shadow-xl">
            <div className="c21 md:w-1/2 w-full  md:p-8 text-justify bg-white">
              <h1 className="font-semibold  md:text-4xl text-center md:text-left text-2xl border-l-4 border-[#eb5a00] ">
                Our Mission & Values
              </h1>

              <p className="m-4 text-sm md:text-base">
                <strong className="text-xl text-[#eb5a00] ">S</strong>ince the
                advent of globalisation, the world has become a small,
                interconnected town where everything is connected to the
                Internet, facilitating simple access everywhere. Therefore,
                <span className="font-bold px-2 text-[#eb5a00]s">
                  language
                </span>{" "}
                has the power to unite or divide two groups in various ways.We
                at Kalarkit therefore strive to close the technological and
                business gap while also assisting you in removing any barriers
                that languages would otherwise impose.
              </p>

              <p className="m-4 text-sm md:text-base">
                <span className="font-bold text-[#eb5a00] px-1">
                  One stop solution
                </span>
                For all of your linguistic requirements, we at kalakrit ,provide
                a one-stop solution . We can help you with everything from
                translation to interpretation to localization to subtitling and
                dubbing. We are aware of our clients' requirements and cater our
                linguistic offerings to them in the most effective way.
              </p>
              <p className="m-4 text-sm md:text-base">
                <span className="font-bold text-[#eb5a00] px-1">
                  Cost Effective LanguageServices
                </span>
                We provide the best language solutions at incredibly low costs;
                our costs are not standard. We offer personalised rates and are
                aware of the different delivery levels. Working directly with
                the local resource allows us to provide excellent services at
                extremely reasonable pricing without sacrificing quality. Our
                goal is to provide the greatest service at the lowest cost.
              </p>

              <p className="m-4 text-sm md:text-base">
                <span className="font-bold text-[#eb5a00] px-1">
                  High Degree of Proffesionalism and Dedication
                </span>
                Our staff adheres to a high standard of professionalism, and
                they all uphold strong work ethics, which enable us to uphold
                integrity, adhere to high standards, and produce services on
                schedule.
              </p>
            </div>
            <div className="c22 md:w-1/2 w-full md:p-8 p-2 text-justify bg-white">
              <div className="a1 w-full flex flex-wrap md:flex-nowrap">
                <div className="md:w-1/5 w-full flex justify-center items-center">
                  <img src="/about/d.png" alt="djh" />
                </div>

                <div className="md:w-4/5 w-full md:mx-3 mt-6">
                  <h3 className="font-bold w-full">Trusted</h3>
                  <p className="md:mt-4 text-sm ">
                    Each project is personally looked after by the industry
                    experts and goes through several stages of scrutiny before
                    it is delivered to the client.
                  </p>
                </div>
              </div>
              <div className="a2 w-full flex flex-wrap md:flex-nowrap mt-6">
                <div className="md:w-1/5 w-full flex justify-center items-center">
                  <img src="/about/w.png" alt="djh" />
                </div>

                <div className="md:w-4/5 w-full md:mx-3 mt-6">
                  <h3 className="font-bold w-full">Passion To Win</h3>
                  <p className="md:mt-4 text-sm">
                    We constantly expand our network to provide the best service
                    to our clients because of which we have been able to create
                    an extensive network of native and professional linguists,
                    voice over artists and studios.
                  </p>
                </div>
              </div>
              <div className="a3 w-full flex flex-wrap md:flex-nowrap mt-6">
                <div className="md:w-1/5 w-full flex items-center justify-center">
                  <img src="/about/plan.png" alt="djh" />
                </div>

                <div className="md:w-4/5 w-full md:mx-3 mt-6">
                  <h3 className="font-bold w-full">Planning</h3>
                  <p className="md:mt-4 text-sm">
                    We are methodical in our projects, we are quite thorough and
                    we never start without a plan before. -With our pre and post
                    project quality control process , we ensure that excellent
                    service is developed and executed .
                  </p>
                </div>
              </div>
              <div className="a4 w-full flex flex-wrap md:flex-nowrap mt-6">
                <div className="md:w-1/5 w-full flex items-center justify-center">
                  <img src="/about/d.png" alt="djh" />
                </div>

                <div className="md:w-4/5 w-full md:mx-3 pb-4 mt-6">
                  <h3 className="font-bold w-full">Multiple Domains</h3>
                  <p className="md:mt-4 text-sm">
                    We have well defined domains such as (Finance, Medical,
                    Marketing etc) according to which we train our resources so
                    that we can provide an optimum solution to all our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* form */}
        <div className="frm w-full mt-5 py-8  flex ">
          <div className="cnf m-auto md:w-3/4 w-11/12 bg-slate-50 p-10 flex flex-wrap md:no-wrap">
            <div className="frml p-8 md:w-1/2 w-full m-auto grid place-items-center">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Get Started
              </h1>
              <p className="mt-3 text-sm md:text">
                We will love to hear from you
              </p>
              <div className="flex items-center gap-2 mt-4">
                <FiPhone className="text-[#eb5a00]" />
                <span>+91 7428360681</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-[#eb5a00] text-xl font-semibold" />
                <p className="text-justify text-sm ">
                  Kalakrit Art Studio in Palam Vihar,Delhi
                </p>
              </div>
            </div>

            <AboutUsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
