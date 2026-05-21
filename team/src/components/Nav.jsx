import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "MINISTRY", to: "/ministry" },
  { label: "MUSIC", to: "/more-music" },
  { label: "EVENTS", to: "/events" },
  { label: "GALLERY", to: "/gallery" },
  { label: "ABOUT", to: "/about" },
  { label: "BOOK", to: "/book" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 text-white backdrop-blur-sm font-[Raleway]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logo} alt="Team Eternity Ghana logo" className="w-8" />
          <span className="text-sm font-semibold tracking-[0.3em] sm:text-base">
            TEAM ETERNITY
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium tracking-[0.22em] lg:flex">
          {navLinks.slice(0, 3).map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="transition hover:text-blue-300">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-8" />
            </Link>
          </li>
          {navLinks.slice(3).map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="transition hover:text-blue-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border border-white/20 p-3 text-lg transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-sm font-semibold tracking-[0.22em] sm:px-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block rounded-xl px-3 py-4 transition hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
