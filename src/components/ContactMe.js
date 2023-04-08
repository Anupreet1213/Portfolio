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
        </p>
        <div className="letsDoThisButton"> Let's Do This</div>
      </div>

      <div className="contactMeDescription">
        Living, learning, & leveling up one day at a time.
      </div>

      <div className="socialLinks">
        <div className="socialLinkDiv">
          <i class="fa-brands fa-twitter links"></i>
        </div>
        <div className="socialLinkDiv">
          <i class="fa-brands fa-linkedin links"></i>
        </div>
        <div className="socialLinkDiv">
          <i class="fa-brands fa-github links"></i>
        </div>
        <div className="socialLinkDiv">
          <i class="fa-solid fa-envelope links"></i>
        </div>
      </div>

      <div className="handcraftedBy">
        <p>Handcrafted by me © Aman Pathak</p>
      </div>
    </div>
  );
};

export default ContactMe;
