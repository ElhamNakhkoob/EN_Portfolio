import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Foto from "../assets/images/Foto.png";
import GithubIcon from "../assets/images/github(1).png";
import LinkedinIcon from "../assets/images/linkedin.png";
import XingIcon from "../assets/images/xing.png";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About Me" },
    { to: "/resume", label: "Resume" },
    { to: "/skils", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <nav className="bg-[#434343] text-white w-full md:w-64 md:h-screen p-4 fixed md:static z-50">
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold">Elham Nakhkoob</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className="hidden md:flex flex-col items-center">
        <img
          src={Foto}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg mb-2 mt-3"
        />
        <h1 className="text-2xl font-bold mb-6 text-center">Elham Nakhkoob</h1>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.xing.com/profile/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={XingIcon}
              alt="Xing"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
        </div>

        <ul className="space-y-2 w-full px-4">
          {navLinks.map(({ to, label, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 font-bold bg-[#5a5a5a] rounded"
                    : "block py-2 px-3 rounded hover:bg-[#555555]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-[#434343] text-white z-40 flex flex-col items-center p-6 md:hidden overflow-auto">
          <button
            className="self-end mb-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <img
            src={Foto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-8 text-center">
            Elham Nakhkoob
          </h1>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.xing.com/profile/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={XingIcon}
                alt="Xing"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>

          <ul className="space-y-6 text-lg w-full max-w-xs text-center">
            {navLinks.map(({ to, label, exact }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold block py-2 px-3 bg-[#5a5a5a] rounded"
                      : "block py-2 px-3 rounded hover:bg-[#555555]"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
