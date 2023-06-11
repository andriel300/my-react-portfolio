import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
// import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-background dark:bg-dark">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="bg-background dark:bg-dark">
        <div className="w-5/6 mx-auto md:h-full">
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradient />
      <div className="bg-background dark:bg-dark">
        <div className="w-5/6 mx-auto ">
          <MySkills />
        </div>
      </div>
      <LineGradient />
      <div className="bg-background dark:bg-dark">
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>
      </div>
      {/* <div className="w-full mx-auto md:h-full">
        <Testimonials />
      </div> */}
      <LineGradient />
      <div className="bg-background dark:bg-dark">
        <div className="w-5/6 mx-auto md:h-full ">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
