import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { Marginer } from "../Marginer";
import {
  faDribbble,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && (
        <>
          <div className="footer" >
            <div className="newsletter">
              <h3>Subscribe to our Newsletter</h3>
              <p>
                Subscribe to our newsletter to regulerly get pro web development
                tips and follow our progress.
              </p>
              <div className="input">
                <input
                  type="text"
                  className="input"
                  placeHolder="email@example.com"
                />
                <button>Subscribe now</button>
              </div>
            </div>
            <div className="about-us">
              <h3>About us</h3>
              <ul>
                <li>
                  {" "}
                  <p> Our Profile</p>
                </li>
                <li>
                  {" "}
                  <p>Our Mission </p>
                </li>
                <li>
                  {" "}
                  <p>Our Vision </p>
                </li>
              </ul>
            </div>
            <div className="footer-left">
              <h2>
                <span className="logo-web">Web</span>
                <span className="logo-stack">Stack</span>
              </h2>
              <p>Over 8,912,000 Satisfied with our appearance</p>
              <div className="footer-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faDribbble} />
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
          <Marginer direction="vertical" margin="3em" />
          <div className="copyright">
            <p>
              ©️ Copyright 2021 <span className="logo-web-footer">Web</span>
              <span className="logo-stack-footer">Stack</span>
            </p>
          </div>
        </>
      )}
      <div className="footer">
        <div className="footer-left">
          <h2>
            <span className="logo-web">Web</span>
            <span className="logo-stack">Stack</span>
          </h2>
          <p>Over 8,912,000 Satisfied with our appearance</p>
          <div className="footer-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div className="about-us">
          <h3>About us</h3>
          <ul>
            <li>
              {" "}
              <p> Our Profile</p>
            </li>
            <li>
              {" "}
              <p>Our Mission </p>
            </li>
            <li>
              {" "}
              <p>Our Vision </p>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>
            Subscribe to our newsletter to regulerly get pro web development
            tips and follow our progress.
          </p>
          <div className="input">
            <input
              type="text"
              className="input"
              placeHolder="email@example.com"
            />
            <button>Subscribe now</button>
          </div>
        </div>
      </div>
      <Marginer direction="vertical" margin="3em" />
      <div className="copyright">
        <p>
          ©️ Copyright 2021 <span className="logo-web-footer">Web</span>
          <span className="logo-stack-footer">Stack</span>
        </p>
      </div>
    </>
  );
};

export default Footer;