import { X } from "lucide-react";
import Foto from "../../assets/images/Foto.png";
import SocialLinks from "./SocialLinks";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ navLinks, setMenuOpen, i18n, t }) {
  return (
    <div className="fixed inset-0 bg-[#fdfdfd] text-[#333333] z-50 flex flex-col items-center p-6 md:hidden overflow-auto">
      <div className="w-full flex justify-end mb-6">
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="text-[#333333] hover:text-[#000000] transition"
        >
          <X size={28} />
        </button>
      </div>

      <img
        src={Foto}
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover shadow-lg mb-4"
      />
      <h1 className="text-2xl font-bold text-center mb-2">Elham Nakhkoob</h1>
      <p className="text-sm text-[#666] mb-4">Fullstack Developer</p>

      <SocialLinks />

      <ul className="space-y-4 text-lg w-full max-w-xs text-center mt-6">
        {navLinks.map(({ to, label, exact }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={exact}
              className={({ isActive }) =>
                isActive
                  ? "block font-semibold py-2 px-4 bg-[#b9b2b0] text-white rounded"
                  : "block py-2 px-4 text-[#333333] rounded hover:bg-gray-100 transition"
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
