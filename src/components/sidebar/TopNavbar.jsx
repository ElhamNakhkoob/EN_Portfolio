import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About Me" },
    { to: "/resume", label: "Resume" },
    { to: "/skils", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-[#E3DBD7] text-[#333333] w-full p-4 shadow-md z-50 fixed top-0 left-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="hidden md:flex justify-between items-center w-full">
          <div className="flex gap-6">
            <NavLinks navLinks={navLinks} />
          </div>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-[#1e1e1e]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <LanguageSwitcher />
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          navLinks={navLinks}
          setMenuOpen={setMenuOpen}
          i18n={i18n}
          t={t}
        />
      )}
    </nav>
  );
}
