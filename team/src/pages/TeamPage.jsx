import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaPeopleGroup, FaMusic } from "react-icons/fa6";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";

const TeamPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#020817] px-4 pb-16 pt-28 text-white font-[Raleway] sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <button
          className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeftLong />
          Back
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Meet The Team
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              The people carrying the sound, service, and vision forward.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Behind every ministration is a team committed to worship,
              excellence, and serving people well. Here are the faces helping
              shape the heartbeat of Team Eternity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <FaPeopleGroup />
              </div>
              <p className="mt-5 text-3xl font-semibold">{teamMembers.length}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                Team Members
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <FaMusic />
              </div>
              <p className="mt-5 text-3xl font-semibold">One</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">
                Shared Mission
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} image={member.image} name={member.name} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
