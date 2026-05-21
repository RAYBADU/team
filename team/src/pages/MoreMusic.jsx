import React from "react";
import loko from "../assets/loko.webp";
import MusicCard from "../components/MusicCard";
import jehova from "../assets/jehova-overdo-disco.jpeg";
import yessir from "../assets/yessir.jpg";
import extrabasket from "../assets/Extra-Baskets-559x559-1.jpeg";
import brassBand from "../assets/brass-band.webp";
import myReasonDisco from "../assets/my-reason-disco.jpg";
import testimonyDiscoScaled from "../assets/testimony-disco-scaled.jpg";
import oldClassics from "../assets/old-classics.jpg";
import nyameTease from "../assets/nyame-tease.jpg";
import africanPraiseMedley from "../assets/african-praise-medley.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const MoreMusic = () => {
      const cardData = [
        {
          image: jehova,
        },
         {
          image: brassBand,
        },
        {
          image: yessir,
        },
        {
          image: extrabasket,
        },
        {
          image: myReasonDisco,
        },
        {
          image: testimonyDiscoScaled,
        },
        {
          image: oldClassics,
        },
        {          image: nyameTease,
        },
        {
          image: africanPraiseMedley,
        },
    
      ];
      const navigate = useNavigate();

      const handleBack = () => {
        navigate(-1); 
      };
    
  return (
    <motion.section
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className=' mt-10 relative  isolate overflow-hidden font-[Raleway]'>
       <img
              src={loko}
              alt="Release showcase backdrop"
              className="absolute inset-0 h-full w-full object-cover"
            />
             <div className="absolute inset-0 bg-slate-950/75" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* back button */}
            <button onClick={()=> handleBack()} className="flex items-center gap-2 text-white hover:text-blue-300 cursor-pointer">
              <FaArrowLeftLong />
              Back
            </button>
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold tracking-[0.35em] text-blue-300 sm:text-base">
            MORE MUSIC 
          </p>
          <h2 className="mt-5 text-3xl font-light sm:text-4xl lg:text-5xl">
            MORE RELEASES
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
            Dive deeper into our musical journey with additional tracks that continue to inspire and uplift. Explore more of our worship music and experience the heart of Team Eternity through these songs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map((data, index) => (
            <MusicCard key={index} image={data.image} />
          ))}
        </div>

        
      </div>
    </motion.section>
  )
}

export default MoreMusic
