import React from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

const Skills = ({ isLightTheme }) => {
  const divPos1 = useSpring({ x: 0, y: 0 });
  const divPos2 = useSpring({ x: 0, y: 0 });
  const divPos3 = useSpring({ x: 0, y: 0 });
  const divPos4 = useSpring({ x: 0, y: 0 });
  const divPos5 = useSpring({ x: 0, y: 0 });
  const divPos6 = useSpring({ x: 0, y: 0 });
  const divPos7 = useSpring({ x: 0, y: 0 });
  const divPos8 = useSpring({ x: 0, y: 0 });
  const divPos9 = useSpring({ x: 0, y: 0 });
  const divPos10 = useSpring({ x: 0, y: 0 });
  const divPos11 = useSpring({ x: 0, y: 0 });
  const divPos12 = useSpring({ x: 0, y: 0 });

  const bindDivPos1 = useDrag((params) => {
    divPos1.x.set(params.offset[0]);
    divPos1.y.set(params.offset[1]);
  });
  const bindDivPos2 = useDrag((params) => {
    divPos2.x.set(params.offset[0]);
    divPos2.y.set(params.offset[1]);
  });
  const bindDivPos3 = useDrag((params) => {
    divPos3.x.set(params.offset[0]);
    divPos3.y.set(params.offset[1]);
  });
  const bindDivPos4 = useDrag((params) => {
    divPos4.x.set(params.offset[0]);
    divPos4.y.set(params.offset[1]);
  });
  const bindDivPos5 = useDrag((params) => {
    divPos5.x.set(params.offset[0]);
    divPos5.y.set(params.offset[1]);
  });
  const bindDivPos6 = useDrag((params) => {
    divPos6.x.set(params.offset[0]);
    divPos6.y.set(params.offset[1]);
  });
  const bindDivPos7 = useDrag((params) => {
    divPos7.x.set(params.offset[0]);
    divPos7.y.set(params.offset[1]);
  });
  const bindDivPos8 = useDrag((params) => {
    divPos8.x.set(params.offset[0]);
    divPos8.y.set(params.offset[1]);
  });
  const bindDivPos9 = useDrag((params) => {
    divPos9.x.set(params.offset[0]);
    divPos9.y.set(params.offset[1]);
  });
  const bindDivPos10 = useDrag((params) => {
    divPos10.x.set(params.offset[0]);
    divPos10.y.set(params.offset[1]);
  });
  const bindDivPos11 = useDrag((params) => {
    divPos11.x.set(params.offset[0]);
    divPos11.y.set(params.offset[1]);
  });
  const bindDivPos12 = useDrag((params) => {
    divPos12.x.set(params.offset[0]);
    divPos12.y.set(params.offset[1]);
  });

  return (
    <section
      className="techStack"
      data-aos="fade-down"
      data-aos-duration="2000"
      id="techStackNav"
    >
      <p className={isLightTheme ? "techStackHeading" : "techStackHeadingDark"}>
        Skills and Technologies
      </p>
      <div className="techStackWrapperDiv">
        <animated.div
          style={{
            x: divPos1.x,
            y: divPos1.y,
          }}
          {...bindDivPos1()}
          className="techStackDiv"
        >
          <img src="images/html-5.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">HTML5</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos2.x,
            y: divPos2.y,
          }}
          {...bindDivPos2()}
          className="techStackDiv"
        >
          <img src="images/css-3.png" alt="css" className="techStackIcons" />
          <p className="techStackDivText">CSS</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos3.x,
            y: divPos3.y,
          }}
          {...bindDivPos3()}
          className="techStackDiv"
        >
          <img src="images/js.png" alt="js" className="techStackIcons" />
          <p className="techStackDivText">JavaScript</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos4.x,
            y: divPos4.y,
          }}
          {...bindDivPos4()}
          className="techStackDiv"
        >
          <img
            src="images/science.png"
            alt="React"
            className="techStackIcons"
          />
          <p className="techStackDivText">React</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos5.x,
            y: divPos5.y,
          }}
          {...bindDivPos5()}
          className="techStackDiv"
        >
          <img src="images/node-js.png" alt="Node" className="techStackIcons" />
          <p className="techStackDivText">Node JS</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos6.x,
            y: divPos6.y,
          }}
          {...bindDivPos6()}
          className="techStackDiv"
        >
          <img
            src="images/github.png"
            alt="Github"
            className="techStackIcons"
          />
          <p className="techStackDivText">Github</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos7.x,
            y: divPos7.y,
          }}
          {...bindDivPos7()}
          className="techStackDiv"
        >
          <img src="images/java.png" alt="Java" className="techStackIcons" />
          <p className="techStackDivText">Java</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos8.x,
            y: divPos8.y,
          }}
          {...bindDivPos8()}
          className="techStackDiv"
        >
          <img src="images/c-.png" alt="C" className="techStackIcons" />
          <p className="techStackDivText">C++</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos9.x,
            y: divPos9.y,
          }}
          {...bindDivPos9()}
          className="techStackDiv"
        >
          <img
            src="images/firebase.png"
            alt="html"
            className="techStackIcons"
          />
          <p className="techStackDivText">Firebase</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos10.x,
            y: divPos10.y,
          }}
          {...bindDivPos10()}
          className="techStackDiv"
        >
          <img src="images/mongodb.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">MongoDB</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos11.x,
            y: divPos11.y,
          }}
          {...bindDivPos11()}
          className="techStackDiv"
        >
          <img src="images/ts.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">TypeScript</p>
        </animated.div>
        <animated.div
          style={{
            x: divPos12.x,
            y: divPos12.y,
          }}
          {...bindDivPos12()}
          className="techStackDiv"
        >
          <img src="images/redux.png" alt="html" className="techStackIcons" />
          <p className="techStackDivText">Redux</p>
        </animated.div>
      </div>
    </section>
  );
};

export default Skills;
