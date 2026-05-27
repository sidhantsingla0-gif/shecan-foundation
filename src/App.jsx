import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <VolunteerForm />
      <Footer />
    </div>
  );
}

export default App;
