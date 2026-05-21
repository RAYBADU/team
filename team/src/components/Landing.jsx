import React from "react";
import stadium from "../assets/stadium.avif";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative isolate flex min-h-screen items-center overflow-hidden font-[Raleway]"
    >
      <img
        src={stadium}
        className="absolute inset-0 h-full w-full object-cover"
        alt="Team Eternity performing in a stadium"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:pt-36 lg:px-8 lg:pt-40">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-semibold tracking-[0.35em] text-blue-300 sm:text-base">
            GOSPEL MUSIC MINISTRY
          </p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
          >
            TEAM ETERNITY GHANA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
          >
            Uplifting souls through the power of gospel music, live worship, and
            spirit-filled performances for every audience.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <button className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold tracking-[0.12em] transition-all duration-300 hover:bg-blue-700 sm:text-base cursor-pointer">
              <FaPlay /> Listen Now
            </button>
            <button className="flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-semibold tracking-[0.12em] transition-all duration-300 hover:bg-white hover:text-black sm:text-base cursor-pointer">
              Book Us
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Landing;
