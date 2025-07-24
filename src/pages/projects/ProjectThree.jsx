import { useTranslation } from "react-i18next";
import pokemonImg from "../../assets/images/pokemon.png";
import pokemonImg1 from "../../assets/images/pokemon1.png";
import pokemonImg2 from "../../assets/images/pokemon2.png";
import pokemonImg3 from "../../assets/images/pokemon3.png";

const ProjectThree = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-6xl mx-auto text-[#1e1e1e] mt-10">
      <h1 className="text-2xl font-bold mb-4">{t("projectThree.title")}</h1>

      <p className="text-lg mb-6">{t("projectThree.intro")}</p>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectThree.design")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {[pokemonImg, pokemonImg1, pokemonImg2, pokemonImg3].map(
          (img, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md  flex items-center justify-center"
            >
              <img
                src={img}
                alt={`${t("projectThree.designAlt")} ${index + 1}`}
                className="h-100 w-auto object-contain"
              />
            </div>
          )
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-2">{t("projectThree.tech")}</h2>
      <ul className="list-disc list-inside mb-6">
        <li>React.js (Vite)</li>
        <li>React Router</li>
        <li>Node.js + Express</li>
        <li>MongoDB (Atlas) + Mongoose</li>
        <li>Tailwind CSS</li>
        <li>PokeAPI integration</li>
        <li>RESTful API</li>
        <li>LocalStorage persistence</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectThree.features")}
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>{t("projectThree.feature1")}</li>
        <li>{t("projectThree.feature2")}</li>
        <li>{t("projectThree.feature3")}</li>
        <li>{t("projectThree.feature4")}</li>
        <li>{t("projectThree.feature5")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectThree.repoTitle")}
      </h2>
      <p className="mb-2">{t("projectThree.repoDesc")}</p>
      <a
        href="https://github.com/ElhamNakhkoob/pokemon-fullstack"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500"
      >
        {t("projectThree.repoLink")}
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Live Demo</h2>
      <p className="mb-6">
        You can explore the deployed game here:{" "}
        <a
          href="https://pokemon-battlegame-frontend.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-500"
        >
          Demo
        </a>
      </p>
    </div>
  );
};

export default ProjectThree;
