import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./Components/Navbar";
import DotGroup from "./Components/DotGroup";
import Landing from "./Components/Landing";
import Skills from "./Components/Skills";
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <Skills />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <div className="h-20 "/>

      <Skills/>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <Skills/>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}
export default App;
