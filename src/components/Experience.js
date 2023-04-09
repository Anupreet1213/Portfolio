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
              <span>Since November 2022</span>
            </div>
            <p>
              I've been working as a freelancer since Nov'22. As a freelancer, I
              have the flexibility to choose my own clients and projects, which
              allows me to work on things that I am passionate about.
            </p>
            <div class="bottom">
              <a href="https://www.freelancer.in/u/Anupreet1AS">
                Freelance Profile
              </a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        <div data-aos="fade-down" class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">Project Contributer at VigyaAi</span>
              <span>Dec 2022-Feb 2023</span>
            </div>
            <p>
              Contributed to few projects at VigyaAi. One of them includes
              Profile Picker that provides a very effective solutions to the
              corporates for filtering their tonnes of cluttered resumes in just
              few clicks.
            </p>
            <div class="bottom">
              <a href="https://www.vigyaai.com/">VigyaAi</a>
              {/* <i>- Someone famous</i> */}
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
              <span>Jan 2023</span>
            </div>
            <p>
              Got a stunning position in the International Hackathon organised
              by Lablab.ai team. We built Machine Learning Based Project that
              uses Cohere API. The final product made us land in top 30 of the
              hackathon.
            </p>
            <div class="bottom">
              <a href="https://lablab.ai/u/@Anupreet1213/cld34si0200ctde0slnanv3av">
                {" "}
                Certification
              </a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        <div data-aos="fade-down" class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">1st Prize in WebSpin Contest</span>
              <span>April 2022</span>
            </div>
            <p>
              I got the first prize in an event that focused on Web Development.
              The Event was on intercollege level with more than 100
              participants.
            </p>
            <div class="bottom">
              <a href="https://drive.google.com/file/d/1ohTuPH-WfcIneh2v5FVjkcIse9vhcbYI/view?usp=sharing">
                Certification
              </a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        {/* <div data-aos="fade-down" class="row row-1">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">9th State Rank in IRAO</span>
              <span>February 2018</span>
            </div>
            <p>
              I topped my district in International Reasoning Olympiad and also
              got 9th State Rank.
            </p>
            <div class="bottom">
              <a href="https://drive.google.com/file/d/1_mzkZsVL8DqlML_-oLIKFjRFrZ1vaWUA/view?usp=share_link">
                Certification
              </a>
            </div>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
