import img from "../assets/img.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-5">
            Youth Driven NGO
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Empowering Students Through
            <span className="text-cyan-400"> Technology</span>
          </h1>

          <p className="text-slate-300 text-lg leading-9 mb-10 max-w-2xl">
            She Can Foundation creates opportunities for students to learn,
            grow, build confidence, and contribute toward meaningful social
            impact.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#volunteer">
              <button className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30">
                Join Us
              </button>
            </a>

            <a href="#about">
              <button className="border border-slate-700 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <img
            src={img}
            alt="Students"
            className="relative z-10 rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full hover:scale-[1.02] transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
