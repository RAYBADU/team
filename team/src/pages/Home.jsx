import React from "react";
import Landing from "../components/Landing";
import Release from "../components/Release";
import StreamAdvert from "../components/StreamAdvert";
import Merch from "../components/Merch";

const Home = () => {
  return (
    <main className="bg-black">
      <Landing />
      <Release />
      <StreamAdvert/>
      <Merch/>
    </main>
  );
};

export default Home;
