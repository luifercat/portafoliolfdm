import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log("Changing language to", lng);
    i18n.changeLanguage(lng);
  };
  //hover:text-red-600
  return (
    <div
      className="flex justify-between items-center text-center text-cyan-700 bg-transparent  absolute top-0 left-100 w-14 h-6 "
      style={{ zIndex: 1000, position: "relative" }}
    >
      <button
        className="text-sm text-teal-800 font-bold hover:text-red-600 custom-neum w-8"
        type="button"
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className="text-sm text-teal-800 font-bold hover:text-red-600 custom-neum w-8"
        type="button"
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
      {/* Agrega más botones según sea necesario */}
    </div>
  );
};

export default LanguageSwitcher;
