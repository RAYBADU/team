import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({ image, name }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.25 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Team Eternity
        </p>
        <h2 className="mt-3 text-lg font-semibold leading-7 text-white">
          {name}
        </h2>
      </div>
    </motion.article>
  );
};

export default TeamCard;
