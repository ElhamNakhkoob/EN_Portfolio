import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import SidebarHeader from "./SidebarHeader";
import LanguageSwitcher from "./LanguageSwitcher";
import ProfileSection from "./ProfileSection";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function MainSideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

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
      <SidebarHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="hidden md:flex flex-col justify-between h-full">
        <div className="flex flex-col items-center gap-3">
          <LanguageSwitcher />
          <ProfileSection />
          <SocialLinks />
        </div>

        <div className="mb-2">
          <NavLinks navLinks={navLinks} />
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
