import { useTranslation } from "react-i18next";
import aiPostImage1 from "../../assets/images/fullStackOne.png";
import aiPostImage2 from "../../assets/images/fullstacktwo.png";
import aiPostImage3 from "../../assets/images/fullstackthree.png";

const ProjectTwo = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">{t("projectTwo.title")}</h1>
      <p className="text-lg mb-6">{t("projectTwo.intro")}</p>
      <h2 className="text-2xl font-semibold mb-2">{t("projectTwo.design")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img
          src={aiPostImage1}
          alt={t("projectTwo.designAlt")}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={aiPostImage2}
          alt={t("projectTwo.designAlt")}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={aiPostImage3}
          alt={t("projectTwo.designAlt")}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{t("projectTwo.tech")}</h2>
      <ul className="list-disc list-inside mb-6">
        <li>PostgreSQL (Neon DB)</li>
        <li>SQL (for schema and table creation)</li>
        <li>Node.js & Express.js</li>
        <li>Sequelize ORM</li>
        <li>pg (PostgreSQL Client)</li>
        <li>Vite + React.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>RESTful API</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">
        {t("projectTwo.features")}
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>{t("projectTwo.feature1")}</li>
        <li>{t("projectTwo.feature2")}</li>
        <li>{t("projectTwo.feature3")}</li>
        <li>{t("projectTwo.feature4")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectTwo.repoTitle")}
      </h2>
      <p className="mb-2">{t("projectTwo.repoDesc")}</p>
      <a
        href="https://github.com/ElhamNakhkoob/fullstack-blog"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500"
      >
        {t("projectTwo.repoLink")}
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        {t("projectTwo.installTitle")}
      </h2>
      <ol className="list-decimal list-inside mb-6">
        <li>{t("projectTwo.install1")}</li>
        <li>{t("projectTwo.install2")}</li>
        <li>{t("projectTwo.install3")}</li>
        <li>{t("projectTwo.install4")}</li>
        <li>{t("projectTwo.install5")}</li>
        <li>{t("projectTwo.install6")}</li>
        <p className="text-sm text-gray-400 mb-4">
          PORT=4000
          <br />
          PG_URI=postgresql://posts_owner:npg_QWEt8IwdOFy9@ep-white-haze-a91177g5-pooler.gwc.azure.neon.tech/posts?sslmode=require&channel_binding=require
        </p>
        <li>{t("projectTwo.install7")}</li>
        <li>{t("projectTwo.install8")}</li>
      </ol>
    </div>
  );
};

export default ProjectTwo;
