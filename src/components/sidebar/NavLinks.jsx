import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavLinks({ navLinks }) {
  const { t } = useTranslation();

  return (
    <ul className="flex gap-4">
      {navLinks.map(({ to, label, exact }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={exact}
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-b-4 border-[#5a3e36] pb-1 text-[#1e1e1e] transition"
                : "text-[#333333] hover:border-b-2 hover:border-[#aaa] pb-1 transition"
            }
          >
            {t(label)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
