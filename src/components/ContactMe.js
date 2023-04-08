import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div className="contactMe">
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
        </p> <a style={{textDecoration: "none"}} className="letsDoThisButton" href="mailto:amanasstudent@gmail.com">

        <div> Let's Do This</div>
        </a>
      </div>

      <div className="contactMeDescription">
        Living, learning, & leveling up one day at a time.
      </div>

      <div className="socialLinks">
        <a href="https://twitter.com/Aman__Ap" className="socialLinkDiv">
          <i class="fa-brands fa-twitter links"></i>
        </a>
        <a href="https://www.linkedin.com/in/aman-pathak-original/" className="socialLinkDiv">
          <i class="fa-brands fa-linkedin links"></i>
        </a>
        <a href="https://www.linkedin.com/in/aman-pathak-original/" className="socialLinkDiv">
          <i class="fa-brands fa-github links"></i>
        </a>
        <a href="mailto:amanasstudent@gmail.com" className="socialLinkDiv">
          <i class="fa-solid fa-envelope links"></i>
        </a>
      </div>

      <div className="handcraftedBy">
        <p>Handcrafted by me © Aman Pathak</p>
      </div>
    </div>
  );
};

export default ContactMe;
