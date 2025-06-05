import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-4 py-12 text-white flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">
            {t("resume.experience.title")}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                {t("resume.experience.job1.company")}
              </h3>
              <p className="text-sm italic">
                {t("resume.experience.job1.role")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.experience.job1.desc1")}</li>
                <li>{t("resume.experience.job1.desc2")}</li>
                <li>{t("resume.experience.job1.desc3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                {t("resume.experience.job2.company")}
              </h3>
              <p className="text-sm italic">
                {t("resume.experience.job2.role")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.experience.job2.desc1")}</li>
                <li>{t("resume.experience.job2.desc2")}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                {t("resume.experience.job3.company")}
              </h3>
              <p className="text-sm italic">
                {t("resume.experience.job3.role")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.experience.job3.desc1")}</li>
                <li>{t("resume.experience.job3.desc2")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">
            {t("resume.education.title")}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                {t("resume.education.edu1.institution")}
              </h3>
              <p className="text-sm italic">
                {t("resume.education.edu1.program")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.education.edu1.frontend")}</li>
                <li>{t("resume.education.edu1.backend")}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                {t("resume.education.edu2.institution")}
              </h3>
              <p className="text-sm italic">
                {t("resume.education.edu2.program")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.education.edu2.thesis")}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                {t("resume.education.edu3.institution")}
              </h3>
              <p className="text-sm italic">
                {t("resume.education.edu3.program")}
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 mx-auto text-center md:text-left max-w-xs md:max-w-full">
                <li>{t("resume.education.edu3.project")}</li>
              </ul>
            </div>

            <div className="text-center mb-10">
              <a
                href="Elham.nakhkoob-cv.pdf"
                download="Elham-Nakhkoob-CV.pdf"
                className="inline-block mt-4 px-6 py-2 bg-white rounded text-black font-semibold"
              >
                {t("resume.download")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
