import React, { useRef, useState } from "react";
import SideBar from "./Sidebar";
import PROJECTS_DATA from "./Project_Data";

const Projects = () => {
  //   const asideRef = useRef();

  //   const handleClick = () => {
  //     console.log(asideRef.current);
  //     asideRef.current.style = "display: block";
  //   };

  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState([]);

  //   PROJECTS_DATA.map((data) => console.log(data.title));

  return (
    <section id="projects">
      <p class="projectsHeading">Projects</p>
      <div className="sc-gZMcBi jwbuPS">
        {PROJECTS_DATA.map((data) => (
          <>
            <div
              role="gridcell"
              id="cardHover"
              tabindex="0"
              className="sc-jTzLTM dFqYWZ"
              onClick={() => {
                setProjectData(data);
                setShow(true);
              }}
              style={{ background: "url($`{data.imageUrl}`)" }}
            >
              <img src={data.imageUrl} className="cardImage" />
              <div class="content__slate">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p class="d-flex flex-wrap">
                  {data.technologies.map((tech) => (
                    <span class="d-block mb-1">{tech}</span>
                  ))}
                </p>
              </div>
            </div>
          </>
        ))}
        <SideBar setShow={setShow} show={show} data={projectData} />
      </div>
    </section>
  );
};

export default Projects;
