import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import stadium from "../assets/stadium.avif";

const bookingNotes = [
  "Event type and date",
  "Venue or city",
  "Expected audience and program details",
];

const Book = () => {
  return (
    <main className="min-h-screen bg-[#030712] px-4 pb-16 pt-28 text-white font-[Raleway] sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10"
      >
        <img
          src={stadium}
          alt="Team Eternity ministering live"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,7,18,0.9),rgba(8,47,73,0.78),rgba(3,7,18,0.94))]" />

        <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur">
              Book Team Eternity
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Let's make your gathering a worship moment.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/78 sm:text-lg">
              For church programs, conferences, worship nights, and special
              events, send a few details and we'll take it from there.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:booking@teameternitygh.com"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300"
              >
                <FaEnvelope />
                Send Booking Email
              </a>
              <Link
                to="/ministry"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
              >
                View Ministry
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/12 bg-black/25 p-6 backdrop-blur">
            <div className="flex items-center gap-3 text-cyan-200">
              <FaCalendarCheck />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">
                Quick Booking Info
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {bookingNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 text-sm text-white/72">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-200" />
                booking@teameternitygh.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-cyan-200" />
                Contact line available on request
              </p>
              <p className="flex items-center gap-3">
                <FaLocationDot className="text-cyan-200" />
                Based in Ghana, available for ministry invitations
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Book;
