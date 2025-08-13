import React from "react";
import { useTranslation } from "react-i18next";
import moodOne from "../../assets/images/mood1.png";
import moodTwo from "../../assets/images/mood2.png";
import moodThree from "../../assets/images/mood3.png";
import moodFour from "../../assets/images/mood4.png";

export default function ProjectFour() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto text-[#1e1e1e] mt-10">
      <h1 className="text-2xl font-bold mb-4">{t("projectFour.title")}</h1>
      <p className="text-lg mb-6">{t("projectFour.intro")}</p>

      <h2 className="text-2xl font-semibold mb-2">{t("projectFour.design")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img
          src={moodOne}
          alt="MoodSync App Interface"
          className="w-full h-64 object-contain rounded-lg shadow-md bg-gray-50"
        />
        <img
          src={moodTwo}
          alt="MoodSync Dashboard"
          className="w-full h-64 object-contain rounded-lg shadow-md bg-gray-50"
        />
        <img
          src={moodThree}
          alt="MoodSync Mood Tracking"
          className="w-full h-64 object-contain rounded-lg shadow-md bg-gray-50"
        />
        <img
          src={moodFour}
          alt="MoodSync Features"
          className="w-full h-64 object-contain rounded-lg shadow-md bg-gray-50"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectFour.overviewTitle")}
      </h2>
      <p className="mb-4">{t("projectFour.overview")}</p>

      <h2 className="text-2xl font-semibold mb-2">{t("projectFour.tech")}</h2>
      <ul className="list-disc list-inside mb-6">
        <li>React</li>
        <li>JavaScript</li>
        <li>Node.js & Express</li>
        <li>MongoDB</li>
        <li>Figma</li>
        <li>EmailJS</li>
        <li>Render</li>
        <li>AI Integration</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectFour.featuresTitle")}
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>{t("projectFour.feature1")}</li>
        <li>{t("projectFour.feature2")}</li>
        <li>{t("projectFour.feature3")}</li>
        <li>{t("projectFour.feature4")}</li>
        <li>{t("projectFour.feature5")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectFour.challengesTitle")}
      </h2>
      <div className="mb-6">
        <h4 className="font-semibold mb-2">
          {t("projectFour.challenge1Title")}
        </h4>
        <p className="mb-4">{t("projectFour.challenge1Desc")}</p>

        <h4 className="font-semibold mb-2">
          {t("projectFour.challenge2Title")}
        </h4>
        <p className="mb-4">{t("projectFour.challenge2Desc")}</p>

        <h4 className="font-semibold mb-2">
          {t("projectFour.challenge3Title")}
        </h4>
        <p className="mb-4">{t("projectFour.challenge3Desc")}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-2">
        {t("projectFour.demoTitle")}
      </h2>
      <p className="mb-2">{t("projectFour.demoText")}</p>
      <a
        href="https://moodsync-w23y.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500 mr-4"
      >
        {t("projectFour.live")}
      </a>
      <a
        href="https://github.com/MorrisKehbel/MoodSync"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500"
      >
        {t("projectFour.code")}
      </a>
    </div>
  );
}
