import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaHeart,
  FaMicrophoneLines,
  FaMusic,
  FaPeopleGroup,
  FaPlay,
} from "react-icons/fa6";
import loko from "../assets/loko.webp";
import brassBand from "../assets/brass-band.webp";
import court from "../assets/court.avif";

const pillars = [
  {
    icon: FaMusic,
    title: "Spirit-led Worship",
    description:
      "Songs and moments that help people encounter God with joy, reverence, and freedom.",
  },
  {
    icon: FaPeopleGroup,
    title: "Community Impact",
    description:
      "We carry the message beyond the stage, creating spaces for fellowship, encouragement, and hope.",
  },
  {
    icon: FaMicrophoneLines,
    title: "Excellence in Ministry",
    description:
      "From rehearsals to live ministration, we serve with preparation, passion, and purpose.",
  },
];

const highlights = [
  "Live worship experiences for churches, conferences, and special gatherings.",
  "Original gospel music rooted in testimony, praise, and the life-changing power of Christ.",
  "A ministry culture centered on discipleship, unity, and authentic service.",
];

const stats = [
  { value: "Live", label: "worship atmosphere" },
  { value: "Faith", label: "at the center" },
  { value: "People", label: "served with intention" },
];

const Ministry = () => {
  return (
    <main className="overflow-hidden bg-[#030712] text-white font-[Raleway]">
      <section className="relative isolate">
        <img
          src={loko}
          alt="Team Eternity ministering on stage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,7,18,0.82),rgba(10,37,64,0.72),rgba(3,7,18,0.92))]" />
        <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold tracking-[0.35em] text-cyan-200 uppercase backdrop-blur">
                Our Ministry
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                Music that carries faith, joy, and the presence of God.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                Team Eternity exists to minister through gospel music in a way
                that moves hearts, strengthens believers, and draws people into
                a deeper encounter with Christ.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/book"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaCalendarCheck />
                  Book the Ministry
                </Link>
                <Link
                  to="/more-music"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/6 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  <FaPlay />
                  Explore Music
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/12 bg-white/8 p-6 backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-cyan-200">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src={brassBand}
              alt="Team Eternity performing with a brass band"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Mission
              </p>
              <p className="mt-3 max-w-lg text-lg leading-8 text-white/85">
                We use music as a vessel for worship, encouragement, and the
                proclamation of the gospel wherever God opens a door.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              What Defines Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              More than performance. This is service.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Our ministry is built on a desire to honor God with sound,
              message, character, and consistency. Every rehearsal, every song,
              and every event is approached as an offering.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-5"
                >
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/12 text-cyan-200">
                    <FaHeart />
                  </span>
                  <p className="text-sm leading-7 text-white/78 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(14,23,42,0.96),rgba(8,47,73,0.86))] p-8 sm:p-10 lg:p-12"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Ministry Pillars
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              The values that shape every ministration.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/6 p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/12 text-2xl text-cyan-200">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/74 sm:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Invite Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Bringing worship to gatherings, churches, and special moments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              If you are planning a worship night, conference, outreach, or
              special event, we would love to minister with you and serve your
              audience with excellence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300"
              >
                Start a Booking
                <FaArrowRight />
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src={court}
              alt="Team gathered together before a performance"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Ministry;
