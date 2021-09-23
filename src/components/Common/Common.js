import React from "react";
import "./_Common.scss";
import { useScroll } from "../../scroll-animations";
import{motion} from "framer-motion";
import { BoxAnimationLeft} from "../../animations";
import {BoxAnimationRight} from "../../animations";

const Common = ({ title, headline, description, btnText, img, type }) => {

  const [element, controls] = useScroll();
  const [elementB, controlsB] = useScroll();

  return (
    <div>
      {type === "mission" && (

        <div className="mission">

          <motion.div variants={BoxAnimationLeft} ref={element} initial="hidden" animate={controls} className="common-description">

            <h2>{title}</h2>
            <h3>{headline}</h3>
            <p>{description}</p>
            <button href="" className="common-button">
              {btnText}
            </button>

          </motion.div>

          <div>
            <img className="mission-img" src={img} alt="" />
          </div>

        </div>
      )}

      {type === "vision" && (
        <div className="vision ">

          <div>
            <img className="vision-img" src={img} alt="" />
          </div>

          <motion.div variants={BoxAnimationRight} ref={elementB} initial="hidden" animate={controlsB} className="vision-description">

            <h2>{title}</h2>
            <h3>{headline}</h3>

            <p>{description}</p>
            <button href="" className="common-button">
              {btnText}
            </button>

          </motion.div>

        </div>
      )}
    </div>
  );
};

export default Common;