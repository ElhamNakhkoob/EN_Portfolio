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
      className="bg-gray-600 text-white text-sm rounded px-2 py-1 focus:outline-none hover:bg-gray-500"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
