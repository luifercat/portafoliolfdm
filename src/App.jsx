import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#e8e8e8] font-Exo">
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
        <button className="bg-slate-100 px-4 py-2 rounded hover:bg-red-500 dark:bg-slate-950 dark dark:text-white dark:hover:bg-blue-900">
          DARK
        </button>
      </div>
    </div>
  );
}

export default App;
