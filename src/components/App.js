import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Top from "./Top";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <div className={isLightTheme ? "body" : "darkModeBody"}>
      <Top isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <AboutMe isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <Projects isLightTheme={isLightTheme} />
      <Skills />
      <Experience isLightTheme={isLightTheme} />
      <ContactMe />
    </div>
  );
}

export default App;
