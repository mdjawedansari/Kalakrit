import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#201f22] w-full text-center font-Poppins text-[#ffffff] dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="md:w-4/5 w-full m-auto">
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex md:flex-col justify-between">
                <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <Link href="/" className=" cursor-pointer p-3 ">
                    <img
                      src="/logo_1.png"
                      alt="kalakrit logo"
                      className="text-white"
                      height={120}
                      width={120}
                    />
                  </Link>
                </h6>
                <p className="w-full md:w-3/5 flex text-left justify-center items-center mx-2">
                  Reach a higher potential of Target Market.
                </p>
              </div>

              <div className="sm:w-3/5 w-full">
                <h6 className="mb-4 flex  font-semibold uppercase md:justify-start">
                  Information
                </h6>
                <p className="mb-4 flex ">
                  <Link href="#!" className="text-white dark:text-neutral-200">
                    +91 7428360681
                  </Link>
                </p>
                <p className="mb-4 flex">
                  <Link href="#!" className="text-white dark:text-neutral-200">
                    contact@kalakrit.in
                  </Link>
                </p>
                <p className="mb-4 flex">
                  <Link href="#!" className="text-white dark:text-neutral-200">
                    498/5 Mehrauli New Delhi, 110030{" "}
                  </Link>
                </p>
              </div>

              <div className="">
                <h6 className="mb-4 font-semibold text-[#eb5a00] uppercase md:justify-start">
                  Subscribe Now
                </h6>
                <div>
                  <form action="" className="xl:mr-24">
                    <div className="flex w-full">
                      <div className="md:mb-6 w-full flex items-center justify-center">
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="sm:w-4/5 pl-4 py-3 bg-white focus:outline-none text-[#201F22]"
                        />
                        <button
                          href="#"
                          className="bg-[#eb5a00]  text-white sm:w-1/5"
                        >
                          <img
                            src="/footer/subscribe.png"
                            className=""
                            alt="this is subscribe button"
                            height={50}
                            width={50}
                          />
                        </button>
                      </div>
                    </div>
                  </form>

                  <span className="flex sm:ml-auto mt-4 sm:mt-2 justify-center sm:justify-start">
                    <Link
                      href="https://www.facebook.com/Kalakritofficial"
                      className="text-gray-500"
                    >
                      <img
                        className="brightness-110 hover:scale-110"
                        src="/footer/facebook.svg"
                        alt="facebook logo"
                      />
                    </Link>
                    <Link href="/" className="ml-3 text-gray-500">
                      <img
                        className="brightness-110 hover:scale-110"
                        src="/footer/twitter.svg"
                        alt="twitter logo"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/kalakrit.in/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                      className="ml-3 text-gray-500"
                    >
                      <img
                        className="brightness-110 hover:scale-110"
                        src="/footer/instagram.svg"
                        alt="instagram logo"
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/kalaakrit/"
                      className="ml-3 text-gray-500"
                    >
                      <img
                        className="brightness-110 hover:scale-110"
                        src="/footer/linkdin.svg"
                        alt="linkdin logo"
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#201F22] p-6 text-center text-sm">
          <span> © Copyright {currentYear} Kalakrit. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
