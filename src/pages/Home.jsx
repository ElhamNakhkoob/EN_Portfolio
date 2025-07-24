import { useTranslation } from "react-i18next";
import Foto from "../assets/images/web-development.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-60px)] w-full text-[#1e1e1e] pt-4">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-6 md:pl-16 py-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e]">
          {t("home.name")}
        </h1>
        <h2 className="text-xl md:text-2xl mt-2 text-[#333333]">
          {t("home.title")}
        </h2>
        <p className="text-base md:text-lg mt-2 text-[#555555]">
          {t("home.subtitle")}
        </p>
      </div>
      <div className="flex justify-center items-start w-full md:w-1/2 px-6 md:px-0 md:pt-16">
        <img
          src={Foto}
          alt="Portfolio Visual"
          className="h-auto md:h-[350px] object-cover m-0 shadow-md"
        />
      </div>
    </div>
  );
}
