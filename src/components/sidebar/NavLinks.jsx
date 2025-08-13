import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavLinks({ navLinks }) {
  const { t } = useTranslation();

  return (
    <ul className="flex gap-6">
      {navLinks.map(({ to, label, exact }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={exact}
            className={({ isActive }) =>
              `relative inline-block px-3 py-1 text-sm font-medium transition-all duration-200 ease-in-out
              ${
                isActive
                  ? "text-[#5a3e36] after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-[#5a3e36]"
                  : "text-[#444] hover:text-[#5a3e36] hover:after:absolute hover:after:inset-x-0 hover:after:-bottom-1 hover:after:h-[2px] hover:after:bg-[#5a3e36] after:transition-all after:duration-200 after:ease-in-out"
              }`
            }
          >
            {t(label)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
