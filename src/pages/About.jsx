import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="text-[#FFFFFF] min-h-screen px-6 md:px-20 py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        {t("about.heading")}
      </h1>

      <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-12 text-[#FFFFFF]">
        {t("about.intro")}
      </p>

      <div className="relative border-l border-[#FFFFFF] pl-6 space-y-16">
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 mt-2 bg-white rounded-full border border-black shrink-0"></div>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed">
              {t("about.point1")}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 mt-2 bg-white rounded-full border border-black shrink-0"></div>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed">
              {t("about.point2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
