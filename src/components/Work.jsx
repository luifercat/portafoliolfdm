import WorkItem from "./WorkItem";

const data = [
  {
    title: "Trabajo",
    details:
      "Aunque me desempeño como abogado independiente, mi vida siempre a girado en torno a la tecnología, tanto así que he dirigido proyectos de infraestructura en este campo, así como me he encargado de departamentos de sistemas en lo concerniente a negociaciones en la adquisición de software y hardware evaluando los requisitos para para su adquisición teniendo en cuenta el beneficio que esto genera a nivel empresarial.",
  },
  {
    title: "Habilidades blandas",
    details:
      "Debido a mi trabajo desempeñado, he tenido la oportunidad de adquirir las habilidades blandas necesarias, para desenvolverme frente a mi pares en el trabajo, siempre tratando de crear ambientes laborales en donde el compañerismo y el profesionalismo primen en bien tanto de mis compañeros como de la empresa.",
  },
  {
    title: "Actividades actuales de aprendizaje",
    details:
      "En estos tiempos donde la tecnología es parte de nuestra vida, es casi necesario estar al tanto de todo lo que ella nos trae, es por esta razón y por la pasión que siento por la creación de software, que siempre estoy en constante aprendizaje de nuevas herramientas que ayuden a la creación de este, herramientas como lenguajes de programación, frameworks, librerías, metodologías, etc., por lo cual, estoy cursando el BootCamp de Academlo, adquiriendo conocimientos en Frontend (html, Css, React, Tailwind) y próximamente Backend.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10 ">
      <div className="flex justify-center items-center mb-10">
        <h1 className="w-60 text-4xl font font-bold text-center text-cyan-700 custom-neum">
          TRABAJO
        </h1>
      </div>
      {data.map((item, idc) => (
        <WorkItem key={idc} title={item.title} details={item.details} />
      ))}
    </div>
  );
};
export default Work;
