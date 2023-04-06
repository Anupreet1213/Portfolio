import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Top from "./Top";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <>
      <div>
        <Top isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
        <AboutMe
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
        <Projects />
        <Skills />
        <Experience />
      </div>
    </>
  );
}

export default App;
