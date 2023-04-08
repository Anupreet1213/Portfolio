import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Top from "./Top";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  console.log("===========================================================");
  console.log(
    "======================Hey!! What are you doing Here? ====================="
  );
  console.log("===========================================================");

  return (
    <div className={isLightTheme ? "body" : "darkModeBody"}>
      <Top isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <AboutMe isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <Projects isLightTheme={isLightTheme} />
      <Skills />
      <Experience isLightTheme={isLightTheme} />
      <ContactMe isLightTheme={isLightTheme} />
    </div>
  );
}

export default App;
