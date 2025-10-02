import { NavLink } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const navClass = ({ isActive }) =>
    isActive ? "text-teal-400 font-bold" : "hover:text-teal-400";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="flex items-center space-x-6">
        <NavLink to="/" className={navClass} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/skills" className={navClass}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
        <button
          onClick={() => setDark((d) => !d)}
          className="ml-4 px-3 py-1 rounded-full bg-teal-500 text-white shadow hover:bg-teal-700 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
