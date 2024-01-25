import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css, createGlobalStyle } from "styled-components";

/* --------------------------- Image Dependencies --------------------------- */
// import { Close, Github, Product } from "../Icons";

/* ------------------------- SideBarModal propTypes ------------------------ */
const propTypes = {
  show: PropTypes.bool,
  closeShow: PropTypes.func,
  size: PropTypes.string,
  overlayColor: PropTypes.string,
  css: PropTypes.object,
  data: PropTypes.object,
};

/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps = {
  show: false,
  closeShow: () => {},
  size: "md",
  overlayColor: "rgba(0, 0, 0, 0.8)",
  css: {},
};

const SideBar = ({
  show,
  setShow,
  size,
  overlayColor,
  isLightTheme,
  css: styling,
  data,
}) => {
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // if (show === true) {
  //   const skills = document.getElementById("techStack");
  //   console.log("====================================");
  //   console.log(skills);
  //   console.log("====================================");
  // } else {
  //   // document.getElementById("techStack").setAttribute("style", "opacity:1");
  // }
  return (
    <>
      {show && (
        <>
          <Body />
          <Wrapper size={size} css={styling} data-testid="sidebarmodal">
            <Overlay
              overlayColor={overlayColor}
              className="overlay"
              onClick={() => {
                setShow(false);
                const skills = document.getElementsByClassName("techStack")[0];
                skills.style.opacity = "1";
              }}
            />
            <aside className="fadeInLeft">
              <div
                className={
                  isLightTheme ? "pos__relative" : "pos__relative_dark"
                }
              >
                <div className="d-flex justify-content-between header">
                  <button
                    onClick={() => {
                      setShow(false);
                      const skills =
                        document.getElementsByClassName("techStack")[0];
                      skills.style.opacity = "1";
                    }}
                    className="none-button"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#8F9BB3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z"
                        fill="#8F9BB3"
                      />
                    </svg>
                  </button>
                </div>

                <div className="main__post">
                  <h3 className="mt-4">{data.title}</h3>
                  <p style={{ paddingBottom: "3%" }} className="te mb-4">
                    {data.description}
                  </p>
                  <img src={data.imageUrl} alt="img" />
                  <h4>About</h4>
                  <p>{data.about}</p>
                  <h4>Technologies</h4>
                  {data.technologies && (
                    <p className="d-flex flex-wrap">
                      {data.technologies.map((tech, index) => (
                        <span
                          style={{
                            fontSize: "15px",
                            backgroundColor: "rgb(105, 104, 105)",
                            color: "#fff",
                            margin: "2px",
                            transition: "1s ease",
                          }}
                          key={index}
                          className="b-block mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </p>
                  )}
                  {/* {data.link && (
                    <>
                      <h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z" />
                        </svg>
                        Website
                      </h4>
                      <p>
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.link}
                        </a>
                      </p>
                    </>
                  )} */}
                  {data.github && (
                    <>
                      <h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Github
                      </h4>
                      <p>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.github}
                        </a>
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={data.link}
                  className="open__project"
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                >
                  Open Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                  </svg>
                </a>
              </div>
            </aside>
          </Wrapper>
        </>
      )}
    </>
  );
};

const generateSize = (size) => {
  if (size === "sm")
    return css`
      width: 21.8em;
      padding: 1.5rem;
    `;
  if (size === "lg")
    return css`
      width: 34em;
    `;
  if (size === "md")
    return css`
      width: 29em;
      padding: 2rem;
    `;
};
const Body = createGlobalStyle`

body{
  overflow: hidden
}`;
const Wrapper = styled.div`
  .none-button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding-left: 0;
    svg {
      fill: none !important;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  aside {
    background: var(--bg);
    ${(props) => generateSize(props.size)}
    @media (max-width: 768px) {
      width: 100% !important;
    }
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
    will-change: opacity, transform;
    &.fadeInLeft {
      animation-name: fadeLeft;
      animation-duration: 0.5s;
      animation-fill-mode: both;
      padding: 0;
    }
    .header {
      margin-bottom: 2rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border-color);
      svg {
        /* path {
          stroke: var(--article-color);
          &:last-child {
            fill: var(--article-color);
          }
        } */
      }
      a {
        font-size: var(--font-sm);
        font-weight: 900;
        color: var(--sidebar-cta);
      }
    }
    .pos__relative {
      background: linear-gradient(
        0deg,
        var(--color-lightM-homepage-dark),
        var(--color-lightM-homepage-light)
      );
      ${"" /* z-index: 9999; */}
      position: relative;
      padding: 2rem 2rem 4rem;
      overflow-x: overlay;
      max-height: 100%;
    }
    .pos__relative_dark {
      ${
        "" /* background: linear-gradient(
        0deg,
        var(--color-darkM-homepage-dark),
        var(--color-darkM-homepage-light)
      ); */
      }
      background: #0e141b;
      position: relative;
      padding: 2rem 2rem 4rem;
      overflow-x: overlay;
      max-height: 100%;
    }
    .open__project {
      background: black;
      text-decoration: none;
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 17px;
      color: #ffffff;
      font-weight: 600;
      text-align: center;
      font-size: var(--font-sm);
      svg {
        width: 16px;
        vertical-align: bottom;
        margin-left: 6px;
        fill: #fff;
      }
    }
  }
  ${
    "" /* .b-block {
    background: rgb(67, 56, 8);
    padding: 4px 10px;
    border-radius: 50px;
    text-transform: capitalize;
    font-size: 11px;
    margin-right: 6px;
    color: rgb(255, 255, 255);
    font-weight: 500;
  } */
  }
  .main__post {
    h3 {
      font-size: 1.8rem;
      /* margin-bottom: 1.3rem; */
      color: var(--cw);
      font-weight: 800;
      padding-bottom: 2%;
    }
    h4 {
      font-size: var(--font-md);
      color: var(--cw);
      margin-top: 2rem;
      margin-bottom: 0.8rem;
      svg {
        vertical-align: bottom;
        width: 15px;
        margin-right: 3px;
      }
    }
    p {
      color: var(--article-color);
      font-size: var(--font-sm);
      span {
        background: var(--sidebar-tag);
        padding: 6px 13px;
        border-radius: 4px;
        text-transform: capitalize;
        font-size: 11px;
        margin-right: 6px;
        color: var(--cw);
        font-weight: 700;
      }
      a {
        font-weight: 600;
        color: var(--sidebar-cta);
        svg {
          fill: var(--cw);
        }
      }
    }
    img {
      width: 100%;
      height: 250px;
      // object-fit: cover;
      background-size: cover;
      border-radius: 11px;
      // background-size: 100% 100%;
    }
  }
`;

const Overlay = styled.div`
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${(props) => props.overlayColor || "rgba(0, 0, 0, 0.8)"};
`;

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
