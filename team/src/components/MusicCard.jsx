import React from "react";
import {motion} from "framer-motion";

const MusicCard = ({ image }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    
    
    
    className="group mx-auto w-full max-w-sm cursor-pointer transition-transform duration-300 hover:-translate-y-2">
      <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-2xl shadow-black/20">
        <img
          src={image}
          alt="Release cover art"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

export default MusicCard;
