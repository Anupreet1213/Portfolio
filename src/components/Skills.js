import React from "react";

const Skills = ({ isLightTheme }) => {
  return (
    <section
      className="techStack"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <p className={isLightTheme ? "techStackHeading" : "techStackHeadingDark"}>
        Skills and Technologies
      </p>
      <div className="techStackWrapperDiv">
        <div className="techStackDiv">
          <img src="images/html-5.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">HTML5</p>
        </div>
        <div className="techStackDiv">
          <img src="images/css-3.png" alt="css" className="techStackIcons" />
          <p className="techStackDivText">CSS</p>
        </div>
        <div className="techStackDiv">
          <img src="images/js.png" alt="js" className="techStackIcons" />
          <p className="techStackDivText">JavaScript</p>
        </div>
        <div className="techStackDiv">
          <img
            src="images/science.png"
            alt="React"
            className="techStackIcons"
          />
          <p className="techStackDivText">React</p>
        </div>
        <div className="techStackDiv">
          <img src="images/node-js.png" alt="Node" className="techStackIcons" />
          <p className="techStackDivText">Node JS</p>
        </div>
        <div className="techStackDiv">
          <img
            src="images/github.png"
            alt="Github"
            className="techStackIcons"
          />
          <p className="techStackDivText">Github</p>
        </div>
        <div className="techStackDiv">
          <img src="images/java.png" alt="Java" className="techStackIcons" />
          <p className="techStackDivText">Java</p>
        </div>
        <div className="techStackDiv">
          <img src="images/c-.png" alt="C" className="techStackIcons" />
          <p className="techStackDivText">C++</p>
        </div>
        <div className="techStackDiv">
          <img
            src="images/firebase.png"
            alt="html"
            className="techStackIcons"
          />
          <p className="techStackDivText">Firebase</p>
        </div>
        <div className="techStackDiv">
          <img src="images/mongodb.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">MongoDB</p>
        </div>
        <div className="techStackDiv">
          <img src="images/ts.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">TypeScript</p>
        </div>
        <div className="techStackDiv">
          <img src="images/redux.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">Redux</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
