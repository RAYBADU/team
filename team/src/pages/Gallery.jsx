import React from "react";
import { motion } from "framer-motion";
import { FaCameraRetro, FaImage, FaMusic } from "react-icons/fa6";
import stadium from "../assets/stadium.avif";
import loko from "../assets/loko.webp";
import brassBand from "../assets/brass-band.webp";
import testimonyDisco from "../assets/testimony-disco-scaled.jpg";
import team7 from "../assets/team-7.jpg";
import team10 from "../assets/team-10.jpg";
import yessir from "../assets/yessir.jpg";

const galleryImages = [
  {
    image: loko,
    title: "Live Ministration",
    caption: "Moments from the stage where worship and sound come alive.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: brassBand,
    title: "Full Sound",
    caption: "Layered instrumentation and bold praise energy.",
    className: "",
  },
  {
    image: testimonyDisco,
    title: "Event Highlights",
    caption: "Scenes from gatherings filled with praise and celebration.",
    className: "",
  },
  {
    image: team7,
    title: "Behind The Scenes",
    caption: "The people and preparation behind every ministration.",
    className: "",
  },
  {
    image: team10,
    title: "Team Moments",
    caption: "Shared joy, unity, and the heartbeat of the ministry.",
    className: "",
  },
  {
    image: yessir,
    title: "Sound & Story",
    caption: "Snapshots that carry testimony, music, and movement.",
    className: "md:col-span-2",
  },
];

const Gallery = () => {
  return (
    <main className="min-h-screen bg-[#020817] px-4 pb-16 pt-28 text-white font-[Raleway] sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Gallery
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A visual record of worship, people, and unforgettable moments.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Explore scenes from live ministrations, team moments, and the
              atmosphere surrounding Team Eternity's journey in music ministry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <FaCameraRetro />
              </div>
              <p className="mt-4 text-2xl font-semibold">Live</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                Moments
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <FaImage />
              </div>
              <p className="mt-4 text-2xl font-semibold">Team</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                Stories
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <FaMusic />
              </div>
              <p className="mt-4 text-2xl font-semibold">Praise</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                Energy
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-14 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10"
        >
          <img
            src={stadium}
            alt="Team Eternity performing before a large crowd"
            className="h-[460px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Featured Moment
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-3xl">
              Worship gatherings that feel expansive, joyful, and deeply alive.
            </h2>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] ${item.className}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.04] md:h-full md:min-h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/78">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
