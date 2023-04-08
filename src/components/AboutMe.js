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
        <p id='rightHeading' className="rightHeading">I am a freelance web developer</p>
        <p id='rightSubDescription'
          className={
            isLightTheme ? "rightSubDescription-dark" : "rightSubDescription"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex
          accusantium reprehenderit. Itaque fuga eaque enim laboriosam nostrum
          nihil doloribus aperiam! Voluptas laborum in sed reiciendis minima
          expedita nulla vero!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
