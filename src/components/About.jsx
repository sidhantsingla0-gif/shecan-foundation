const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-cyan-400">About Us</h2>

        <p className="text-slate-300 text-lg leading-10 max-w-4xl mx-auto">
          She Can Foundation is a youth-driven NGO focused on creating
          opportunities, awareness, and positive social impact through
          education, digital initiatives, and community-driven programs.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>

            <p className="text-slate-400 leading-8">
              Helping students access practical learning opportunities.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Innovation
            </h3>

            <p className="text-slate-400 leading-8">
              Encouraging technology-driven social impact projects.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Community</h3>

            <p className="text-slate-400 leading-8">
              Building a supportive environment for students and volunteers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
