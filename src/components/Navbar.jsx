const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          She Can Foundation
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#volunteer" className="hover:text-cyan-400 transition">
            Volunteer
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
