import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const ContactMe = ({ isLightTheme, setIsLightTheme }) => {
  // const handleTheme = () => {
  //   const contactMe = document.getElementsByClassName("contactMe")[0];
  //   contactMe.classList.toggle("contactMeDark");
  //   const contactMeDescription = document.getElementsByClassName(
  //     "contactMeDescription"
  //   )[0];
  //   contactMeDescription.toggle("contactMeDescriptionDark");
  //   const handcraftedBy = document.getElementsByClassName("handcraftedBy")[0];
  //   handcraftedBy.classList.toggle("handcraftedByDark");

  //   setIsLightTheme(!isLightTheme);
  // };

  return (
    <div className={isLightTheme ? "contactMe" : "contactMeDark"}>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div className="contactMeUpDiv">
        <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
        <p className="startAProject">Start a project</p>
        <p className="startAProjectDescription">
          Interested in working together? We should queue up a time to chat.
        </p>{" "}
        <a
          style={{ textDecoration: "none" }}
          className="letsDoThisButton"
          href="mailto:anupreet.2003@gmail.com"
        >
          <div> Let's Do This</div>
        </a>
      </div>

      <div
        className={
          isLightTheme ? "contactMeDescription" : "contactMeDescriptionDark"
        }
      >
        Living, learning, & leveling up one day at a time.
      </div>

      <div className="socialLinks">
        <a
          href="https://twitter.com/AnupreetSrivas2"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-twitter links"
                : "fa-brands fa-twitter linksDark"
            }
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anupreet-srivastava-973013223/"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-linkedin links"
                : "fa-brands fa-linkedin linksDark"
            }
          ></i>
        </a>
        <a
          href="https://github.com/Anupreet1213"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-github links"
                : "fa-brands fa-github linksDark"
            }
          ></i>
        </a>
        <a
          href="mailto:anupreet.2003@gmail.com"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-solid fa-envelope links"
                : "fa-solid fa-envelope linksDark"
            }
            s
          ></i>
        </a>
      </div>

      <div className={isLightTheme ? "handcraftedBy" : "handcraftedByDark"}>
        <p>Handcrafted by me © Anupreet Srivastava</p>
      </div>
    </div>
  );
};

export default ContactMe;
