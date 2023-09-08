import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#e8e8e8] font-Exo">
      {/*</div><div className="bg-[url('./assets/images/bg-body.jpg')] "> */}
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
