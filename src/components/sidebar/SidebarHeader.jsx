import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SidebarHeader({ menuOpen, setMenuOpen }) {
  return (
    <div className="flex justify-between items-center md:hidden">
      <h1 className="text-xl font-bold">Elham Nakhkoob</h1>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );
}
