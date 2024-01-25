// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { NavMenu } from "./NavMenu";

export function HamburgerMenu({ isLightTheme, setIsLightTheme }) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // const handleTheme = () => {
  //   const body = document.getElementsByTagName("BODY")[0];
  //   body.classList.toggle("lightModeBody");
  //   setIsLightTheme(!isLightTheme);
  // };

  return (
    <HamburgerMenuContainer>
      <MenuToggle
        toggle={toggleMenu}
        isOpen={isOpen}
        isLightTheme={isLightTheme}
      />
      <MenuContainer
        style={{ backgroundColor: isLightTheme ? "white" : "black" }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          ></LoginButton>
          {/* <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            <i id="toggleSound" class="fa-solid fa-volume-high"></i>
          </LoginButton> */}
        </TopContainer>
        <ContentContainer>
          <NavMenu
            isOpen={isOpen}
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
            setOpen={setOpen}
          />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

// const HamburgerIcon = styled.div`
//   color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
//   cursor: pointer;
//   z-index: 99;
//   transition: all 250ms ease-in-out;
// `;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 103%;
  max-width: 103%;
  height: 100%;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

// const IconContainer = styled.div`
//   font-size: 16px;
//   color: #555;
//   padding-right: 5px;
// `;

const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #555;
  font-size: 14px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 5px 12px;

  &:hover {
    color: #666;
  }

  &:focus {
    outline: none;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };
