import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavLinks({ navLinks }) {
  const { t } = useTranslation();

  return (
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
            {t(label)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
