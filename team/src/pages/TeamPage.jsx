import React from "react";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const TeamPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 mt-24 h-full py-12 px-4">
      <button
        className=" text-black px-8 py-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong className="inline mr-2" /> Back
      </button>
      <h1 className=" text-center justify-center text-4xl text-gray-400 font-light tracking-widest">
        MEET THE TEAM
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} image={member.image} name={member.name} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
