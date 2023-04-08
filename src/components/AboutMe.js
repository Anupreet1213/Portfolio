import React from "react";

const AboutMe = ({ isLightTheme, setIsLightTheme }) => {
  return (
    <section id="aboutMe" data-aos="fade-down" data-aos-duration="2000">
      <img
        className={isLightTheme ? "leftImageDull" : "leftImage"}
        src="images/3d-illustration-hand-and-code-png-removebg-preview.png"
        alt="Left Image"
      />
      <div className="rightDescription">
        <p id="rightHeading" className="rightHeading">
          Hey, I am Aman. Glad you landed here!!{" "}
        </p>
        <p
          id="rightSubDescription"
          className={
            isLightTheme ? "rightSubDescription-dark" : "rightSubDescription"
          }
        >
          I am a free-spirited web developer, constantly seeking to expand my
          skills and push boundaries. I approach coding as an art form, using my
          creativity to build websites that are both functional and visually
          stunning.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
