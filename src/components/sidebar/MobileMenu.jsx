import { X } from "lucide-react";
import Foto from "../../assets/images/Foto.png";
import SocialLinks from "./SocialLinks";

import { NavLink } from "react-router-dom";

export default function MobileMenu({ navLinks, setMenuOpen, i18n, t }) {
  return (
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
      <h1 className="text-2xl font-bold mb-4 text-center">Elham Nakhkoob</h1>
      <SocialLinks />
      <ul className="space-y-6 text-lg w-full max-w-xs text-center mt-4">
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
              {t(label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
