import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const NavMenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 12em 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 52px;
  margin: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen, isLightTheme, setIsLightTheme }) {
  const handleTheme = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle("lightModeBody");
    setIsLightTheme(!isLightTheme);
  };

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a style={{ color: isLightTheme ? "black" : "white" }} href="#">
            Projects
          </a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a style={{ color: isLightTheme ? "black" : "white" }} href="#">
            Achievements
          </a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <a style={{ color: isLightTheme ? "black" : "white" }} href="#">
            Skills
          </a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <a style={{ color: isLightTheme ? "black" : "white" }} href="#">
            Socials
          </a>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
