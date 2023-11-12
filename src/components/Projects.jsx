import ProjectItem from "./ProjectItem";
import rymImg from "../assets/rym.jpg";
import pokedexImg from "../assets/pokedex.jpg";
import usuariosImg from "../assets/usuarios.jpg";
import climaImg from "../assets/clima.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("translation");

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <div className="flex justify-center items-center mb-10">
        <h1 className="w-60 text-4xl font-bold text-center text-cyan-700 custom-neum">
          {t("projectsTitle")}
        </h1>
      </div>
      <p className="text-center py-8">{t("projectsDes")}</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={pokedexImg}
          title="POKEDEX"
          sourcenet="https://xavier-luis.netlify.app/"
          sourcegit="https://github.com/luifercat/entregable5a.git"
        />
        <ProjectItem
          img={rymImg}
          title="rym App"
          sourcenet="https://entregable3-lfdm.netlify.app/"
          sourcegit="https://github.com/luifercat/entregable3.git/"
        />
        <ProjectItem
          img={usuariosImg}
          title="usuarios App"
          sourcenet="https://lfdm-e4.netlify.app/"
          sourcegit="https://github.com/luifercat/entregable4.git/"
        />
        <ProjectItem
          img={climaImg}
          title="clima App"
          sourcenet="https://entregable2-lfdm.netlify.app/"
          sourcegit="https://github.com/luifercat/entregable2.git"
        />
      </div>
    </div>
  );
};
export default Projects;
