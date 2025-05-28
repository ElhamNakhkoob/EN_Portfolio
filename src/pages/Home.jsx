import { useTranslation } from "react-i18next";
import Foto from "../assets/images/web-development.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-6 md:pl-16 text-[#DADADA] py-8 md:py-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">{t("home.name")}</h1>
        <h2 className="text-xl md:text-2xl mt-2">{t("home.title")}</h2>
        <p className="text-base md:text-lg mt-2">{t("home.subtitle")}</p>
      </div>
      <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 px-6 md:px-0 pb-8 md:pb-0">
        <img
          src={Foto}
          alt="Portfolio Visual"
          className="h-auto md:h-[350px] object-cover md:rounded-none m-0"
        />
      </div>
    </div>
  );
}
