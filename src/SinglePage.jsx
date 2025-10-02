import { useRef, useState } from "react";
import { useEffect } from "react";
import { fetchGithubRepos } from "./utils/github";

import Hero from "./components/Hero";
import { portfolioData } from "./data";
import ProjectCard from "./components/ProjectCard";
import Skills from "./pages/Skills";

function ContactForm() {
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
  );
}

export default function SinglePage() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState("");

  useEffect(() => {
    fetchGithubRepos("Harsh-verma24")
      .then((data) => {
        // Filter only repos with description and homepage or topics
        const filtered = data.filter(r => r.description && !r.fork);
        setRepos(filtered);
        setLoadingRepos(false);
      })
      .catch((err) => {
        setRepoError("Could not fetch repositories.");
        setLoadingRepos(false);
      });
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-8 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">MyPortfolio</h1>
        <div className="space-x-6">
          <button onClick={() => scrollTo(homeRef)} className="text-gray-700 dark:text-gray-200 hover:text-teal-400">Home</button>
          <button onClick={() => scrollTo(projectsRef)} className="text-gray-700 dark:text-gray-200 hover:text-teal-400">Projects</button>
          <button onClick={() => scrollTo(skillsRef)} className="text-gray-700 dark:text-gray-200 hover:text-teal-400">Skills</button>
          <button onClick={() => scrollTo(contactRef)} className="text-gray-700 dark:text-gray-200 hover:text-teal-400">Contact</button>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen flex flex-col justify-center items-center fade-in relative px-2 sm:px-4" id="home">
        {/* Animated background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 via-teal-400 to-purple-500 opacity-40 animate-gradient-move"></div>
        <div className="relative z-10 bg-white/10 dark:bg-gray-900/30 rounded-xl p-6 sm:p-10 md:p-12 mb-8 flex flex-col items-center w-full max-w-xl shadow-2xl backdrop-blur-md">
          {/* Avatar with animated border */}
          <div className="relative mb-6 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full animate-spin-slow border-4 border-gradient-to-r from-teal-400 via-blue-400 to-purple-400" style={{ borderImage: 'linear-gradient(90deg, #14b8a6, #3b82f6, #a78bfa) 1' }}></span>
            <img src="https://avatars.githubusercontent.com/u/182943052?v=4" alt="Harsh Verma" className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover relative z-10" />
          </div>
          {/* Name and tagline with animation */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 mb-2 animate-gradient-text text-center">Harsh Verma</h1>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-teal-200 dark:text-teal-300 mb-4 animate-fade-in text-center">B.Tech in Information Technology, USICT (Expected Graduation: 2028)</h2>
          <p className="text-white dark:text-gray-200 text-center mb-4 animate-fade-in text-sm sm:text-base">Motivated and self-driven Computer Science undergraduate with a keen interest in web development, software engineering, and open-source contribution. Looking for an opportunity to gain industry exposure and grow as a full-stack developer.</p>
          {/* Social icons */}
          <div className="flex space-x-6 mb-4 justify-center w-full">
            <a href="mailto:iamharshvrma@gmail.com" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-600 text-xl sm:text-2xl"><i className="fas fa-envelope"></i></a>
            <a href="https://github.com/harshverma036" target="_blank" rel="noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-teal-400 text-xl sm:text-2xl"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/harsh-verma-68115a326/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 text-xl sm:text-2xl"><i className="fab fa-linkedin"></i></a>
          </div>
          <a href="#projects" className="mt-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-200 text-sm sm:text-base">View My Work</a>
          <a href="/resume.pdf" download className="mt-4 px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-full font-bold shadow-lg hover:bg-teal-600 transition text-sm sm:text-base">Download Resume</a>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 accent-heading relative z-10 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-200 text-center relative z-10 text-sm sm:text-base">{portfolioData.about}</p>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="min-h-screen p-8 fade-in" id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center accent-heading">My GitHub Projects</h2>
        {loadingRepos ? (
          <div className="text-center text-lg text-gray-500">Loading projects...</div>
        ) : repoError ? (
          <div className="text-center text-red-500">{repoError}</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {repos.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500">No public repositories found.</div>
            ) : (
              repos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  title={repo.name}
                  desc={repo.description}
                  link={repo.html_url}
                />
              ))
            )}
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="min-h-screen p-8 text-center fade-in" id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section className="min-h-[40vh] p-8 text-center fade-in my-8 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 accent-heading">Experience</h2>
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6 mx-auto max-w-2xl flex flex-col items-start">
          <div className="mb-4 text-left">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">Contributor – GirlScript Summer of Code</h3>
            <p className="text-gray-700 dark:text-gray-300">Remote | 2024</p>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 mt-2">
              <li>Participated in open-source projects under mentor guidance</li>
              <li>Gained experience in version control and collaborative development</li>
            </ul>
          </div>
          <div className="mb-4 text-left">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">Campus Ambassador – GirlScript Summer of Code</h3>
            <p className="text-gray-700 dark:text-gray-300">Remote | 2025</p>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 mt-2">
              <li>Represented GirlScript Summer of Code at campus level</li>
              <li>Promoted open-source culture and events within the university</li>
              <li>Facilitated student participation and engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen p-8 flex flex-col items-center justify-center fade-in" id="contact">
        <h2 className="text-3xl font-bold mb-6 accent-heading animate-pulse">Contact Me</h2>
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto animate-slide-up mb-8">
          <ContactForm />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-8 mb-4">Or connect with me:</p>
        <a href={`mailto:${portfolioData.contact.email}`} className="text-teal-600 dark:text-teal-400 text-lg hover:underline">
          {portfolioData.contact.email}
        </a>
        <div className="mt-2 space-x-6">
          <a href="https://github.com/Harsh-verma24" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/harsh-verma-68115a326/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

