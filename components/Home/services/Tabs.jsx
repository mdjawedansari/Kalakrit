"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Tabs = ({selectedTab}) => {
  return (
   <>
    <div className="w-3/4 m-auto md:w-2/5 xl:pl-10">
          <div className="w-full h-full sm:w-3/4 sm:h-auto md:w-full md:h-auto flex justify-center items-center ">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -150, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-auto  w-full m-auto"
              >
                {selectedTab === "website" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-11/12  m-auto "
                  >
                    <img
                      src="/dropdown/web.webp"
                      alt="website"
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "marketing" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/dropdown/market.webp"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "multimedia" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/MediaMultimedia-Localization.webp"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "game" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/game.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "medical" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/medical_translation_image.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "script" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/script_translation_image.jpeg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "financial" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/financial-translation-image.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "technical" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/Technical-Translation-Agency.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "market-research" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/market-research-translation-service.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "software" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/software-localization-service.webp"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}

                {selectedTab === "legal" && (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -150, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-auto  w-full m-auto "
                  >
                    <img
                      src="/services/translation/legal-translation-service.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
   </>
  )
}

export default Tabs