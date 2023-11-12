import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      workTitle: "WORK",
      workSub: "Work",
      workDes:
        "Although I work as an independent lawyer, my life has always revolved around technology, so much so that I have directed infrastructure projects in this field, as well as I have been in charge of systems departments regarding negotiations in the acquisition of software and hardware evaluating the requirements for its acquisition taking into account the benefit that this generates at the business level.",
      softSkillsSub: "Soft Skills",
      softSkillsDes:
        "Due to my work experience, I have had the opportunity to acquire the soft skills necessary to interact effectively with my colleagues in the workplace. I always strive to create work environments where camaraderie and professionalism take precedence, benefiting both my colleagues and the company.",
      learningAtc: "Current Learning Activities",
      learningAtcDes:
        "In these times where technology is a part of our daily lives, it is almost essential to stay abreast of everything it brings us. It is for this reason, and fueled by my passion for software development, that I am always in a state of continuous learning about new tools that contribute to its creation. These tools include programming languages, frameworks, libraries, methodologies, and more. Currently, I am enrolled in the Academlo BootCamp, acquiring knowledge in Frontend (HTML, CSS, React, Tailwind), and soon, I will be delving into Backend",
      projectsTitle: "PROJECTS",
      projectsDes:
        "In my recent entry into the world of programming, I am having the opportunity to create projects that strengthen my knowledge in programming languages such as JavaScript, libraries such as react, Tailwind, and computer markup languages such as HTML and CSS. The following projects are some examples of learning and which I am updating and developing more and more every day.",
      contactTitle: "CONTACT",
      contactText01: "Contact me and let's talk, I'm sure I can help you.!!",
    },
  },
  es: {
    translation: {
      workTitle: "TRABAJO",
      workSub: "Trabajo",
      workDes:
        "Aunque me desempeño como abogado independiente, mi vida siempre a girado en torno a la tecnología, tanto así que he dirigido proyectos de infraestructura en este campo, así como me he encargado de departamentos de sistemas en lo concerniente a negociaciones en la adquisición de software y hardware evaluando los requisitos para para su adquisición teniendo en cuenta el beneficio que esto genera a nivel empresarial.",
      softSkillsSub: "Habilidades Blandas",
      softSkillsDes:
        "Debido a mi trabajo desempeñado, he tenido la oportunidad de adquirir las habilidades blandas necesarias, para desenvolverme frente a mi pares en el trabajo, siempre tratando de crear ambientes laborales en donde el compañerismo y el profesionalismo primen en bien tanto de mis compañeros como de la empresa.",
      learningAtc: "Actividades actuales de aprendizaje",
      learningAtcDes:
        "En estos tiempos donde la tecnología es parte de nuestra vida, es casi necesario estar al tanto de todo lo que ella nos trae, es por esta razón y por la pasión que siento por la creación de software, que siempre estoy en constante aprendizaje de nuevas herramientas que ayuden a la creación de este, herramientas como lenguajes de programación, frameworks, librerías, metodologías, etc., por lo cual, estoy cursando el BootCamp de Academlo, adquiriendo conocimientos en Frontend (html, Css, React, Tailwind) y próximamente Backend.",
      projectsTitle: "PROYECTOS",
      projectsDes:
        "En mi reciente ingreso al mundo de la programación estoy teniendo la oportunidad de crear proyectos que van afianzando mis conocimientos en lenguajes de programación como JavaScript, librerías como react, Tailwind lenguaje de marcado e informático como html y Css, los siguientes proyectos son algunos ejemplos de aprendizaje y los cuales voy actualizando y desarrollando cada día mas.",
      contactTitle: "CONTACTO",
      contactText01: "Contáctame y hablemos, seguro puedo ayudarlo!!!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
