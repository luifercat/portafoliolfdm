import React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// sm:-left-2  right-2
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="bg-[#e8e8e8] font-Exo relative">
        <Sidenav />
        <div className=" absolute mt-2 sm:right-4 max-w-screen-sm">
          <LanguageSwitcher />
        </div>

        <Main />
        <Work />
        <Projects />
        <Contact />
        {/* <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
        <button className="bg-slate-100 px-4 py-2 rounded hover:bg-red-500 dark:bg-slate-950 dark dark:text-white dark:hover:bg-blue-900">
          DARK
        </button>
      </div> */}
      </div>
    </I18nextProvider>
  );
}

export default App;
