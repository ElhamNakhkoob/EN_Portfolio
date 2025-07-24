import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="bg-white text-[#1e1e1e] text-sm rounded px-2 py-1 border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#662809]"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
