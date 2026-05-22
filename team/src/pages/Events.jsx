import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarDays,
  FaLocationDot,
  FaMusic,
} from "react-icons/fa6";
import testimonyDisco from "../assets/testimony-disco-scaled.jpg";

const eventNotes = [
  {
    icon: FaCalendarDays,
    title: "Upcoming Dates",
    text: "Fresh ministry dates and appearances will be shared here soon.",
  },
  {
    icon: FaLocationDot,
    title: "Where We Serve",
    text: "Churches, conferences, worship gatherings, and special gospel events.",
  },
  {
    icon: FaMusic,
    title: "What To Expect",
    text: "Live worship, uplifting sound, and a ministry atmosphere centered on Christ.",
  },
];

const Events = () => {
  return (
    <main className="min-h-screen bg-[#030712] px-4 pb-16 pt-28 text-white font-[Raleway] sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10"
      >
        <img
          src={testimonyDisco}
          alt="Team Eternity at a live event"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,7,18,0.92),rgba(10,37,64,0.8),rgba(3,7,18,0.95))]" />

        <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur">
              Events
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Join us where worship meets community.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/78 sm:text-lg">
              We minister at gatherings that bring people together in praise,
              prayer, and celebration. More event details will be added here as
              new dates are confirmed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300"
              >
                Invite Us
                <FaArrowRight />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
              >
                View Gallery
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {eventNotes.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.6rem] border border-white/12 bg-black/25 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-3 text-cyan-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/12">
                    <Icon />
                  </span>
                  <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-white">
                    {title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/76 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Events;
