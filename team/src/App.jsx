import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import MoreMusic from "./pages/MoreMusic";
import Ministry from "./pages/Ministry";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Book from "./pages/Book";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About is the same as Team */}
        <Route path="/about" element={<TeamPage />} />
        <Route path="/more-music" element={<MoreMusic />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book" element={<Book />} />

      </Routes>
    </div>
  );
};

export default App;
