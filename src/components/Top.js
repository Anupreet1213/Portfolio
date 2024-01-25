import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamBurgerMenu";
import { Link } from "react-scroll";
import sound from "./PortfolioBGM.mp3";

const Top = ({ isLightTheme, setIsLightTheme }) => {
  const handleTheme = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle("lightModeBody");
    setIsLightTheme(!isLightTheme);
  };
  const [audio] = useState(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <div className={isLightTheme ? "lightModeTop" : "top"} id="top">
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>

      <nav className={isLightTheme ? "navbarLight" : "navbar"} id="navbar">
        <h2 className="name">Anupreet</h2>
        <div className="navbar-links">
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            className={isLightTheme ? "nav-items-light" : "nav-items"}
            to={isLightTheme ? "projects" : "projectsDark"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            className={isLightTheme ? "nav-items-light" : "nav-items"}
            to={isLightTheme ? "experience" : "experienceDark"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Achievements
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to="techStackNav"
            spy={true}
            className={isLightTheme ? "nav-items-light" : "nav-items"}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to={isLightTheme ? "contactMe" : "contactMeDark"}
            spy={true}
            smooth={true}
            className={isLightTheme ? "nav-items-light" : "nav-items"}
            offset={50}
            duration={500}
          >
            Socials
          </Link>
        </div>
        <div class="icons">
          <i
            id="toggleLight"
            style={{ cursor: "pointer" }}
            className={
              isLightTheme
                ? "fa-solid fa-sun toggleLight"
                : "fa-solid fa-moon toggleLight"
            }
            onClick={handleTheme}
          ></i>

          <i
            onClick={() => setIsPlaying(!isPlaying)}
            id="toggleSound"
            style={{ cursor: "pointer" }}
            className={
              isPlaying ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark"
            }
          ></i>
          <HamburgerMenu
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
        </div>
      </nav>
      <svg viewBox="0 0 1340 319" className="svgClass">
        <path
          className={isLightTheme ? "lightModeSvg" : "svgPath"}
          fill=" hsl(210deg, 30%, 8%)"
          fill-opacity="1"
          d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,186.7C560,203,640,213,720,213.3C800,213,880,203,960,197.3C1040,192,1120,192,1200,192C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <img
        className={isLightTheme ? "sittingBoyLight" : "sittingBoy"}
        src="images/me-light.png"
        alt="Sitting Boy"
      />
    </div>
  );
};

export default Top;
