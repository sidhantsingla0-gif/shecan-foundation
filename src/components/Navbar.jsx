import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          She Can Foundation
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#volunteer" className="hover:text-cyan-400 transition">Volunteer</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-6 px-6 py-6 bg-slate-950 border-t border-slate-800 text-slate-300">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">About</a>
          <a href="#volunteer" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">Volunteer</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;