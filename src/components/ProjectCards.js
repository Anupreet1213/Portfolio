import React from "react";

const ProjectCards = () => {
  return (
    <div
      role="gridcell"
      id="cardHover"
      tabindex="0"
      className="sc-jTzLTM dFqYWZ"
      onClick={() => setShow(true)}
    >
      <div class="content__slate">
        <h3>CEmission</h3>
        <p>Calculate your carbon footprints</p>
        <p class="d-flex flex-wrap">
          <span class="d-block mb-1">React</span>
          <span class="d-block mb-1">CSS</span>
          <span class="d-block mb-1">ML</span>
          <span class="d-block mb-1">MUI</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCards;
