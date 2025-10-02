import { useState } from "react";
import { portfolioData } from "../data";

export default function Contact() {
  const { email, github, linkedin } = portfolioData.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center fade-in">
      <h2 className="text-3xl font-bold mb-6 accent-heading animate-pulse">Contact Me</h2>
  <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto animate-slide-up">
  <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
            rows={4}
          />
          <button
            type="submit"
            className="w-full px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-200"
          >
            Send
          </button>
          {status && (
            <div className={`mt-4 text-base font-semibold ${status === 'Message sent!' ? 'text-green-500' : 'text-red-400'} animate-fade-in`}>{status}</div>
          )}
        </form>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-8 mb-4">Or connect with me:</p>
      <div className="flex flex-col items-center gap-2">
        <a href={`mailto:${email}`} className="text-teal-600 dark:text-teal-400 text-lg hover:underline">
          {email}
        </a>
        <div className="mt-2 space-x-6">
          <a href={github} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
