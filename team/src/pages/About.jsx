import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 pb-16 pt-32 font-[Raleway] text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-12">
        <p className="text-sm font-semibold tracking-[0.35em] text-blue-300">
          ABOUT TEAM ETERNITY
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Music, ministry, and moments that bring people together.
        </h1>
        <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
          This page is about Team Eternity and what we do ...
        </p>
      </div>
    </main>
  );
};

export default About;
