import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = ({ isLightTheme }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div id={isLightTheme ? "experience" : "experienceDark"}>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <p className="projectsHeading">Experience and Achievements</p>

      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div data-aos="fade-down" class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Freelancer</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div data-aos="fade-down" class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">Project Contributer at VigyaAi</span>
              <span>2nd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
        <div data-aos="fade-down" class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details">
              <span class="title">Top 1.5% in International Hackathon</span>
              <span>3rd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div data-aos="fade-down" class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">1st Prize in WebSpin Contest</span>
              <span>4th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div data-aos="fade-down" class="row row-1">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">9th State Rank in IRAO</span>
              <span>4th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
