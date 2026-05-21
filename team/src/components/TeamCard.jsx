import React from "react";

const TeamCard = ({ image, name }) => {
  return (
    <div className="mt-12 mx-auto ">
      <img src={image} alt="Team Member" className="border w-80 mx-auto " />
      <p className="text-gray-400 font-medium tracking-tight text-lg mt-4">
        {name}
      </p>
    </div>
  );
};

export default TeamCard;
