import { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setSuccess("");
    setError("");

    // Validate email
    if (!formData.email.includes("@")) {
      return setError("Please enter a valid email address.");
    }

    // Validate message length
    if (formData.message.length < 10) {
      return setError("Message should be at least 10 characters.");
    }

    try {
      setLoading(true);

      await axios.post(`${API_URL}/api/volunteer`, formData);

      setSuccess("Form Submitted Successfully!");
      setTimeout(() => setSuccess(""), 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="volunteer" className="py-28 px-6">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-[2rem] p-10 md:p-14 shadow-2xl">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-5">
          Volunteer With Us
        </h2>

        <p className="text-center text-slate-400 mb-12 text-lg">
          Become part of a growing student-driven community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-cyan-400 transition"
          ></textarea>

          {success && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-2xl p-4 text-center">
              {success}
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-2xl p-4 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-slate-950 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;