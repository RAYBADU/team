import React from "react";
import loko from "../assets/loko.webp";
import MusicCard from "./MusicCard";
import jehova from "../assets/jehova-overdo-disco.jpeg";
import yessir from "../assets/yessir.jpg";
import extrabasket from "../assets/Extra-Baskets-559x559-1.jpeg";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const Release = () => {
  const cardData = [
    {
      image: jehova,
    },
    {
      image: yessir,
    },
    {
      image: extrabasket,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden font-[Raleway]">
      <img
        src={loko}
        alt="Release showcase backdrop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-sm font-semibold tracking-[0.35em] text-blue-300 sm:text-base"
           >
            LATEST MUSIC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-5 text-3xl font-light sm:text-4xl lg:text-5xl"
          >
            OUR RELEASES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 text-sm leading-7 text-white/75 sm:text-base"
          >
            Stream the latest songs from Team Eternity and explore the sound
            shaping our worship journey.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map((data, index) => (
            <MusicCard key={index} image={data.image} />
          ))}
        </div>

        <div className="flex mt-18 justify-center">
          <Link to="/more-music">
            <button className="border text-white px-12 py-4 cursor-pointer hover:bg-white hover:text-black transition-all duration-300 hover:border-0 font-semibold">
              More Music
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Release;
