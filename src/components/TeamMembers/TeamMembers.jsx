import React from "react";
import "./_TeamMembers.scss";
import kennedy from "../../images/kennedy.png";
import mijan from "../../images/mijan.png";
import mritunjoy from "../../images/mritunjoy.png";
import munshi from "../../images/munshi.png";
import wildan from "../../images/wildon.png";
import zaid from "../../images/zaid.png";
import ebosele from "../../images/ebosele.png";
import bishen from "../../images/bishen.png";
// import GithubIcon from "../../images/github.png";
// import DribbleIcon from "../../images/dribble.png";
// import ellipse from "../../images/ellipse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";

const TeamMembers = () => {
  return (
    <>
      <h2 className="intro" id="team">
        Let's Introduce Our <span className="intro-team"> Team</span>{" "}
      </h2>
      <section className="teammembers-section">
        <div>
          <ul className="circle-container">
            <li>
              <img src={kennedy} alt="" />
              <div class="circle-text">
                <p>Kennedy - Frontend Developer(Founder)</p>
              </div>
            </li>
            <li>
              <img src={wildan} alt="" />
              <div class="circle-text">
                <p>Wildan - Web Designer</p>
              </div>
            </li>
            <li>
              <img src={bishen} alt="" />
              <div class="circle-text">
                <p>Bishen - Debug & Optimaization</p>
              </div>
            </li>
            <li>
              <img src={mritunjoy} alt="" />
              <div class="circle-text">
                <p>Mritunjoy - Backend Developer</p>
              </div>
            </li>
            <li>
              <img src={zaid} alt=""/>
              <div class="circle-text">
                <p>Zaid - Frontend Developer</p>
              </div>
            </li>
            <li>
              <img src={munshi} alt=""/>
              <div class="circle-text">
                <p>Moniratna - Backend Developer</p>
              </div>
            </li>
            <li>
              <img src={ebosele} alt=""/>
              <div class="circle-text">
                <p>Ebosele - Web Designer</p>
              </div>
            </li>
            <li>
              <img src={mijan} alt=""/>
              <div class="circle-text">
                <p>Mijan - Frontend Developer</p>
              </div>
            </li>
            {/* <li>
              <img className="ellipse" src={ellipse} />
            </li> */}
            <li>
              <h2>
                <span className="logo-web">Web</span>
                <span className="logo-stack">Stack</span>
              </h2>
            </li>
          </ul>
        </div>
        <div className="profile-description">
          <h2>Our Profile</h2>
          <h3>Consists of team members who are experts in their fields</h3>
          <p>
            Our members come from various countries and are very talented in
            their fields
          </p>
          <div className="button-container">
            <a href="https://dribbble.com/WebStack_corp?onboarding=true" target="blank" className="button">
              <FontAwesomeIcon icon={faDribbble} />
              See our Dribble
            </a>
            <a href="https://github.com/Webstack-Corporation" target="blank" className="button">
              <FontAwesomeIcon icon={faGithub} />
              See our Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
