import { useTranslation } from "react-i18next";
import findFoodImage from "../../assets/images/findFood.png";

const ProjectOne = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto text-[#1e1e1e] mt-10">
      <h1 className="text-2xl font-bold mb-4">{t("projectOne.title")}</h1>

      <p className="text-lg mb-6">{t("projectOne.intro")}</p>

      <h2 className="text-2xl font-semibold mb-2">{t("projectOne.design")}</h2>
      <img
        src={findFoodImage}
        alt={t("projectOne.designAlt")}
        className="w-full h-auto rounded-lg shadow-md mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">{t("projectOne.tech")}</h2>
      <ul className="list-disc list-inside mb-6">
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Figma</li>
        <li>JSON Server</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectOne.features")}
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>{t("projectOne.feature1")}</li>
        <li>{t("projectOne.feature2")}</li>
        <li>{t("projectOne.feature3")}</li>
        <li>{t("projectOne.feature4")}</li>
        <li>{t("projectOne.feature5")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectOne.repoTitle")}
      </h2>
      <p className="mb-2">{t("projectOne.repoDesc")}</p>
      <a
        href="https://github.com/ElhamNakhkoob/FindFood"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500"
      >
        {t("projectOne.repoLink")}
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        {t("projectOne.installTitle")}
      </h2>
      <ol className="list-decimal list-inside mb-6">
        <li>{t("projectOne.install1")}</li>
        <li>{t("projectOne.install2")}</li>
        <li>{t("projectOne.install3")}</li>
        <li>{t("projectOne.install4")}</li>
        <li>{t("projectOne.install5")}</li>
      </ol>
    </div>
  );
};

export default ProjectOne;
